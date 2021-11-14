import { AddressObject } from "mailparser";

export class ImapGetEmailDto {
  text: string;
  date: Date;
  from: AddressObject;
  to: AddressObject | AddressObject[];
}
