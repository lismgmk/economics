import { ConsumerCosts } from "./consumer-cost";
import { PerformanceCar } from "./performance-car";
import { cicleParam } from "./utils/consts";

// 5.3.1 Расчет производительности техники

const performProject = new PerformanceCar(12);

performProject.setCicl(cicleParam);
performProject.setPSmen();
performProject.setPyear();
performProject.setSeveralHardWorkn();
performProject.setProduction();

// 5.3.3 Эксплуатационные затраты потребителя по вариантам машин

const consumerCosts = new ConsumerCosts(250000);
consumerCosts.setMainSalaryMainEmploy(1.9);
consumerCosts.setMainSalaryMainEmploy(1.35, 0.76);

console.log(
  "Основная и дополнительная заработная плата оператора",
  consumerCosts.mSalaryMain,
  "oсновная и дополнительная зарплата вспомогательных рабочих",
  consumerCosts.mSalaryExtra,
  "Отчисления в ФСЗН и БГС оператора",
  consumerCosts.ozpMain,
  "Отчисления в ФСЗН и БГС вспомогательных рабочих",
  consumerCosts.ozpExtra
);

// 5.4 Оценки эффективности внедрения новой техники
