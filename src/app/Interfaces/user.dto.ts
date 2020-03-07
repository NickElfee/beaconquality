import { AddressDto } from "./address.interface";
import { CompanyDto } from "./company.interface";

export interface UserDto {
  id: number;
  name: string;
  username: string;
  email: string;
  address: AddressDto;
  phone: string;
  website: string;
  company: CompanyDto;
}
