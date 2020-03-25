export class RegisterBean {

    private id: number;
    private name: number;
    private password: string;
    private confirmPassword: string;

    constructor(id, name, password, confirmPassword) {
        this.id = id;
        this.name = name;
        this.password = password;
        this.confirmPassword = confirmPassword;
    }

    public getId() {
        return this.id;
    }

    public getName() {
        return this.name;
    }

    public getPassword() {
        return this.password;
    }

    public getConfirmPassword() {
        return this.confirmPassword;
    }


}