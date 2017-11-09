/**
 * Created by pijlmanb on 4-11-2017.
 */
export class Hardware {
  get id(): string {
    return this._id;
  }

  get naam(): string {
    return this._naam;
  }

  get beschrijving(): string {
    return this._beschrijving;
  }

  get aantal(): any {
    return this._aantal;
  }
  private _id: string;
  private _naam:string;
  private _beschrijving: string;
  private _aantal: any;


  constructor(id: string, naam: string, beschrijving: string, aantal: any) {
    this._id = id;
    this._naam = naam;
    this._beschrijving = beschrijving;
    this._aantal = aantal;
  }

}
