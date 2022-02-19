export class Item
{
    private id:number = -1;
    private name:string = "";
    private description:string = "";
    private quantity:number = -1;
    private households_id:number = -1;
    private created_at:string = "";
    private updated_at:string = "";

    constructor(id:number, name:string, description:string, quantity:number, households_id:number, created_at:string, updated_at:string){
        this.id = id;
        this.name = name;
        this.description = description;
        this.quantity = quantity;
        this.households_id = households_id;
        this.created_at = created_at;
        this.updated_at = updated_at;
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

    get Description():string{
        return this.description;
    }
    set Description(description:string){
        this.description = description;
    }

    get Quantity():number{
        return this.quantity;
    }
    set Quantity(quantity:number){
        this.quantity = quantity;
    }

    get Households_id():number{
        return this.households_id;
    }
    set Households_id(households_id:number){
        this.households_id = households_id;
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
}