// CommonJS

class Square {
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
};

const size1 = 100;
const size2 = 200;

const print = (msg, value) => {
  console.log(`${msg} ${value}`);
};

module.exports = { Square, size1, size2, print };
