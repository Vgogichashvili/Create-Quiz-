import { Guid } from "../services/guid.service";

export class Answer {
    public id:string = Guid.new();
    public isValid:boolean = false;
    public text!:string;
}