import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BukuService {
  private url:string = "http://localhost:3000/bukus";

  constructor(private http:HttpClient) { }

  addBuku(
    judul:string,
    penulis:string,
    genre:string[]
  ){
    const 
}
