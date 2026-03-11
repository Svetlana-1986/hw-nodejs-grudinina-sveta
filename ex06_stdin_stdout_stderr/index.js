import { stdin, stdout, stderr, exit } from "node:process";

// stdin.pipe(stdout); // перенаправление ввода в вывод, метод pipe() соединяет два потока - перенаправляет данные из одного потока в другой

let data = "";

stdin.on("readable", () => {
  const chunk = stdin.read();
  if (chunk !== null) {
    data += chunk;
  }
  // console.log('r');
});

stdin.on("end", () => {
  console.log("Data:", data);
  //   вместо console.log() можно использовать stdout.write("Program Finished\n");

  // throw new Error("!!!"); // нода вернёт код 1 (сама), поймет что есть ошибка и без exit

  stdout.write("Program Finished\n");
  // exit(0); // установка кода ответа в 0, все выполнилось успешно

  stderr.write("Program Error\n");
  // exit(7); // установка кода ответа в 7, м.б. любое другое число кроме 0, по договоренности
});

// какие команды вводить в консоли
// echo "qwer\nasdf\npoiu" | node.exe index.js
// если вывод из файла: node.exe index.js < file.txt
