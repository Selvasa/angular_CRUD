import { inject, Injectable } from '@angular/core';
import { IStudent } from '../model/student';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private http = inject(HttpClient);

  constructor() { }
  postStudentData(studentData: IStudent) {
    return this.http.post('http://localhost:3000/students', studentData)
  }

  getStudentData() {
    return this.http.get('http://localhost:3000/students')
  }

  deleteStudent(id: any) {
    return this.http.delete('http://localhost:3000/students/' + id)
  }

  getSingleStudent(id: any) {
    return this.http.get('http://localhost:3000/students/' + id)
  }
  updateOne(id: any, singlestudent: any) {
    return this.http.put('http://localhost:3000/students/' + id, singlestudent)
  }
}
