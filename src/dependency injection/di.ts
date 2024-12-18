class Parent {
    name: string = 'By Default';

    updateName(name: string) {
        this.name = name;
    }
}

class Child {
    name:string = "HeY i am Original child";

    updateName(str:string){
        this.name = str;
    }
}

class DependencyInjection<T> {
    private static existingInstances: Map<Function, any> = new Map();

    constructor() {}

    static getInstance<T>(instance: { new (): T }): T {
        const existing = DependencyInjection.existingInstances.get(instance);

        if (existing) {
            return existing;
        } else {
            const data = new instance();
            DependencyInjection.existingInstances.set(instance, data);
            return data;
        }
    }
}
console.log("direct class",Child);
const children1 = DependencyInjection.getInstance(Child);
const children2 = DependencyInjection.getInstance(Child);
console.log(children1.name);
children1.updateName("NoBody");
console.log(children1.name);
console.log(children2.name);

const classKey3 = DependencyInjection.getInstance(Parent);
const classKey4 = DependencyInjection.getInstance(Parent);

console.log(classKey3 === classKey4); 
console.log(classKey3.name);          
classKey4.updateName('DI update');
console.log(classKey3.name); 
console.log(classKey4.name);  

const parental = new Parent();

function tester(needNew: boolean) {
    if (needNew) {
        return new Parent();  
    } else {
        return parental;  
    }
}

function genericType<T>(data:T):T{
    return data;
}

genericType<number>(123);

genericType<string>('data');


const classKey1 = tester(true);  
// console.log(classKey1.name);     
classKey1.updateName('Updated from 1');
// console.log(classKey1.name);   

const classKey2 = tester(true); 
// console.log(classKey2.name);     
classKey2.updateName('From 2 I updated');
// console.log(classKey1.name);   
// console.log(classKey2.name);  

 
