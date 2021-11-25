import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): Promise<any> {
    let a, b:number;
    a = 3;
    b = 2;
    const res = this.addTwoNumber(a,b);
    return res ;
    
  }
  public async addTwoNumber(a:number,b:number): Promise<any>{
    const result = a+b;
    let nameY:string ="Число" +".\n\n" + result +".\n\n" + "= Четное";
    let nameN:string ="Число" +".\n\n" + result + ".\n\n" + "= Не четное";
    
    if (result % 2 ===0){
        return nameY;
    }
    else{
      return  nameN;
       
    }
     
  }
  
 
}
