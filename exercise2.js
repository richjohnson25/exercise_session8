class Employee {
    name = ""
    workingHours = 0
    salary = 0

    overtimeWage = 0
    normalWage = 0

    constructor(name, overtimeWage, normalWage){
        this.name = name
        this.overtimeWage = overtimeWage
        this.normalWage = normalWage
    }

    addWorkingHour(hours){
        this.workingHours += hours
    }

    calculateSalary(){
        if(this.workingHours > 6){
            this.salary = 6 * this.normalWage
            this.salary += (this.workingHours - 6) * this.overtimeWage
        } else {
            this.salary = this.workingHours * this.normalWage
        }
    }
}

class FulltimeEmployee extends Employee {
    constructor(name){
        super(name, 75000, 100000)
    }
}

class ParttimeEmployee extends Employee {
    constructor(name){
        super(name, 30000, 50000)
    }
}

let dimas = new FulltimeEmployee("Dimas")
dimas.addWorkingHour(3)
dimas.addWorkingHour(8)
dimas.calculateSalary()

console.log(dimas)

let rian = new ParttimeEmployee("Rian")
rian.addWorkingHour(7)
rian.calculateSalary()

console.log(rian)