import { ConsumerCosts } from "./consumer-cost";
import { GeneralEfficient } from "./general-efficient";
import { PerformanceCar } from "./performance-car";
import { PropertyEfficient } from "./property-efficient";
import { cicleParam } from "./utils/consts";

const valueWood1 = 11;
const valueWood2 = 12;
const coastCar1 = 250000;
const coastCar2 = 260000;
const coefEng1 = 0.86;
const coefEng2 = 0.9;
const Repair1 = 2050;
const Repair2 = 2100;
const tairCoef1 = 4.93;
const tairCoef2 = 4.75;

// 5.3.1 Расчет производительности техники

const performanceCar1 = new PerformanceCar(valueWood1);
const performanceCar2 = new PerformanceCar(valueWood2);

performanceCar1.setCicl(cicleParam);
performanceCar1.setPSmen();
performanceCar1.setPyear();
performanceCar1.setSeveralHardWorkn();
performanceCar1.setProduction();

performanceCar2.setCicl(cicleParam);
performanceCar2.setPSmen();
performanceCar2.setPyear();
performanceCar2.setSeveralHardWorkn();
performanceCar2.setProduction();

// 5.3.3 Эксплуатационные затраты потребителя по вариантам машин

const consumerCosts1 = new ConsumerCosts(coastCar1);
const consumerCosts2 = new ConsumerCosts(coastCar2);

consumerCosts1.setMainSalaryMainEmploy(1.9);
consumerCosts1.setMainSalaryMainEmploy(1.35, 0.76);
consumerCosts1.setFuelCoast(coefEng1);
consumerCosts1.setLubricantCoast(0.039, 18, "engine");
consumerCosts1.setLubricantCoast(0.019, 18.5, "hidro");
consumerCosts1.setLubricantCoast(0.01, 6.75, "trans");
consumerCosts1.setLubricantCoast(0.008, 13.5, "plastic");
consumerCosts1.setCoastRepair(Repair1);
consumerCosts1.setDepricationCoast();
consumerCosts1.setTireCoast(tairCoef1);
consumerCosts1.setTireCoast(performanceCar1.pSmen);

consumerCosts2.setMainSalaryMainEmploy(1.9);
consumerCosts2.setMainSalaryMainEmploy(1.35, 0.76);
consumerCosts2.setFuelCoast(coefEng2);
consumerCosts2.setLubricantCoast(0.039, 18, "engine");
consumerCosts2.setLubricantCoast(0.019, 18.5, "hidro");
consumerCosts2.setLubricantCoast(0.01, 6.75, "trans");
consumerCosts2.setLubricantCoast(0.008, 13.5, "plastic");
consumerCosts2.setCoastRepair(Repair2);
consumerCosts2.setDepricationCoast();
consumerCosts2.setTireCoast(tairCoef2);
consumerCosts2.setTireCoast(performanceCar2.pSmen);

// 5.4 Оценки эффективности внедрения новой техники

const propertyEfficient1 = new PropertyEfficient(
  coastCar1,
  performanceCar1.pYear
);

const propertyEfficient2 = new PropertyEfficient(
  coastCar2,
  performanceCar2.pYear
);

propertyEfficient1.setSpecialInvest();
propertyEfficient2.setSpecialInvest();

const generalEfficient = new GeneralEfficient(
  performanceCar1.pYear,
  performanceCar2.pYear,
  consumerCosts1.specificConsumerCoast,
  consumerCosts2.specificConsumerCoast,
  coastCar1,
  coastCar2
);

generalEfficient.setSpecialInvest();
