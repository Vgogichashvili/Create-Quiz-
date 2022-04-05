import { Guid } from "../services/guid.service";
import { Answer } from "./answer.model";

export class Test {
    public id:string = Guid.new();
    public imageUrl!:string;
    public description!:string;
    public answers!:Answer[];

    constructor(){
        this.answers = [
            new Answer(),
            new Answer(),
            new Answer(),
            new Answer()
        ]
    }
}

