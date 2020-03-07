import {GeoDto} from "./geo.interface";

export interface AddressDto {
  street: string,
  suite: string,
  city: string,
  zipcode: string,
  geo: GeoDto;
}
