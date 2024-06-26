import { initValues } from './init-val/data';
import { countWorkHour, fuelCoastLiter } from './utils/consts';

export class ConsumerCosts {
  coastCar = 0;

  mSalaryMain = 0;
  mSalaryExtra = 0;
  ozpMain = 0;
  ozpExtra = 0;
  fuelCoast = 0;
  fuelSm = 0;
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

  setMainSalaryMainEmploy(coastPerHour: number, Ct: number, coefFiekd: number) {
    console.log('++++++++', coastPerHour, Ct, coefFiekd);
    
    const result = countWorkHour * coastPerHour * Ct * 1.25 * coefFiekd;
    const ozp = result * 0.346;
    if (coefFiekd === 1) {
      console.log(
        'Основная и дополнительная заработная плата оператора',
        result,
        'Отчисления в ФСЗН и БГС оператора',
        ozp
      );
    } else {

      console.log(
        'Основная и дополнительная зарплата вспомогательных рабочих',
        result,
        'Отчисления в ФСЗН и БГС вспомогательных рабочих',
        ozp
      );
    }
    return {
      mSalaryMain: result,
      ozpMain: ozp,
    };
  }

  setFuelCoast(coef: number) {
    this.fuelSm = countWorkHour * 114 * 0.22 * coef * 0.85;
    console.log(this.fuelSm, 'Расход в смену');
    this.fuelCoast = this.fuelSm * fuelCoastLiter * 1.1;
    console.log(this.fuelCoast, 'Затраты на топливо в смену');
    return { fuelSm: this.fuelSm, fuelCoast: this.fuelCoast };
  }
  setLubricantCoast(
    coef1: number,
    coef2: number,
    field: 'engine' | 'trans' | 'plastic' | 'hidro'
  ) {
    const result = this.fuelSm * coef1 * coef2;
    switch (field) {
      case 'engine':
        console.log('моторное', result);
        this.lubricantCoastEngine = result;
        break;
      case 'trans':
        console.log('трансмиссионное', result);
        this.lubricantCoastTransmission = result;
        break;
      case 'plastic':
        console.log('пластичная', result);
        this.lubricantCoastPlastic = result;
        break;
      case 'hidro':
        console.log('гидравлика', result);
        this.lubricantCoastHidro = result;
        break;
      default:
        break;
    }
    return result;
  }
  countCoastFuelLubricant() {
    this.coastFuelLubricant =
      this.fuelCoast +
      this.lubricantCoastEngine +
      this.lubricantCoastHidro +
      this.lubricantCoastTransmission +
      this.lubricantCoastPlastic;
    console.log(
      'Суммарные затраты для базового варианта на топливо и смазочные',
      this.coastFuelLubricant
    );
    return this.coastFuelLubricant;
  }

  setCoastRepair(TO: number) {
    this.coastRepair = (TO / 100) * countWorkHour;
    console.log('затраты на то', this.coastRepair);
    return this.coastRepair;
  }

  setDepricationCoast() {
    this.coastDeprication = (this.coastCar * 0.2) / 269;
    console.log('зараты на амортизацию', this.coastDeprication);
    return this.coastDeprication;
  }
  setTireCoast(shiftProd: number, valueWood: number) {
    const numFlights = shiftProd / valueWood;
    console.log('кол-во рейсов в смену', numFlights);
    const path = 2 * 0.3 * numFlights;
    console.log('сменный пробег', path);
    this.coastTire = (1.64 * 27600 * 1.1 * path) / 100000;
    console.log('затраты на шины', this.coastTire);
    return { numFlights, path, coastTire: this.coastTire };
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
    console.log('Прочие расходы', mainCoast * 0.1);

    this.allConsumerCoasts = mainCoast * 1.1;
    console.log('Всего эксплуатационных затрат', this.allConsumerCoasts);
    this.specificConsumerCoast = this.allConsumerCoasts / pSmen;
    console.log(
      'Удельные эксплуатационные затраты,',
      this.specificConsumerCoast
    );
    return {
      otherExpenses: mainCoast * 0.1,
      allConsumerCoasts: this.allConsumerCoasts,
      specificConsumerCoast: this.specificConsumerCoast,
    };
  }
}
