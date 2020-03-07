import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { UserDto } from "../../../Interfaces/user.dto";

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserInformationComponent {
  @Input() public userData: UserDto;
}
