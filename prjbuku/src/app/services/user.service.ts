import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../models/user.model';
import { error } from 'console';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url : string = "http://localhost:3000/user/";
  // private url : string = "https://apisi51.vercel.app/buku/";

  private subjectExecuteUser = new Subject<string>();

  executeUserListener(){
    return this.subjectExecuteUser.asObservable();
  }
  addUser(email : string, password : string){
    const user : User ={
      _id : null,
      email : email,
      password : password
    };
    this.http.post<{message : string}>(this.url,user)
    .subscribe(
      (response)=>{
        this.subjectExecuteUser.next(response.message);
      },
      error=>{
        console.log(error);
        this.subjectExecuteUser.next(error.error.message);
      }
    );
  }

  constructor(public http: HttpClient) { }
}
