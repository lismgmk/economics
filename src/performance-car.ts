import { countWorkHour } from './utils/consts';

export class PerformanceCar {
  _Vp: number;

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
      'время, затраченное на выполнение операций по сбору и транспортировке',
      this.cicl
    );
    return this.cicl;
  }

  setPSmen(x?: number) {
    this.pSmen =
      x || ((countWorkHour * 3600 - 2400) * this._Vp * 0.85 * 0.87) / this.cicl;

    console.log('сменная производительность', this.pSmen);
    return this.pSmen;
  }

  setPyear() {
    this.pYear = this.pSmen * 269 * 1;
    console.log('годовая производительность', this.pYear);
    return this.pYear;
  }

  setSeveralHardWorkn() {
    this.severalHardWorkn = (countWorkHour * 1) / this.pSmen;
    console.log('Удельная трудоемкость', this.severalHardWorkn);
    return this.severalHardWorkn;
  }

  setProduction() {
    this.production = countWorkHour / this.severalHardWorkn;
    console.log('выработка', this.production);
    return this.production;
  }
}
