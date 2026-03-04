export default class Square {
  // constructor — это специальный метод класса, который: вызывается автоматически при new
  // инициализирует объект
  constructor(width) {
    // Создать у объекта свойство width и записать туда переданное значение. Для каждого экземпляра класса свой width, благодаря this
    this.width = width;
  }

  // метод (функция), доступная всем экземплярам
  area() {
    return this.width ** 2;
  }
}

const size1 = 200;
const size2 = 500;

const print = (msg, value) => {
  console.log(`${msg} ${value}`);
};

export { size1, size2, print };
