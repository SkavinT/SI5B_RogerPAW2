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
  private messageSubs: Subscription = new Subscription();
  messageExecute: string = '';
  mode: string = 'simpan';
  currentBukuId: string | null = null;

  //pagination
  p: number = 1;

  constructor(public bukuService: BukuService) {}

  ngOnInit(): void {
    this.bukuSubs = this.bukuService.getBukuListener().subscribe((value: Buku[]) => {
      this.bukuList = value;
    });
    this.messageSubs = this.bukuService.exexuteBukuListener().subscribe((value: string) => {
      this.messageExecute = value;
    });
    this.bukuService.getBuku();
  }

  ngOnDestroy(): void {
    this.bukuSubs.unsubscribe();
    this.messageSubs.unsubscribe();
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
      genres.push('Lainnya');
    }
    if(this.mode.toUpperCase() === "SIMPAN"){
      this.bukuService.addBuku(form.value.judul, form.value.penulis,genres);
    }else{
      this.bukuService.updateBuku(form.value.judul, form.value.penulis,
        genres, form.value.id);
    }

    
    form.resetForm();
  }

  hapusBuku(buku: Buku) {
    this.bukuService.deleteBuku(buku);
  }

  tampilData(buku: Buku, form: NgForm) {
    var genre1 = false;
    var genre2 = false;
    var genre3 = false;

    buku.genre.forEach((value) => {
      if (value.toUpperCase().trim() === 'BIOGRAFI') {
        genre1 = true;
      } else if (value.toUpperCase().trim() === 'PENDIDIKAN') {
        genre2 = true;
      } else if (value.toUpperCase().trim() === 'LAINNYA') {
        genre3 = true;
      }
    });

    form.setValue({
      id: buku._id,
      judul: buku.judul,
      penulis: buku.penulis,
      genre1: genre1,
      genre2: genre2,
      genre3: genre3
    });

    this.mode = 'edit';
  }
  onReset(){
    this.mode = 'simpan';
    this.messageExecute = '';
  }
}