const data = {
  initialData: {
    basic: {
      valueWood: 11,
      coastCar: 1270000,
      coefEng: 0.86,
      Repair: 2050,
      tairCoef: 4.75,
    },
    dev: {
      valueWood: 11,
      coastCar: 1270000,
      coefEng: 0.86,
      Repair: 2050,
      tairCoef: 4.75,
    },
  },
  production: {
    basic: {
      trTime: 38.16,
      shiftProd: 57.14,
      annualProd: 15370.66,
      spIntensity: 0.14,
      output: 57.14,
    },
    dev: {
      trTime: 38.16,
      shiftProd: 57.14,
      annualProd: 15370.66,
      spIntensity: 0.14,
      output: 57.14,
    },
  },
  operatorSalary: {
    salaryHour: 2.49,
    basic: 47.31,
    socialInsurance: 16.37,
  },
  auxiliaryWorkersSalary: {
    basic: 25.55,
    socialInsurance: 8.84,
  },
  expenses: {
    basic: {
      PerShift: 146.67,
      fuelPerShift: 396.88,

      motor: 102.96,
      hydraulic: 51.55,
      transmission: 9.9,
      plastic: 15.84,

      totalFuelAndLubric: 577.14,
      maintenance: 164,
      depreciation: 944.24,
      tire: 2.45,
      other: 176.95,
      totalOperating: 1946.48,
      specificOperating: 34.07,
      capexPerOutput: 16.52,
    },
    dev: {
      PerShift: 146.67,
      fuelPerShift: 396.88,

      motor: 102.96,
      hydraulic: 51.55,
      transmission: 9.9,
      plastic: 15.84,

      totalFuelAndLubric: 577.14,
      maintenance: 164,
      depreciation: 944.24,
      tire: 2.45,
      other: 176.95,
      totalOperating: 1946.48,
      specificOperating: 34.07,
      capexPerOutput: 15.46,
    },
  },

  annualProductivityGrowth: 0.09,
  annualEconomicEffect: 33416.32,
  paybackPeriod: 0.9,
  efficiencyCoefficient: 1.11,
};

function replaceVariablesInDocumentById() {
  const documentId = '1ztLYGDFm_StJz9l0Q_afX9_fivZ-I23WLpEzgFyxsss';
  const document = DocumentApp.openById(documentId);
  const documentBody = document.getBody();

  for (const [key, value] of Object.entries(data)) {
    if (typeof value === 'object') {
      for (const [subKey, subValue] of Object.entries(value)) {
        for (const [subSubKey, subSubValue] of Object.entries(subValue)) {
          const regex = `${key}_${subKey}_${subSubKey}`;
          documentBody.replaceText(regex, subSubValue.toFixed(2));
        }
      }
    } else {
      const regex = `${key}`;
      documentBody.replaceText(regex, value.toFixed(2));
    }
  }
}

const formattedData = {
  initialData_basic_valueWood: 11,
  initialData_basic_coastCar: 1270000,
  initialData_basic_coefEng: 0.86,
  initialData_basic_Repair: 2050,
  initialData_basic_tairCoef: 4.75,

  initialData_dev_valueWood: 11,
  initialData_dev_coastCar: 1270000,
  initialData_dev_coefEng: 0.86,
  initialData_dev_Repair: 2050,
  initialData_dev_tairCoef: 4.75,

  production_basic_trTime: 38.16,
  production_basic_shiftProd: 57.14,
  production_basic_annualProd: 15370.66,
  production_basic_spIntensity: 0.14,
  production_basic_output: 57.14,
  production_dev_trTime: 38.16,
  production_dev_shiftProd: 57.14,
  production_dev_annualProd: 15370.66,
  production_dev_spIntensity: 0.14,
  production_dev_output: 57.14,

  operatorSalary_salaryHour: 2.49,
  operatorSalary_basic: 47.31,
  operatorSalary_socialInsurance: 16.37,
  auxiliaryWorkersSalary_basic: 25.55,
  auxiliaryWorkersSalary_socialInsurance: 8.84,

  expenses_basic_PerShift: 146.67,
  expenses_basic_fuelPerShift: 396.88,
  expenses_basic_fuelAndLubricant_motor: 102.96,
  expenses_basic_fuelAndLubricant_hydraulic: 51.55,
  expenses_basic_fuelAndLubricant_transmission: 9.9,
  expenses_basic_fuelAndLubricant_plastic: 15.84,
  expenses_basic_totalFuelAndLubric: 577.14,
  expenses_basic_maintenance: 164,
  expenses_basic_depreciation: 944.24,
  expenses_basic_tire: 2.45,
  expenses_basic_other: 176.95,
  expenses_basic_totalOperating: 1946.48,
  expenses_basic_specificOperating: 34.07,
  expenses_basic_capexPerOutput: 16.52,

  expenses_dev_PerShift: 146.67,
  expenses_dev_fuelPerShift: 396.88,
  expenses_dev_fuelAndLubricant_motor: 102.96,
  expenses_dev_fuelAndLubricant_hydraulic: 51.55,
  expenses_dev_fuelAndLubricant_transmission: 9.9,
  expenses_dev_fuelAndLubricant_plastic: 15.84,
  expenses_dev_totalFuelAndLubric: 577.14,
  expenses_dev_maintenance: 164,
  expenses_dev_depreciation: 944.24,
  expenses_dev_tire: 2.45,
  expenses_dev_other: 176.95,
  expenses_dev_totalOperating: 1946.48,
  expenses_dev_specificOperating: 34.07,
  expenses_dev_capexPerOutput: 15.46,

  annualProductivityGrowth: 0.09,
  annualEconomicEffect: 33416.32,
  paybackPeriod: 0.9,
  efficiencyCoefficient: 1.11,
};

// const formattedData = {
//   initialData_valueWood1: 11,
//   initialData_valueWood2: 12,
//   initialData_coastCar1: 1270000,
//   initialData_coastCar2: 1300000,
//   initialData_coefEng1: 0.86,
//   initialData_coefEng2: 0.9,
//   initialData_Repair1: 2050,
//   initialData_Repair2: 2100,
//   initialData_tairCoef1: 4.93,
//   initialData_tairCoef2: 4.75,
//   production_operationAndTransportTime1: 38.16,
//   production_shiftProductivity1: 57.14,
//   production_annualProductivity1: 15370.66,
//   production_specificLaborIntensity1: 0.14,
//   production_output1: 57.14,
//   production_operationAndTransportTime2: 38.16,
//   production_shiftProductivity2: 62.5,
//   production_annualProductivity2: 16812.5,
//   production_specificLaborIntensity2: 0.13,
//   production_output2: 62.5,
//   operatorSalary_salaryHour: 2.49,
//   operatorSalary_basic: 47.31,
//   operatorSalary_socialInsurance: 16.37,
//   auxiliaryWorkersSalary_basic: 25.55,
//   auxiliaryWorkersSalary_socialInsurance: 8.84,
//   expensesPerShift: 146.67,
//   fuelExpensesPerShift: 396.88,
//   fuelAndLubricantExpenses_motor: 102.96,
//   fuelAndLubricantExpenses_hydraulic: 51.55,
//   fuelAndLubricantExpenses_transmission: 9.9,
//   fuelAndLubricantExpenses_plastic: 15.84,
//   totalFuelAndLubricantExpensesForBaseOption: 577.14,
//   maintenanceExpenses: 164,
//   depreciationExpenses: 944.24,
//   tireExpenses: 2.45,
//   otherExpenses: 176.95,
//   totalOperatingExpenses: 1946.48,
//   specificOperatingExpenses: 34.07,
//   capexPerOutput1: 16.52,
//   capexPerOutput2: 15.46,
//   annualProductivityGrowth: 0.09,
//   annualEconomicEffect: 33416.32,
//   paybackPeriod: 0.9,
//   comparativeEconomicEfficiencyCoefficient: 1.11,
// };
