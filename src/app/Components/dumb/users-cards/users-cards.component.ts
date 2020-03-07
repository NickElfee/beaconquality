import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { UserDto } from "../../../Interfaces/user.dto";

@Component({
  selector: 'app-users-cards',
  templateUrl: './users-cards.component.html',
  styleUrls: ['./users-cards.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersCardsComponent {
  @Input() public userList: UserDto[];
}
