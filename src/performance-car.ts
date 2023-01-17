import { countWorkHour } from "./utils/consts";

export class PerformanceCar {
  private _Vp: number;

  cicl = 0;

  pSmen = 0;
  pYear = 0;
  severalHardWorkn = 0;
  production = 0;

  constructor(Vp: number) {
    this._Vp = Vp;
  }

  get Vp(): number {
    return this._Vp;
  }

  set Vp(value: number) {
    this._Vp = value;
  }

  setCicl(obj: { [n: string]: number }) {
    let result: number = 0;
    Object.values(obj).forEach((el) => {
      result += el;
    });
    this.cicl = result;
  }

  setPSmen() {
    this.pSmen =
      ((countWorkHour * 3600 - 2400) * this._Vp * 0.85 * 0.87) / this.cicl;
  }

  setPyear() {
    this.pYear = this.pSmen * 269 * 1;
  }

  setSeveralHardWorkn() {
    this.severalHardWorkn = (countWorkHour * 1) / this.pSmen;
  }

  setProduction() {
    this.production = this.pSmen / this.severalHardWorkn;
  }
}
