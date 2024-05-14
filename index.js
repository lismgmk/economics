const data = {
  initialData: {
    basic: {
      valueWood: 11,
      coastCar: 1270000,
      coefEng: 0.86,
      Repair: 2050,
    },
    dev: {
      valueWood: 11,
      coastCar: 1270000,
      coefEng: 0.86,
      Repair: 2050,
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
    basic: {
      salaryHour: 2.49,
      basic: 47.31,
      socialInsurance: 16.37,
    },
  },
  auxiliaryWorkersSalary: {
    basic: {
      basic: 25.55,
      socialInsurance: 8.84,
    },
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
      numFlights: 8.4,
      path: 4.93,
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
      numFlights: 8.4,
      path: 4.93,
      tire: 2.45,
      other: 176.95,
      totalOperating: 1946.48,
      specificOperating: 34.07,
      capexPerOutput: 15.46,
    },
  },
  title:
    'которым является погрузочная универсальная машина АМКОДОР – 2151. Экономическая эффективность проектируемого погрузчика состоит в том, что за счет установки ковша с большим полезным объемом уменьшается время полной погрузки щеповоза.',

  annualProductivityGrowth: 0.09,
  annualEconomicEffect: 33416.32,
  paybackPeriod: 0.9,
  efficiencyCoefficient: 1.11,
};
const documentId = '';
const folderId = '';
async function replaceVariablesInDocumentById() {
  const document = await DocumentApp.openById(documentId);
  const documentBody = document.getBody();

  for (const [key, value] of Object.entries(data)) {
    if (typeof value === 'object') {
      for (const [subKey, subValue] of Object.entries(value)) {
        for (const [subSubKey, subSubValue] of Object.entries(subValue)) {
          const regex = `${key}_${subKey}_${subSubKey}`;
          await documentBody.replaceText(regex, subSubValue);
        }
      }
    } else {
      const regex = `${key}`;
      await documentBody.replaceText(regex, value);
    }
  }
  const pdfBlob = document.getAs('application/pdf');

  const folder = await DriveApp.getFolderById(folderId);
  const pdfFile = await folder.createFile(pdfBlob);
  const pdfUrl = pdfFile.getUrl();
  Logger.log('PDF сохранен: ' + pdfUrl);
}

// const formattedData = {
//   initialData_basic_valueWood: 11,
//   initialData_basic_coastCar: 1270000,
//   initialData_basic_coefEng: 0.86,
//   initialData_basic_Repair: 2050,
//   initialData_basic_tairCoef: 4.75,

//   initialData_dev_valueWood: 11,
//   initialData_dev_coastCar: 1270000,
//   initialData_dev_coefEng: 0.86,
//   initialData_dev_Repair: 2050,
//   initialData_dev_tairCoef: 4.75,

//   production_basic_trTime: 38.16,
//   production_basic_shiftProd: 57.14,
//   production_basic_annualProd: 15370.66,
//   production_basic_spIntensity: 0.14,
//   production_basic_output: 57.14,

//   production_dev_trTime: 38.16,
//   production_dev_shiftProd: 57.14,
//   production_dev_annualProd: 15370.66,
//   production_dev_spIntensity: 0.14,
//   production_dev_output: 57.14,

//   operatorSalary_salaryHour: 2.49,
//   operatorSalary_basic: 47.31,
//   operatorSalary_socialInsurance: 16.37,
//   auxiliaryWorkersSalary_basic: 25.55,
//   auxiliaryWorkersSalary_socialInsurance: 8.84,

//   expenses_basic_PerShift: 146.67,
//   expenses_basic_fuelPerShift: 396.88,
//   expenses_basic_motor: 102.96,
//   expenses_basic_hydraulic: 51.55,
//   expenses_basic_transmission: 9.9,
//   expenses_basic_plastic: 15.84,
//   expenses_basic_totalFuelAndLubric: 577.14,
//   expenses_basic_maintenance: 164,
//   expenses_basic_depreciation: 944.24,
//   expenses_basic_numFlights: 8.4,
//   expenses_basic_path: 4.75,
//   expenses_basic_tire: 2.45,
//   expenses_basic_other: 176.95,
//   expenses_basic_totalOperating: 1946.48,
//   expenses_basic_specificOperating: 34.07,
//   expenses_basic_capexPerOutput: 16.52,

//   expenses_dev_PerShift: 146.67,
//   expenses_dev_fuelPerShift: 396.88,
//   expenses_dev_fuelAndLubricant_motor: 102.96,
//   expenses_dev_fuelAndLubricant_hydraulic: 51.55,
//   expenses_dev_fuelAndLubricant_transmission: 9.9,
//   expenses_dev_fuelAndLubricant_plastic: 15.84,
//   expenses_dev_totalFuelAndLubric: 577.14,
//   expenses_dev_maintenance: 164,
//   expenses_dev_depreciation: 944.24,
//   expenses_dev_numFlights: 8.4,
//   expenses_dev_path: 4.93,
//   expenses_dev_tire: 2.45,
//   expenses_dev_other: 176.95,
//   expenses_dev_totalOperating: 1946.48,
//   expenses_dev_specificOperating: 34.07,
//   expenses_dev_capexPerOutput: 15.46,

//   annualProductivityGrowth: 0.09,
//   annualEconomicEffect: 33416.32,
//   paybackPeriod: 0.9,
//   efficiencyCoefficient: 1.11,
// };
