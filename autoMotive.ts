// TODO:  To run project use comman -->  tsc -w

// Live server http://127.0.0.1:5500/abstract_task/main.html

abstract class Car {
  // ES {Lint} is freaking me out!!!!

  abstract move();

  constructor(
    public brand: string,
    public modelName: string,
    public wheelsDrive: string,
    public speed: number
  ) {}
}

class Audi extends Car {
  constructor(
    public brand: string,
    public modelName: string,
    public wheelsDrive: string,
    public speed: number
  ) {
    super(brand, modelName, wheelsDrive, speed);
  }

  move(): void {
    console.log(
      `${this.brand} ${this.modelName} increase speed ${this.speed}km/h by using ${this.wheelsDrive} technology`
    );
  }
  offRoad(): void {
    console.log(`Legendary rally car ever`);
  }
}
const audi = new Audi("AUDI", "RS-4", "QUATRRO", 350);

class Bmw extends Car {
  constructor(
    public brand: string,
    public modelName: string,
    public wheelsDrive: string,
    public speed: number
  ) {
    super(brand, modelName, wheelsDrive, speed);
  }

  move(): void {
    console.log(
      `${this.brand} ${this.modelName} increase speed ${this.speed}km/h by using ${this.wheelsDrive} technology`
    );
  }

  street(): void {
    console.log(`Fastest street racing car`);
  }
}
const bmw = new Bmw("BMW", "M5 Competition", "X-Drive", 360);

class Porshe extends Car {
  constructor(
    public brand: string,
    public modelName: string,
    public wheelsDrive: string,
    public speed: number
  ) {
    super(brand, modelName, wheelsDrive, speed);
  }

  move(): void {
    console.log(
      `${this.brand} ${this.modelName} increase speed ${this.speed}km/h by using ${this.wheelsDrive} technology`
    );
  }
  drag(): void {
    console.log(`Fastest drag-race car`);
  }
}
const porshe = new Porshe("Porshe", "9FF", "All wheel Drive", 420);

class Tesla extends Car {
  constructor(
    public brand: string,
    public modelName: string,
    public wheelsDrive: string,
    public speed: number
  ) {
    super(brand, modelName, wheelsDrive, speed);
  }

  move(): void {
    console.log(
      `${this.brand} ${this.modelName} increase speed ${this.speed}km/h by using ${this.wheelsDrive} technology`
    );
  }
  eco(): void {
    console.log(`Best and fast electro car`);
  }
}
const tesla = new Tesla("TESLA", "Model S Plaid", "E-Motor Drive", 300);

class Rimac {}

interface Rimac extends Audi, Bmw, Porshe, Tesla {}

function applyMixins(derivedCtor: any, constructors: any[]) {
  constructors.forEach((baseCtor) => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
      Object.defineProperty(
        derivedCtor.prototype,
        name,
        Object.getOwnPropertyDescriptor(baseCtor.prototype, name) || Object.create(null)
      );
    });
  });
}

applyMixins(Rimac, [Audi, Bmw, Porshe, Tesla]);

const rimac = new Rimac();

audi.move();
audi.offRoad();
bmw.move();
bmw.street();
porshe.move();
porshe.drag();
tesla.move();
tesla.eco();

console.log(`

Rimac have [Audi, Bmw, Porshe, Tesla].methods

`);

rimac.offRoad();
rimac.street();
rimac.drag();
rimac.eco();
