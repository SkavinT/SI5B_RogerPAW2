import { Component, input } from '@angular/core';

@Component({
  selector: 'app-post-create',
  standalone: true,
  imports: [],
  templateUrl: './post-create.component.html',
  styleUrl: './post-create.component.css'
})
export class PostCreateComponent {
  inputPost = '';
  newPost = 'Insialisasi post';

  onSavePost(){
    // alert('Post berhasil disimpan');
    this.newPost = this.inputPost;
  }

}
