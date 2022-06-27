export class User {
    name: string;
    phoneNum: number;
    email: string;

    constructor(name: string, phoneNumber: number, email: string){
        this.name = name;
        this.phoneNum = phoneNumber;
        this.email = email;
    }
}
