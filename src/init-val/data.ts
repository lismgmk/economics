import { IData } from './data.interface';

export const initValues: IData = {
  initialData: {
    basic: {
      valueWood: 0,
      coastCar: 0,
      coefEng: 0,
      Repair: 0,
    },
    dev: {
      valueWood: 0,
      coastCar: 0,
      coefEng: 0,
      Repair: 0,
    },
  },
  production: {
    basic: {
      trTime: 0,
      shiftProd: 0,
      annualProd: 0,
      spIntensity: 0,
      output: 0,
    },
    dev: {
      trTime: 0,
      shiftProd: 0,
      annualProd: 0,
      spIntensity: 0,
      output: 0,
    },
  },
  operatorSalary: {
    basic: {
      salaryHour: 0,
      basic: 0,
      socialInsurance: 0,
    },
  },
  auxiliaryWorkersSalary: {
    basic: {
      basic: 0,
      socialInsurance: 0,
    },
  },
  expenses: {
    basic: {
      PerShift: 0,
      fuelPerShift: 0,
      motor: 0,
      hydraulic: 0,
      transmission: 0,
      plastic: 0,
      totalFuelAndLubric: 0,
      maintenance: 0,
      depreciation: 0,
      numFlights: 0,
      path: 0,
      tire: 0,
      other: 0,
      totalOperating: 0,
      specificOperating: 0,
      capexPerOutput: 0,
    },
    dev: {
      PerShift: 0,
      fuelPerShift: 0,
      motor: 0,
      hydraulic: 0,
      transmission: 0,
      plastic: 0,
      totalFuelAndLubric: 0,
      maintenance: 0,
      depreciation: 0,
      numFlights: 0,
      path: 0,
      tire: 0,
      other: 0,
      totalOperating: 0,
      specificOperating: 0,
      capexPerOutput: 0,
    },
  },
  annualProductivityGrowth: 0,
  annualEconomicEffect: 0,
  paybackPeriod: 0,
  efficiencyCoefficient: 0,
};
