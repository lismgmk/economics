// 5.3.1 Расчет производительности техники

// const Tcicl = (Tpogr, Trazgr, Trx, Txx, Tpper, Trper) => {
//   return Tpogr + Trazgr + Trx + Txx + Tpper + Trper;
// };

// const Psmen = (Vp, Tcicl) => {
//   return ((8 * 25200 - 2400) * Vp * 0.85 * 0.87) / Tcicl;
// };

class PerformanceCar {
  private _Vp: number;

  cicl = 0;
  countWorkDay = 8;
  pSmen = 0;
  pYear = 0;
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
      ((this.countWorkDay * 3600 - 2400) * this._Vp * 0.85 * 0.87) / this.cicl;
  }

  setPyear() {
    this.pYear = this.pSmen * 269 * 1;
  }

  setSeveralHardWorkn() {}

  setProduction() {}
}

const performProject = new PerformanceCar(12);
const cicleParam = {
  Tpogr: 538.7,
  Trazgr: 484.8,
  Trx: 378.9,
  Txx: 213.5,
  Tpper: 740.7,
  Trper: 25,
};
performProject.setCicl(cicleParam);
performProject.setPSmen();
console.log(performProject.pSmen, "!!!!!");

// const cicl = performProject.setTcicl(538.7, 484.8, 378.9, 213.5, 740.7, 25);
// const pr = performProject.setPsmen();
// performProject.setPyear();
// console.log(performProject.pSmen, performProject.pYear);

// Производительность труда и трудоемкость производственных
// операций
