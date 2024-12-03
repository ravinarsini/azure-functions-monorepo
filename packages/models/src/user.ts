export class User {
    id!: number;
    name!: string;
    constructor(){}
    setUser(id : number, name: string){
        this.id = id;
        this.name = name;
    }
} 
