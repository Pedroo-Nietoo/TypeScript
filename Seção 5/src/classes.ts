abstract class Department { 
    protected employees: string[] = [];
    static lastYear = 2022;

    constructor(protected readonly id: string, public name: string) { }

    static createEmployee(name: string) {
        return { nome: name };
    }

    abstract describe(this: Department): void ;
    

    addEmployee(employee: string) {
        //validação, etc
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class ITDepartment extends Department {
    constructor(id: string, public admins: string[]) {
        super(id, 'IT');
    }

    describe() {
        console.log(`IT Department - ID ${this.id}`);
    }
}

class AccountingDepartment extends Department {
    private lastReport: string;
    private static instance: AccountingDepartment;

    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('Nenhum report encontrado.')
    }

    set mostRecentReport(value: string) {
        if (!value) {
            throw new Error('Favor inserir um valor válido');
        }
        this.addReport(value);
    }

    private constructor(id: string, private reports: string[]) { //Só pode ter um construtor
        super(id, 'Accounting');
        this.lastReport = reports[0];
    }

    static getInstance() { //*Singleton
        if(this.instance) {
            return this.instance; //ou AccountingDepartment.instance
        }
        this.instance = new AccountingDepartment('D2', []);
        return this.instance;
    }

    describe() {
        console.log(`Accounting Department - ID ${this.id}`);
    }

    addEmployee(name: string) {
        if (name == 'Max') {
            return;
        }
        this.employees.push(name);
    }

    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }

    printReports() {
        console.log(this.reports);
    }
}

//-----------------------------//
const employee1 = Department.createEmployee('Max');
console.log(employee1, Department.lastYear)

const it = new ITDepartment('A1', ["Pedro"]);

it.addEmployee('Pedro');
it.addEmployee('João');

it.describe();
it.name = 'NEW NAME';
it.printEmployeeInformation();

console.log(it);

const accounting = AccountingDepartment.getInstance();

accounting.mostRecentReport = 'Year End Report';
accounting.addReport('Sometthing went wrong...')
console.log(accounting.mostRecentReport)

accounting.addEmployee('Pedro');
accounting.addEmployee('João');

accounting.describe()


