import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from '../../model/post.model';

@Component({
  selector: 'app-single-post',
  standalone: false,
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.css',
})
export class SinglePostComponent {
  // @Input() post:Post[] =[];
  @Input() post: Post = {} as Post;
  @Output() delete = new EventEmitter<Post>();

  remove(): void {
    this.delete.emit(this.post);
  }
}
