 import { Car } from "./Car.js";

 
export class Garage {

  
 protected garage: Car[];

  constructor() {
    this.garage = [];
  }

  addCar(car: Car) {
    if (this.garage.includes(car)) {
      throw new Error("Esse carro já existe na garagem");
    }
    this.garage.push(car);
    car.setStored(true);
  }
  getStored() {
    return this.garage;
  }

   removeCar(car: Car) {
    this.garage = this.garage.filter(c => c !== car);
    car.setStored(false);
  }

   listCars() {
    return this.garage;
  }
   getCarCount() {
    return this.garage.length;
  }

   findCarByModel(model: string) {
    if (!model) {
      throw new Error("Undefined.");
    }
    return this.garage.find(car => car.getModel() === model);
  }
  findCarByBrand(brand: string) {
    if (!brand) {
      throw new Error("Undefined.");
    }
    return this.garage.find(car => car.getBrand() === brand);
  }
  findCarByYear(year: number) {
    if (!year) {
      throw new Error("Undefined.");
    }
    return this.garage.find(car => car.getYear() === year);
  }
  changeStoredStatus(car: Car, status: boolean) {
    if (!this.garage.includes(car)) {
      throw new Error("Carro não encontrado na garagem.");
    }
    car.setStored(status);
  }

}

const garage = new Garage();