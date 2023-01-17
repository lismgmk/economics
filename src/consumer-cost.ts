import { countWorkHour, fuelCoastLiter } from "./utils/consts";

export class ConsumerCosts {
  coastCar = 0;

  mSalaryMain = 0;
  mSalaryExtra = 0;
  ozpMain = 0;
  ozpExtra = 0;
  fuelCoast = 0;
  lubricantCoastEngine = 0;
  lubricantCoastHidro = 0;
  lubricantCoastTransmission = 0;
  lubricantCoastPlastic = 0;

  coastFuelLubricant = 0;
  coastRepair = 0;
  coastDeprication = 0;
  coastTire = 0;

  allConsumerCoasts = 0;
  specificConsumerCoast = 0;

  constructor(coastCar: number) {
    this.coastCar = coastCar;
  }

  setMainSalaryMainEmploy(Ct: number, coefFiekd: number = 1) {
    const result = countWorkHour * 2.49 * Ct * 1.25 * coefFiekd;
    const ozp = result * 0.346;
    if (coefFiekd === 1) {
      this.mSalaryMain = result;
      this.ozpMain = ozp;
    } else {
      this.mSalaryExtra = result;
      this.ozpExtra = ozp;
    }
  }

  setFuelCoast(poverEng: number, coef: number) {
    const fuelSm = countWorkHour * poverEng * 0.22 * coef * 0.85;
    console.log(fuelSm, "Расход в смену");
    this.fuelCoast = fuelSm * fuelCoastLiter * 1.1;
  }
  setLubricantCoast(
    coef1: number,
    coef2: number,
    field: "engine" | "trans" | "plastic"
  ) {
    const result = this.fuelCoast * coef1 * coef2;
    switch (field) {
      case "engine":
        console.log("моторное", result);
        this.lubricantCoastEngine = result;
        break;
      case "trans":
        console.log("трансмиссионное", result);
        this.lubricantCoastTransmission = result;
        break;
      case "plastic":
        console.log("пластичная", result);
        this.lubricantCoastPlastic = result;
        break;
      default:
        break;
    }
  }
  countCoastFuelLubricant() {
    this.coastFuelLubricant =
      this.fuelCoast +
      this.lubricantCoastEngine +
      this.lubricantCoastHidro +
      this.lubricantCoastTransmission +
      this.lubricantCoastPlastic;
    console.log(
      "Суммарные затраты для базового варианта на топливо и смазочные",
      this.coastFuelLubricant
    );
  }

  setCoastRepair(TO: number) {
    this.coastRepair = (TO / 100) * countWorkHour;
  }

  setDepricationCoast() {
    this.coastDeprication = (this.coastCar * 0.2) / 269;
  }
  setTireCoast(coef: number) {
    this.coastTire = (1.64 * 27600 * 1.1 * coef) / 100000;
  }

  sumConsumersCoast(pSmen: number) {
    const mainCoast =
      this.mSalaryMain +
      this.mSalaryExtra +
      this.ozpExtra +
      this.coastDeprication +
      this.coastFuelLubricant +
      this.coastRepair +
      this.coastTire;
    console.log("Прочие расходы", mainCoast * 0.1);

    this.allConsumerCoasts = mainCoast * 1.1;

    this.specificConsumerCoast = this.allConsumerCoasts / pSmen;
  }
}
