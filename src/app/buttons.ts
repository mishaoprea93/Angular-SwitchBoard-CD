export class Buttons{
    value:string;
    index:number;
    
    constructor(value:boolean,index:number){
        if (value==true){
            this.value="ON"
        }else{
            this.value="OFF"
        }
        this.index=index;
    }
}