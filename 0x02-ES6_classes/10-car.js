class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }



  get motor() {
    return this._motor;
  }

  set motor(value) {
    this._motor = value;
  }
  get brand() {
    return this._brand;
  }

  set brand(value) {
    this._brand = value;
  }

  get color() {
    return this._color;
  }

  set color(value) {
    this._color = value;
  }

  cloneCar() {
    const clone_car = Object.create(Car.prototype);
    const symbols = Object.getOwnPropertySymbols(this);

    symbols.forEach(symbol => {
      const describe = Object.getOwnPropertyDescriptor(this, symbol);
      Object.defineProperty(clone_car, symbol, describe);
    });

    return clone_car;
  }
}

export default Car;


