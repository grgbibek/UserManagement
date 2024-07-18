import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserListComponent } from './user-list.component';
import { UserService } from '../_services/user.service';
import { of } from 'rxjs';
import { User } from '../_models/user.model';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  let userService: UserService;

  beforeEach(async () => {
    const userServiceMock = {
      getUsers: jest.fn(() => of([{ id: 1, firstName: 'John', lastName: 'Doe', username: 'jdoe', isAdmin: true, department: 'Marketing' }] as User[]))
    };

    await TestBed.configureTestingModule({
      declarations: [UserListComponent],
      providers: [
        { provide: UserService, useValue: userServiceMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UserService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch users on initialization', () => {
    component.ngOnInit();

    expect(component.users$).toBeDefined();
    component.users$.subscribe(users => {
      expect(users.length).toBe(1);
      expect(users[0].firstName).toBe('John');
    });
  });

});
