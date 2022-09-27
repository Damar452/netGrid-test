import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from 'src/app/core/interfaces/post.interface';
import { PostsService } from 'src/app/core/services/posts.service';
import { loadPosts } from 'src/app/state/actions/posts.actions';
import { selectLoading } from '../../state/selectors/posts.selector';
import { loadedPosts } from '../../state/actions/posts.actions';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public posts: Post[];
  public postSelected: number;
  public showError: boolean;
  public loading$: Observable<boolean> = new Observable();

  constructor(
    private postService: PostsService,
    private router: Router,
    private store: Store<any>
  ) { }

  async ngOnInit() {
    this.getPosts();
  }

  private async getPosts(){
    this.loading$ = this.store.select(selectLoading);
    this.store.dispatch(loadPosts());
    this.posts = await this.postService.getPosts();
    this.store.dispatch(loadedPosts({posts: this.posts}));
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
