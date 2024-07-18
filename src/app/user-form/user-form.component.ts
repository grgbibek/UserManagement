import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../_models/user.model';
import { Router } from '@angular/router';
import { UserStore } from '../store/user.store';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  userForm: FormGroup;

  constructor(private fb: FormBuilder, private userStore: UserStore, private router: Router
  ) {
    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      isAdmin: [false, Validators.required],
      department: ['', Validators.required],
    });
  }

  onSubmit(): void {
    const newUser: User = {
      id: Date.now(),
      ...this.userForm.value
    };
    this.userStore.addUser(newUser);
    this.router.navigate(['/']);

  }
}
