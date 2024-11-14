import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-buku',
  templateUrl: './buku.component.html',
  styleUrls: ['./buku.component.css']
})
export class BukuComponent {
  simpanBuku(form: NgForm) {
    // console.log("Pengujian Klik");
    console.log(form.value.judul, form.value.penulis, form.value.genre);
  }
}
