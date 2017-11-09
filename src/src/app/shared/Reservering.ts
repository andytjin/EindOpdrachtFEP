import {ReserveringEnum} from "../shared/ReserveringEnum";

export class Reservering {
  get aantal(): number {
    return this._aantal;
  }

  set aantal(value: number) {
    this._aantal = value;
  }
  private _id: string;
  private _studentNaam:string;
  private _hardwareId: string;
  private _harwareNaam: string;
  private _reserveringsDatum: string;
  private _status: ReserveringEnum;
  private _terugbrengdatum: string;
  private _aantal: number;


  constructor(id: string, studentNaam: string, hardwareId: string, harwareNaam: string, reserveringsDatum: string, status: ReserveringEnum, terugbrengdatum: string, aantal: number) {
    this._id = id;
    this._studentNaam = studentNaam;
    this._hardwareId = hardwareId;
    this._harwareNaam = harwareNaam;
    this._reserveringsDatum = reserveringsDatum;
    this._status = status;
    this._terugbrengdatum = terugbrengdatum;
    this._aantal = aantal;
  }

  get hardwareNaam(): string {
    return this._harwareNaam;
  }

  get id(): string {
    return this._id;
  }

  get studentNaam(): string {
    return this._studentNaam;
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


  set reserveringsDatum(value: string) {
    this._reserveringsDatum = value;
  }

  set status(value: ReserveringEnum) {
    this._status = value;
  }

  set terugbrengdatum(value: string) {
    this._terugbrengdatum = value;
  }

}
