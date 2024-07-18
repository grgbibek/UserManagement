import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../_models/user.model';
import { UserStore } from '../store/user.store';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users$: Observable<User[]> = this.userStore.users$;

  constructor(private userStore: UserStore) {}

}
