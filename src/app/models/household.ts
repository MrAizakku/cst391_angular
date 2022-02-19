import { Item } from "./item";

export class Household
{
    private id:number = -1;
    private name:string = "";
    private address:string = "";
    private description:string = "";
    private created_at:string = "";
    private updated_at:string = "";
    private items:Item[];

    constructor(id:number, name:string, address:string, description:string, created_at:string, updated_at:string, items:Item[]){
        this.id = id;
        this.name = name;
        this.address = address;
        this.description = description;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.items = items;
    }

    get Id():number{
        return this.id;
    }
    set Id(id:number){
        this.id = id;
    }

    get Name():string{
        return this.name;
    }
    set Name(name:string){
        this.name = name;
    }

    get Address():string{
        return this.address;
    }
    set Address(address:string){
        this.address = address;
    }

    get Description():string{
        return this.description;
    }
    set Description(description:string){
        this.description = description;
    }

    get Created_at():string{
        return this.created_at;
    }
    set Created_at(created_at:string){
        this.created_at = created_at;
    }

    get Updated_at():string{
        return this.updated_at;
    }
    set Updated_at(updated_at:string){
        this.updated_at = updated_at;
    }

    get Items():Item[]{
        return this.items;
    }
    set Items(items:Item[]){
        this.items = items;
    }
}