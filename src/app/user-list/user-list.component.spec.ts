import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserListComponent } from './user-list.component';
import { UserStore } from '../store/user.store';
import { of } from 'rxjs';
import { User } from '../_models/user.model';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  let mockUserStore: jest.Mocked<UserStore>;
  let users: User[];

  beforeEach(async () => {
    users = [
      { id: 1, firstName: 'John', lastName: 'Doe', username: 'jdoe', isAdmin: true, department: 'Marketing' },
      { id: 2, firstName: 'Jane', lastName: 'Smith', username: 'jsmith', isAdmin: false, department: 'Management' }
    ];

    mockUserStore = {
      users$: of(users),
    } as jest.Mocked<UserStore>;

    await TestBed.configureTestingModule({
      declarations: [UserListComponent],
      providers: [
        { provide: UserStore, useValue: mockUserStore }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have users$ as an observable of users from the store', (done) => {
    component.users$.subscribe((data) => {
      expect(data).toEqual(users);
      done();
    });
  });
});
