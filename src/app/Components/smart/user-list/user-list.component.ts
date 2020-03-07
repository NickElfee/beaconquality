import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { UserService } from "../../../Services/user.service";
import { UserDto } from "../../../Interfaces/user.dto";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent implements OnInit {
  public userList$: Observable<UserDto[]>;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userList$ = this.userService.getAllUsers$();
  }
}
