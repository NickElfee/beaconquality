import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { GlobalState } from "../+state/global.reducers";
import { HttpClient } from "@angular/common/http";
import { UserDto } from "../Interfaces/user.dto";
import { filter, switchMapTo, take } from "rxjs/operators";
import { AddUser, AddUserList } from "../+state/user/actions/user.actions";
import { getAllUsers, getUserById } from '../+state/user/selectors/user.selectors';

const USER_LIST_URL = 'https://jsonplaceholder.typicode.com/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    private store$: Store<GlobalState>,
    private http: HttpClient,
  ) {}

  public getAllUsers$(): Observable<UserDto[]> {
    const checkStoreUsers$: Observable<UserDto[]> = this.store$.select(getAllUsers);

    checkStoreUsers$
      .pipe(
        take(1),
        filter((user: UserDto[]) => !user.length || user.length === 1),
        switchMapTo(this.http.get<UserDto[]>(USER_LIST_URL, {})),
      )
      .subscribe((userDtoList: UserDto[]) => this.store$.dispatch(new AddUserList(userDtoList)));

    return checkStoreUsers$;
  }

  private getCurrentUser$(id: number): Observable<UserDto> {
    return this.http.get<UserDto>(`${USER_LIST_URL}/${id}`, {});
  }

  public getUserById$(id: number): Observable<UserDto> {
    const checkStoreUser$ = this.store$.select(getUserById(id));

    checkStoreUser$
      .pipe(
        take(1),
        filter((userData: UserDto) => !userData),
        switchMapTo(this.getCurrentUser$(id)),
      ).subscribe(
        (userData: UserDto) => {this.store$.dispatch(new AddUser(userData))
      });

    return checkStoreUser$;
  }
}
