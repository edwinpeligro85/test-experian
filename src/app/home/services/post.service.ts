import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post, User } from '@app/interfaces';
import { Observable } from 'rxjs';

const routes = {
  users: () => `/users`,
  posts: () => `/posts`,
  postsByUser: (userId: number) => `/posts?userId=${userId}`,
};

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private httpClient: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(routes.users());
  }

  getPosts(userId: number): Observable<Post[]> {
    return this.httpClient.get<Post[]>(routes.postsByUser(userId));
  }

  createPost(body: Partial<Post>): Observable<Post> {
    return this.httpClient.post<Post>(routes.posts(), body);
  }
}
