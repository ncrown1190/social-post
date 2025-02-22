import { Component, EventEmitter, Output } from '@angular/core';
import { Post } from '../../model/post.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-post-form',
  standalone: false,
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.css',
})
export class PostFormComponent {
  newPost: Post = {} as Post;
  @Output() PostCreated = new EventEmitter<Post>();
 

  submitPost(): void {
    this.PostCreated.emit(this.newPost);
    this.newPost = {} as Post;
  }

  display: boolean = true;
  ToggleDisplay(): void {
    this.display = !this.display;
  }
}
