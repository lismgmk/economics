export interface IData {
  initialData: {
    basic: {
      valueWood: number;
      coastCar: number;
      coefEng: number;
      Repair: number;
    };
    dev: {
      valueWood: number;
      coastCar: number;
      coefEng: number;
      Repair: number;
    };
  };
  production: {
    basic: {
      trTime: number;
      shiftProd: number;
      annualProd: number;
      spIntensity: number;
      output: number;
    };
    dev: {
      trTime: number;
      shiftProd: number;
      annualProd: number;
      spIntensity: number;
      output: number;
    };
  };
  operatorSalary: {
    basic: {
      salaryHour: number;
      basic: number;
      socialInsurance: number;
    };
  };
  auxiliaryWorkersSalary: {
    basic: {
      basic: number;
      socialInsurance: number;
    };
  };
  expenses: {
    basic: {
      PerShift: number;
      fuelPerShift: number;
      motor: number;
      hydraulic: number;
      transmission: number;
      plastic: number;
      totalFuelAndLubric: number;
      maintenance: number;
      depreciation: number;
      numFlights: number;
      path: number;
      tire: number;
      other: number;
      totalOperating: number;
      specificOperating: number;
      capexPerOutput: number;
    };
    dev: {
      PerShift: number;
      fuelPerShift: number;
      motor: number;
      hydraulic: number;
      transmission: number;
      plastic: number;
      totalFuelAndLubric: number;
      maintenance: number;
      depreciation: number;
      numFlights: number;
      path: number;
      tire: number;
      other: number;
      totalOperating: number;
      specificOperating: number;
      capexPerOutput: number;
    };
  };
  title: string;
  annualProductivityGrowth: number;
  annualEconomicEffect: number;
  paybackPeriod: number;
  efficiencyCoefficient: number;
}
