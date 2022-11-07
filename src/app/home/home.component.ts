import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Post, User } from '@app/interfaces';
import { finalize, mergeMap, tap } from 'rxjs/operators';

import { UntilDestroy, untilDestroyed } from '@shared';
import { PostService } from './services/post.service';

@UntilDestroy()
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public users: User[] = [];
  public posts: Post[] = [];
  public isLoading = false;
  public currentPage = 1;
  public form!: FormGroup;

  constructor(private _post: PostService, private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    this.changeUser();

    this.isLoading = true;
    this._post
      .getUsers()
      .pipe(
        tap((users) => (this.users = users)),
        mergeMap((users) => {
          const firstUser = users[0];
          this.form.get('userId')?.setValue(firstUser?.id, { emitEvent: false });

          return this._post.getPosts(firstUser?.id ?? 1);
        }),
        finalize(() => (this.isLoading = false))
      )
      .subscribe((posts) => {
        this.posts = posts;
      });
  }

  onSubmit(): void {
    if (this.form.invalid) return;

    this.isLoading = true;
    this._post
      .createPost(this.form.value)
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe((post) => (this.posts = [post, ...this.posts]));
  }

  private changeUser(): void {
    this.form
      .get('userId')
      ?.valueChanges.pipe(untilDestroyed(this))
      .subscribe((userId: number) => {
        this.isLoading = true;
        this._post
          .getPosts(userId)
          .pipe(finalize(() => (this.isLoading = false)))
          .subscribe((posts) => (this.posts = posts));
      });
  }

  private createForm(): void {
    this.form = this.fb.group({
      body: ['', [Validators.required, Validators.minLength(3)]],
      title: ['', [Validators.required, Validators.minLength(3)]],
      userId: [null, Validators.required],
    });
  }
}
