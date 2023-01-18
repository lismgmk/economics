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
    console.log(
      "время, затраченное на выполнение операций по сбору и транспортировке",
      this.cicl
    );
  }

  setPSmen() {
    this.pSmen =
      ((countWorkHour * 3600 - 3900)*0.65*0.7*0.8 * this._Vp * 6 * 0.024*0.785*0.04) / 60;
    console.log("сменная производительность", this.pSmen);
  }

  setPyear() {
    this.pYear = this.pSmen * 269 * 1;
    console.log("годовая производительность", this.pYear);
  }

  setSeveralHardWorkn() {
    this.severalHardWorkn = (countWorkHour * 1) / this.pSmen;
    console.log("Удельная трудоемкость", this.severalHardWorkn);
  }

  setProduction() {
    this.production =countWorkHour / this.severalHardWorkn;
    console.log("выработка", this.production);
  }
}
