import {v4 as uuidv4} from 'uuid';

export class PlanningEvent {
    
    
    dateInit:string;
    name:string;
    date:string;
    finished:boolean;
    going:boolean;   

    constructor()
    constructor(name:string,date:string,dateInit:string,finished:boolean,going:boolean)
    constructor(name?:string,date?:string,dateInit?:string,finished?:boolean,going?:boolean) {
        this.dateInit = dateInit ?? "";
        this.name = name ?? "";
        this.date=date ?? "";
        this.finished=finished ?? false;
        this.going=going ?? false
      }
    
}
