import { ConsumerCosts } from './consumer-cost';
import { GeneralEfficient } from './general-efficient';
import { initValues } from './init-val/data';
import { PerformanceCar } from './performance-car';
import { PropertyEfficient } from './property-efficient';
import { saveObjectToFile } from './saver/saver';
import { cicleParam1, cicleParam2 } from './utils/consts';

initValues.initialData.basic.valueWood = 16.7;
initValues.initialData.dev.valueWood = 19.5;
initValues.initialData.basic.coastCar = 833000;
initValues.initialData.dev.coastCar = 850000;
initValues.initialData.basic.coefEng = 0.86;
initValues.initialData.dev.coefEng = 0.9;
initValues.initialData.basic.Repair = 2050;
initValues.initialData.dev.Repair = 2100;
initValues.operatorSalary.basic.salaryHour = 2.49;
// korik
// initValues.title =
//   'которым является погрузочная универсальная машина АМКОДОР – 2151. Экономическая эффективность проектируемого погрузчика состоит в том, что за счет установки ковша с большим полезным объемом уменьшается время полной погрузки щеповоза.';

// krachko
initValues.title =
  'Разрабатываемая машина отличается от прототипа тем, что она оборудована специальным кониковым удлинителем который позволяет загружать при транспортировке по две трехметровые пачки сортиментов.';

// 5.3.1 Расчет производительности техники

const performanceCar1 = new PerformanceCar(
  initValues.initialData.basic.valueWood
);
const performanceCar2 = new PerformanceCar(
  initValues.initialData.dev.valueWood
);

initValues.production.basic.trTime = performanceCar1.setCicl(cicleParam1);
initValues.production.basic.shiftProd = performanceCar1.setPSmen();
initValues.production.basic.annualProd = performanceCar1.setPyear();
initValues.production.basic.spIntensity = performanceCar1.setSeveralHardWorkn();
initValues.production.basic.output = performanceCar1.setProduction();

initValues.production.dev.trTime = performanceCar2.setCicl(cicleParam2);
initValues.production.dev.shiftProd = performanceCar2.setPSmen();
initValues.production.dev.annualProd = performanceCar2.setPyear();
initValues.production.dev.spIntensity = performanceCar2.setSeveralHardWorkn();
initValues.production.dev.output = performanceCar2.setProduction();

// 5.3.3 Эксплуатационные затраты потребителя по вариантам машин

const consumerCosts1 = new ConsumerCosts(initValues.initialData.basic.coastCar);
const consumerCosts2 = new ConsumerCosts(initValues.initialData.dev.coastCar);

initValues.operatorSalary.basic.basic = consumerCosts1.setMainSalaryMainEmploy(
  initValues.operatorSalary.basic.salaryHour,
  1.9,
  1
).mSalaryMain;
initValues.operatorSalary.basic.socialInsurance =
  consumerCosts1.setMainSalaryMainEmploy(
    initValues.operatorSalary.basic.salaryHour,
    1.9,
    1
  ).ozpMain;
initValues.auxiliaryWorkersSalary.basic.basic =
  consumerCosts1.setMainSalaryMainEmploy(
    initValues.operatorSalary.basic.salaryHour,
    1.35,
    0.76
  ).mSalaryMain;

initValues.auxiliaryWorkersSalary.basic.socialInsurance =
  consumerCosts1.setMainSalaryMainEmploy(
    initValues.operatorSalary.basic.salaryHour,
    1.35,
    0.76
  ).ozpMain;

initValues.expenses.basic.PerShift = consumerCosts1.setFuelCoast(
  initValues.initialData.basic.coefEng
).fuelSm;
initValues.expenses.basic.fuelPerShift = consumerCosts1.setFuelCoast(
  initValues.initialData.basic.coefEng
).fuelCoast;
initValues.expenses.basic.motor = consumerCosts1.setLubricantCoast(
  0.039,
  18,
  'engine'
);
initValues.expenses.basic.hydraulic = consumerCosts1.setLubricantCoast(
  0.019,
  18.5,
  'hidro'
);
initValues.expenses.basic.transmission = consumerCosts1.setLubricantCoast(
  0.01,
  6.75,
  'trans'
);
initValues.expenses.basic.plastic = consumerCosts1.setLubricantCoast(
  0.008,
  13.5,
  'plastic'
);
initValues.expenses.basic.totalFuelAndLubric =
  consumerCosts1.countCoastFuelLubricant();
initValues.expenses.basic.maintenance = consumerCosts1.setCoastRepair(
  initValues.initialData.basic.Repair
);
initValues.expenses.basic.depreciation = consumerCosts1.setDepricationCoast();
initValues.expenses.basic.numFlights = consumerCosts1.setTireCoast(
  performanceCar1.pSmen,
  initValues.initialData.basic.valueWood
).numFlights;
initValues.expenses.basic.path = consumerCosts1.setTireCoast(
  performanceCar1.pSmen,
  initValues.initialData.basic.valueWood
).path;
initValues.expenses.basic.tire = consumerCosts1.setTireCoast(
  performanceCar1.pSmen,
  initValues.initialData.basic.valueWood
).coastTire;
initValues.expenses.basic.other = consumerCosts1.sumConsumersCoast(
  performanceCar1.pSmen
).otherExpenses;
initValues.expenses.basic.specificOperating = consumerCosts1.sumConsumersCoast(
  performanceCar1.pSmen
).specificConsumerCoast;
initValues.expenses.basic.totalOperating = consumerCosts1.sumConsumersCoast(
  performanceCar1.pSmen
).allConsumerCoasts;

initValues.expenses.dev.PerShift = consumerCosts2.setFuelCoast(
  initValues.initialData.dev.coefEng
).fuelSm;
initValues.expenses.dev.fuelPerShift = consumerCosts2.setFuelCoast(
  initValues.initialData.dev.coefEng
).fuelCoast;
initValues.expenses.dev.motor = consumerCosts2.setLubricantCoast(
  0.039,
  18,
  'engine'
);
initValues.expenses.dev.hydraulic = consumerCosts2.setLubricantCoast(
  0.019,
  18.5,
  'hidro'
);
initValues.expenses.dev.transmission = consumerCosts2.setLubricantCoast(
  0.01,
  6.75,
  'trans'
);
initValues.expenses.dev.plastic = consumerCosts2.setLubricantCoast(
  0.008,
  13.5,
  'plastic'
);
initValues.expenses.dev.totalFuelAndLubric =
  consumerCosts2.countCoastFuelLubricant();
initValues.expenses.dev.maintenance = consumerCosts2.setCoastRepair(
  initValues.initialData.dev.Repair
);
initValues.expenses.dev.depreciation = consumerCosts2.setDepricationCoast();
initValues.expenses.dev.numFlights = consumerCosts2.setTireCoast(
  performanceCar2.pSmen,
  initValues.initialData.dev.valueWood
).numFlights;
initValues.expenses.dev.path = consumerCosts2.setTireCoast(
  performanceCar2.pSmen,
  initValues.initialData.dev.valueWood
).path;
initValues.expenses.dev.tire = consumerCosts2.setTireCoast(
  performanceCar2.pSmen,
  initValues.initialData.dev.valueWood
).coastTire;

initValues.expenses.dev.other = consumerCosts2.sumConsumersCoast(
  performanceCar2.pSmen
).otherExpenses;
initValues.expenses.dev.specificOperating = consumerCosts2.sumConsumersCoast(
  performanceCar2.pSmen
).specificConsumerCoast;
initValues.expenses.dev.totalOperating = consumerCosts2.sumConsumersCoast(
  performanceCar2.pSmen
).allConsumerCoasts;

// 5.4 Оценки эффективности внедрения новой техники

const propertyEfficient1 = new PropertyEfficient(
  initValues.initialData.basic.coastCar,
  performanceCar1.pYear
);

const propertyEfficient2 = new PropertyEfficient(
  initValues.initialData.dev.coastCar,
  performanceCar2.pYear
);

initValues.expenses.basic.capexPerOutput =
  propertyEfficient1.setSpecialInvest();
initValues.expenses.dev.capexPerOutput = propertyEfficient2.setSpecialInvest();

const generalEfficient = new GeneralEfficient(
  performanceCar1.pYear,
  performanceCar2.pYear,
  consumerCosts1.specificConsumerCoast,
  consumerCosts2.specificConsumerCoast,
  initValues.initialData.basic.coastCar,
  initValues.initialData.dev.coastCar
);

initValues.annualProductivityGrowth =
  generalEfficient.setSpecialInvest().increaseYearProj;
initValues.annualEconomicEffect =
  generalEfficient.setSpecialInvest().efficientYear;
initValues.paybackPeriod = generalEfficient.setSpecialInvest().term;
initValues.efficiencyCoefficient = generalEfficient.setSpecialInvest().coefTerm;

saveObjectToFile('krachko.json', initValues);
