export class PropertyEfficient {
  private pYear: number;
  private coastCar: number;

  specialInvest = 0;
  comparePoduct = 0;

  constructor(coastCar: number, pYear: number) {
    this.pYear = pYear;
    this.coastCar = coastCar;
  }

  setSpecialInvest() {
    this.specialInvest = this.coastCar / (this.pYear * 5);
    console.log('удельные капитальные вложения', this.specialInvest);
    return this.specialInvest;
  }
}
