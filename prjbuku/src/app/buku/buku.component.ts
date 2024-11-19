import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BukuService } from './services/buku.service';

@Component({
  selector: 'app-buku',
  templateUrl: './buku.component.html',
  styleUrls: ['./buku.component.css']
})
export class BukuComponent {
  constructor(public bukuService: BukuService){
    

  }

  simpanBuku(form: NgForm) {

    if (form.invalid) {
      console.log("Form Tidak Valid, Silahkan Cek Kembali");
      alert("Form Tidak Valid, Silahkan Cek Kembali");
      return;
    }
    let genres: string[] = [];

    if (form.value.genre1 === true) {
      genres.push("Biografi");
    }
    if (form.value.genre2 === true) {
      genres.push("Pendidikan");
    }
    if (form.value.genre3 === true) {
      genres.push("Lainya");
    }
    // else{
    //   genres.push("Tidak Ada Genre yang Dipilih");
    // }

    console.log("Pengujian Klik");
    console.log(form.value.judul, form.value.penulis, genres);

    this.bukuService.addBuku(form.value.judul, form.value.penulis, genres);
  }
}
