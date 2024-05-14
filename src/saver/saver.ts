import * as fs from 'fs';

export function saveObjectToFile(fileName: string, object: any): void {
  // Преобразуем объект в строку JSON
  const data = JSON.stringify(object, null, 2);

  // Пишем данные в файл
  fs.writeFileSync(fileName, data);

  console.log(`Файл ${fileName} успешно сохранен.`);
}
