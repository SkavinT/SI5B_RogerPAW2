import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { BukuService } from '../services/buku.service';
import { Buku } from '../models/buku.model';

@Component({
  selector: 'app-buku',
  templateUrl: './buku.component.html',
  styleUrls: ['./buku.component.css'],
  
})
export class BukuComponent implements OnInit, OnDestroy {
  bukuList: Buku[] = [];
  private bukuSubs: Subscription = new Subscription();

  //pagination
  p: number = 1;

  constructor(public bukuService: BukuService) {}

  ngOnInit(): void {
    this.bukuSubs = this.bukuService.getBukuListener().subscribe((bukus: Buku[]) => {
      this.bukuList = bukus;
    });
    this.bukuService.getBuku();
  }

  ngOnDestroy(): void {
    this.bukuSubs.unsubscribe();
  }

  simpanBuku(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const genres: string[] = [];
    if (form.value.genre1) {
      genres.push('Biografi');
    }
    if (form.value.genre2) {
      genres.push('Pendidikan');
    }
    if (form.value.genre3) {
      genres.push('Lainya');
    }
    this.bukuService.addBuku(form.value.judul, form.value.penulis, genres);
    form.resetForm();
  }
  hapusBuku(buku: Buku) {
    this.bukuService.deleteBuku(buku);
  }
}
