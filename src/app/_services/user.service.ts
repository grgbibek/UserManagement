import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../_models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [
    { id: 1, firstName: 'John', lastName: 'Doe', username: 'jdoe', isAdmin: true, department: 'Marketing' },
    { id: 2, firstName: 'Jane', lastName: 'Smith', username: 'jsmith', isAdmin: false, department: 'Management' },
    { id: 3, firstName: 'Alice', lastName: 'Johnson', username: 'ajohnson', isAdmin: false, department: 'Maintenance' },
    { id: 4, firstName: 'Bob', lastName: 'Brown', username: 'bbrown', isAdmin: true, department: 'Marketing' },
    { id: 5, firstName: 'Charlie', lastName: 'Davis', username: 'cdavis', isAdmin: false, department: 'Management' },
    { id: 6, firstName: 'Diana', lastName: 'Miller', username: 'dmiller', isAdmin: true, department: 'Maintenance' },
    { id: 7, firstName: 'Eve', lastName: 'Wilson', username: 'ewilson', isAdmin: false, department: 'Marketing' },
    { id: 8, firstName: 'Frank', lastName: 'Moore', username: 'fmoore', isAdmin: true, department: 'Management' },
    { id: 9, firstName: 'Grace', lastName: 'Taylor', username: 'gtaylor', isAdmin: false, department: 'Maintenance' },
    { id: 10, firstName: 'Hank', lastName: 'Anderson', username: 'handerson', isAdmin: true, department: 'Marketing' }
  ];

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  getUserById(id: number): Observable<User> {
    return of(this.users.find(user => user.id === id)!);
  }

  addUser(user: User): void {
    this.users.push(user);
  }
}
