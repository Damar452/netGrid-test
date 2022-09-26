import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { firstValueFrom } from 'rxjs';
import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  public async getPosts(): Promise<Post[]> {
    return await firstValueFrom(this.http.get<Post[]>(`${environment.postApi}`));
  }

  public async getPostById(id: number): Promise<Post> {
    return await firstValueFrom(this.http.get<Post>(`${environment.postApi}${id}`));
  }

  public async deletePost(id: number): Promise<any>{
    return await firstValueFrom(this.http.delete(`${environment.postApi}${id}`));
  }

  public async savePost(post: Post): Promise<Post>{
    return await firstValueFrom(this.http.post<Post>(`${environment.postApi}`, post));
  }

  public async editPost(post: Post): Promise<Post>{
    return await firstValueFrom(this.http.put<Post>(`${environment.postApi}/${post.id}`, post));
  }
}
