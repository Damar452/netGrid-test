import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/core/interfaces/post.interface';
import { PostsService } from 'src/app/core/services/posts.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public posts: Post[];
  public postSelected: number;
  public showError: boolean;

  constructor(
    private postService: PostsService,
    private router: Router,
  ) { }

  async ngOnInit() {
    this.getPosts();
  }

  private async getPosts(){
    this.posts = await this.postService.getPosts();
  }

  public setID(id: number){
    this.postSelected = id;
  }

  public async deletePost(confirm: boolean){
    // const response = confirm && await this.postService.deletePost(this.postSelected); The step is skipped by error in the API
    if(confirm) this.posts = this.posts.filter( post => post.id !== this.postSelected );
  }

  public openEdit(id: number){
    this.router.navigate(['/edit', id]);
  }

}
