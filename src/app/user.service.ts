import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class UserService{
    userName: string;
    constructor(public http:HttpClient){
        //this.username='Anonymous User';
        http.get('https://jsomlaceholder.typecode.com/users/1')
        .subscribe(Response=>{
            this.userName=Response['name'];
            console.log('Response:',JSON.stringify(Response));
        })
    console.log('service created');
    }

    changeUserName(userName:string):void{
        this.userName=userName;
    }
}