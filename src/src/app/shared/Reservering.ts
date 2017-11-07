import {ReserveringEnum} from "../shared/ReserveringEnum";

export class Reservering {

  private _id: string;
  private _studentNaam:string;
  private _hardwareId: string;
  private _reserveringsDatum: string;
  private _status: ReserveringEnum;
  private _terugbrengdatum: string;

  constructor(id: string, studentNaam: string, hardwareId: string, reserveringsDatum: string, status: ReserveringEnum, terugbrengdatum: string) {
    this._id = id;
    this._studentNaam = studentNaam;
    this._hardwareId = hardwareId;
    this._reserveringsDatum = reserveringsDatum;
    this._status = status;
    this._terugbrengdatum = terugbrengdatum;
  }


  get id(): string {
    return this._id;
  }

  get studentNaam(): string {
    return this._studentNaam;
  }

  get hardwareNaam(): string {
    return this._hardwareId;
  }

  get reserveringsDatum(): string {
    return this._reserveringsDatum;
  }

  get status(): ReserveringEnum {
    return this._status;
  }

  get terugbrengdatum(): string {
    return this._terugbrengdatum;
  }


  set id(value: string) {
    this._id = value;
  }

  set studentNaam(value: string) {
    this._studentNaam = value;
  }

  set hardwareNaam(value: string) {
    this._hardwareId = value;
  }

  set reserveringsDatum(value: string) {
    this._reserveringsDatum = value;
  }

  set status(value: ReserveringEnum) {
    this._status = value;
  }

  set terugbrengdatum(value: string) {
    this._terugbrengdatum = value;
  }

 /* function terugBrengDatum(this: void){
    var currentDate = new Date()
    var day = currentDate.getDate()
    var month = currentDate.getMonth() + 1
    var year = currentDate.getFullYear()
  this._terugbrengdatum = (""+(day + "/" + month + "/" + year));
  }
*/
}
