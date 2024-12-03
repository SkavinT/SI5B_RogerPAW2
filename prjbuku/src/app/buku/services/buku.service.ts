import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Buku } from '../../models/buku.model';

@Injectable({
  providedIn: 'root'
})
export class BukuService {
  // private url: string = "https://apisi51.vercel.app/buku/";
  private url: string = "http://localhost:3000/buku/";
  private subjectBuku = new Subject<Buku[]>();
  private subjectExexute = new Subject<string>();

  constructor(private http: HttpClient) { }

  exexuteBukuListener() {
    return this.subjectExexute.asObservable();
  }

  getBukuListener() {
    return this.subjectBuku.asObservable();
  }

  getBuku() {
    this.http.get<{ message: string, bukus: Buku[] }>(this.url).subscribe((value) => {
      console.log(value.bukus);
      this.subjectBuku.next(value.bukus);
    });
  }

  addBuku(judul: string, penulis: string, genres: string[]) {
    const buku: Buku = {
      _id: null,
      judul: judul,
      penulis: penulis,
      genre: genres
    };
    this.http.post<{ message: string }>(this.url, buku).subscribe((response) => {
      console.log(response.message);
      this.getBuku(); // Refresh the list of books after adding a new one
    });
  }

  deleteBuku(buku: Buku) {
    this.http.delete<{ message: string }>(`${this.url}${buku._id}`).subscribe((response) => {
      // console.log(response.message);
      this.getBuku(); // Refresh the list of books after deleting one
      this.subjectExexute.next(response.message);

    });
  }
}
