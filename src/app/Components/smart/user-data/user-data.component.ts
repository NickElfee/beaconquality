import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { UserService } from "../../../Services/user.service";
import { Observable } from "rxjs";
import { UserDto } from "../../../Interfaces/user.dto";
import { map, switchMap } from "rxjs/operators";

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserDataComponent implements OnInit {
  public user$: Observable<UserDto>;
  public userId$: Observable<number>;

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.getUserDataById();
  }

  private getUserDataById(): void {
    this.userId$ = this.activatedRoute.params
      .pipe(
        map((user: UserDto) => user.id),
      );

    this.user$ = this.userId$
      .pipe(
        switchMap((userId: number) => this.userService.getUserById$(userId))
      );
  }
}
