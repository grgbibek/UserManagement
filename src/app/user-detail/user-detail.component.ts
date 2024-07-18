import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, switchMap } from 'rxjs';
import { User } from '../_models/user.model';
import { UserStore } from '../store/user.store';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user$!: Observable<User | undefined>;

  constructor(
    private route: ActivatedRoute,
    private userStore: UserStore
  ) {}

  ngOnInit(): void {
    this.user$ = this.route.paramMap.pipe(
      switchMap(params => {
        const userId = Number(params.get('userId'));
        return this.userStore.users$.pipe(
          map(users => users.find(user => user.id === userId))
        );
      })
    );
  }
}
