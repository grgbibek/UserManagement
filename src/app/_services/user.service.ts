import { Injectable } from '@angular/core';
import { UserStore } from '../store/user.store';
import { User } from '../_models/user.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private userStore: UserStore) {}

  getUsers(): Observable<User[]> {
    return this.userStore.users$;
  }

  getUserById(id: number): Observable<User | undefined> {
    return this.userStore.users$.pipe(
      map(users => users.find(user => user.id === id))
    );
  }

  addUser(user: Omit<User, 'id'>): void {
    this.userStore.addUser(user);
  }

  setUsers(users: User[]): void {
    this.userStore.setUsers(users);
  }
}
