import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/core/interfaces/post.interface';
import { PostsService } from 'src/app/core/services/posts.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  public title: string;
  public postForm: FormGroup;
  public showError: boolean;
  public post: Post;
  public idPost: number;

  constructor(
    private fb: FormBuilder,
    private postService: PostsService,
    private router: Router,
    private route: ActivatedRoute,
    ) { }

  async ngOnInit() {
    await this.setTypeTask();
    this.setForm();
  }

  public async onSubmit(){
    this.post = this.idPost ? await this.postService.editPost(this.postForm.value) : await this.postService.savePost(this.postForm.value);
    this.post ? this.redirectList() : this.showError = true;
  }

  private async setTypeTask(){
    this.idPost = this.route.snapshot.params['id'];
    this.title = this.idPost ? 'Formulario de edición' : 'Formulario de creación';
    await this.getData();
  }

  private async getData(){
    if( this.idPost ){
      this.post = (await this.postService.getPostById(this.idPost));
    }
  }

  private setForm(){
    this.postForm = this.fb.group({
      title: [ this.post?.title || '' , [Validators.required, Validators.minLength(3)]],
      body: [this.post?.body || '', [Validators.required, Validators.minLength(3)]],
      id: [ this.post?.id || 1],
      userId: [ this.post?.userId || '']
    });
  }

  private redirectList(){
    this.router.navigate(['/list']);
  }

}
