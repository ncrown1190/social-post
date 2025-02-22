import { Component } from '@angular/core';
import { Post } from '../../model/post.model';

@Component({
  selector: 'app-social-post',
  standalone: false,
  templateUrl: './social-post.component.html',
  styleUrl: './social-post.component.css',
})
export class SocialPostComponent {
  listPosts: Post[] = [
    {
      title: 'Grand Circus',
      thought: 'Grand Circus is cool ',
    },
    {
      title: 'Ritual',
      thought: 'Ritual is well developed app ',
    },
    {
      title: 'Scott',
      thought: 'Scott rides scooters ',
    },
  ];

  AddPost(post: Post): void {
    this.listPosts.push(post);
  }

  // display: boolean = false;

  showForm: boolean = false;
  ToggleDisplay(): void {
    this.showForm = !this.showForm;
  }

  RemovePost(target: Post): void {
    let index: number = this.listPosts.findIndex((p: Post) => p == target);
    this.listPosts.splice(index, 1);
  }

  GetPosts(): Post[] {
    return this.listPosts;
  }
}
