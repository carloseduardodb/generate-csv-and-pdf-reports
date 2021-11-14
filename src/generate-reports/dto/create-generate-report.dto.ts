import { AddressObject } from "mailparser";

export class CreateGenerateReportDto {
  text: string;
  date: Date;
  from: AddressObject;
  to: AddressObject | AddressObject[];
}
