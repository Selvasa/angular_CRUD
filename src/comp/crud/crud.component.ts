import { Component, EventEmitter, inject, Input, Output, VERSION } from '@angular/core';
import { FormComponent } from '../form/form.component';
import { ListComponent } from '../list/list.component';
import { CrudService } from '../crud.service';
import { map } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
    selector: 'app-crud',
    standalone: true,
    imports: [FormComponent, ListComponent],
    templateUrl: './crud.component.html',
    styleUrl: './crud.component.css',
    // encapsulation:
})
export class CrudComponent {

    // services
    private crudService = inject(CrudService);
    private store = inject(Store);

    // variables
    sStudent: any;
    studentList: any;

    valueFromChild(value: any) {
        this.crudService.postStudentData(value).subscribe(() => {
            this.getStudentData();
        });
    }
    ngOnInit() {
        this.crudService.getStudentData().subscribe((res: any) => {
            console.log('call one');
            this.studentList = res;
        })
        this.getStudentData();
        this.getEmp();
        this.store.select('reducer').subscribe((res) => {
            console.log(res);
        })
    }

    getStudentData() {
        this.crudService.getStudentData().subscribe((res: any) => {
            console.log('call two');
            this.studentList = res;
        })
    }
    singleStudent(value: any) {
        this.crudService.getSingleStudent(value).subscribe((res) => {
            this.sStudent = res;
        })
    }

    updateStudent(value: any) {
        this.crudService.updateOne(value.id, value.value).subscribe(() => {
            this.getStudentData();
        });
    }

    deleteStu(id: any) {
        console.log(id);

        this.crudService.deleteStudent(id).subscribe(() => {
            this.getStudentData();
        });
    }

    getEmp() {
        this.crudService.getEmpDetails().pipe(
            map((cart: any) => {
                const filteredEntryGroups = cart?.entryGroups?.filter(
                    (group: any) => group.type !== "STANDALONE" && group.label !== "Medpax printed Exterior"
                );

                const medpaxMapping = filteredEntryGroups?.reduce((acc: any[], group: any, groupIndex: number) => {
                    if (group.entries?.some((entry: any) => entry.product?.code === "000000000500000032")) {
                        const entryNumbers = group.entries.map((entry: any) => entry.entryNumber);
                        const subEntries = filteredEntryGroups.filter((entry: any) => entryNumbers.includes(entry.entryGroupNumber));
                        const detailsGroup = {
                            ...group,
                            entries: group.entries.filter((entry: any) => entry.product.code !== '000000000200000633'),
                        };
                        const actualDetails = cart.entries.find((item: any) => item.entryNumber === group.entryGroupNumber);

                        acc.push({
                            medpaxLabel: `Medpax ${groupIndex + 1}`,
                            details: detailsGroup,
                            entryNumbers,
                            entryNumber: group.entryGroupNumber,
                            actualDetails,
                            isMedPax: true,
                            subEntries,
                        });
                    }
                    return acc;
                }, []);

                const updatedOtherArray = cart?.entries.filter((entry: any) =>
                    !medpaxMapping.some((medpax: any) =>
                        entry.entryNumber >= medpax.entryNumber && entry.entryNumber <= medpax.entryNumber + 99
                    )
                );

                const newArray = [...updatedOtherArray, ...medpaxMapping].sort((a: any, b: any) => a.entryNumber - b.entryNumber);

                return { ...cart, entries: newArray };
            })
        ).subscribe()
    }
}
