import * as fs from 'fs';

function roundNumbers(data) {
  for (const [key, value] of Object.entries(data)) {
    if (typeof value === 'object') {
      for (const [subKey, subValue] of Object.entries(value)) {
        for (const [subSubKey, subSubValue] of Object.entries(subValue)) {
          data[key][subKey][subSubKey] =
            Math.round((subSubValue as number) * 100) / 100;
        }
      }
    } else {
      if (typeof data[key] === 'number') {
        data[key] = Math.round((value as number) * 100) / 100; // Округление до двух знаков после запятой
      }
    }
  }
  return data;
}

export function saveObjectToFile(fileName: string, object: any): void {
  // Преобразуем объект в строку JSON
  const roundedData = roundNumbers(object);
  const data = JSON.stringify(roundedData, null, 2);

  // Пишем данные в файл
  fs.writeFileSync(fileName, data);

  console.log(`Файл ${fileName} успешно сохранен.`);
}
