/**
 * Created by pijlmanb on 4-11-2017.
 */
import {ExemplaarStatus} from "../shared/ExemplaarStatusEnum";

export class Exemplaar {
  private _id: string;
  private _hardwareId: string;
  private _serienummer: string;
  private _status: ExemplaarStatus;
  private _inleverdatum: string;

  constructor(id: string, hardwareId: string,
              serienummer: string,
              status: ExemplaarStatus,
              inleverdatum: string) {
    this._id = id;
    this._hardwareId = hardwareId;
    this._serienummer = serienummer;
    this._status = status;
    this._inleverdatum = inleverdatum;
  }

  get id(): string {
    return this._id;
  }

  get hardwareId(): string {
    return this._hardwareId;
  }

  get serienummer(): string {
    return this._serienummer;
  }

  get status(): ExemplaarStatus {
    return this._status;
  }

  get inleverdatum(): string {
    return this._inleverdatum;
  }
}
