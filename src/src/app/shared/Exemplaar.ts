/**
 * Created by pijlmanb on 4-11-2017.
 */
import {ExemplaarStatus} from "../shared/ExemplaarStatusEnum";

export class Exemplaar {
  hardwareId: string;
  serienummer: string;
  status: ExemplaarStatus;
  inleverdatum: string;

  constructor(hardwareId: string,
              serienummer: string,
              status: ExemplaarStatus,
              inleverdatum: string) {
    this.hardwareId = hardwareId;
    this.serienummer = serienummer;
    this.status = status;
    this.inleverdatum = inleverdatum;
  }

}
