import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../_models/user.model';
import { UserService } from '../_services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  userForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router
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
    this.userService.addUser(newUser);
    this.userForm.reset();
    this.router.navigate(['/']);
  }
}
