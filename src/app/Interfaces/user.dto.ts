import { AddressDto } from "./address.dto";
import { CompanyDto } from "./company.dto";
import { Identifiable } from "./identifiable.dto";

export interface UserDto extends Identifiable {
  id: number;
  name: string;
  username: string;
  email: string;
  address: AddressDto;
  phone: string;
  website: string;
  company: CompanyDto;
}
