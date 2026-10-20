import { Car } from '../src/Car';
import { Garage } from '../src/Garage';


//1
describe('Create a car to the garage', () => {
    test('should add a car to the garage', () => {
        //arrange
        const garage = new Garage();

        //act
        garage.addCar(new Car("VolksWagen", "Fusca", 1970, true));


        //assert
        expect(garage.getCarCount()).toBe(1);
        expect(garage.listCars()[0].getBrand()).toBe("VolksWagen");
        expect(garage.listCars()[0].getModel()).toBe("Fusca");
        expect(garage.listCars()[0].getYear()).toBe(1970);
    });
});


//2
describe('Cars in the storage', () => {
    test("The car is in the garage after being added", () => {
        //arrange
        const garage = new Garage();
        
        const car = new Car("VolksWagen", "Fusca", 1970, true);
        //act
       garage.addCar(car);

        //assert
       expect(car.getStored()).toBe(true);
    });
});

//3
describe("Changing the stored status of a car", () => {
    test("Change the stored status of a car and check if it is updated", () => {
        //arrange
        const garage = new Garage();
        const car = new Car("VolksWagen", "Fusca", 1970, true);
        garage.addCar(car);

        //act
        garage.changeStoredStatus(car, true);

        //assert
        expect(car.getStored()).toBe(true);
    });
});

//4
describe("Changing the stored status of a car part 2", () => {
    test("Change the stored status of a car and check if it is updated then changing again", () => {
        //arrange
        const garage = new Garage();
        const car = new Car("VolksWagen", "Fusca", 1970, true);
        garage.addCar(car);

        //act
        garage.changeStoredStatus(car, true);
        expect(car.getStored()).toBe(true);

        garage.changeStoredStatus(car, false);

        //assert
        expect(car.getStored()).toBe(false);
    });
});

//5
describe("Add car to the garage", () => {
    test("Add a car to the garage and check if it is stored", () => {
        //arrange
        const garage = new Garage();
        const car = new Car("VolksWagen", "Fusca", 1970, true);

        //act
        garage.addCar(car);

        //assert
        expect(car.getStored()).toBe(true);
    });
});

//6
describe("Adding a car from the garage", () => {
    test("Add a car and check if it is stored", () => {
        //arrange
        const garage = new Garage();
        const car = new Car("VolksWagen", "Fusca", 1970, true);

        //act
        garage.addCar(car);

        //assert
        expect(car.getStored()).toBe(true);
        expect(garage.getCarCount()).toBe(1);
    });
});

//7
describe("Adding a lot of cars to the garage", () => {
    test("Adding multiple cars and checking the count", () => {
        //arrange
        const garage = new Garage();
        const car1 = new Car("VolksWagen", "Fusca", 1970, true);
        const car2 = new Car("Ford", "Mustang", 1969, true);
        const car3 = new Car("Chevrolet", "Camaro", 1970, true);

        //act
        garage.addCar(car1);
        garage.addCar(car2);
        garage.addCar(car3);

        //assert
        expect(garage.getCarCount()).toBe(3);
    });
});

//8
describe("Removing a car from the garage", () => {
    test("Adding a car and then removing it to check if it is no longer stored", () => {
        //arrange
        const garage = new Garage();
        const car = new Car("VolksWagen", "Fusca", 1970, true);

        //act
        garage.addCar(car);
        garage.removeCar(car);

        //assert
        expect(car.getStored()).toBe(false);
        expect(garage.getCarCount()).toBe(0);
    });
});

//9
describe("Removing a car from the garage part 2", () => {
    test("Remove a car and check if it is no longer stored", () => {
        //arrange
        const garage = new Garage();
        const car = new Car("VolksWagen", "Fusca", 1970, true);
        garage.addCar(car);

        //act
        garage.removeCar(car);

        //assert
        expect(car.getStored()).toBe(false);
        expect(garage.getCarCount()).toBe(0);
    });
});

//10
describe("Finding a car in the garage", () => {
test("Add a car and find it by model", () => {
    //arrange
    const garage = new Garage();
    const car = new Car("VolksWagen", "Fusca", 1970, true);
    garage.addCar(car);

    //act
    const foundCar = garage.findCarByModel("Fusca");

    //assert
    expect(foundCar).toBe(car);
});
});

//11
describe("Undefined cars in the garage", () => {
    test("Trying to find a car with undefined model should throw an error", () => {
        //arrange
        const garage = new Garage();
        const car = new Car("VolksWagen", "Fusca", 1970, true);
        garage.addCar(car);

        //act & assert
        expect(() => garage.findCarByModel("")).toThrow("Undefined.");
    });
});

//12

describe("Adding a car that already exists in the garage", () => {
    test("Adding a car then trying to add the car again that already exists should throw an error", () => {
        //arrange
        const garage = new Garage();
        const car = new Car("VolksWagen", "Fusca", 1970, true);
        garage.addCar(car);

        //arrange
        const car2 = new Car("VolksWagen", "Fusca", 1970, true);
        garage.addCar(car2);

        //act & assert
        expect(() => garage.addCar(car)).toThrow("Esse carro já existe na garagem");
    });
});

//13
describe("Checking the brand of a car in the garage", () => {
    test("Add a car and check its brand", () => {
        //arrange
        const garage = new Garage();
        const car = new Car("VolksWagen", "Fusca", 1970, true);
        garage.addCar(car);

        //act
        const foundCar = garage.findCarByBrand("VolksWagen");

        //assert
        expect(foundCar).toBe(car);
    });
});

//14
describe("Checking the year of a car in the garage", () => {
    test("Add a car and check its year", () => {
        //arrange
        const garage = new Garage();
        const car = new Car("VolksWagen", "Fusca", 1970, true);
        garage.addCar(car);

        //act
        const foundCar = garage.findCarByYear(1970);

        //assert
        expect(foundCar).toBe(car);
    });
});

//15
describe("Deleting a car betwing multiple cars in the garage", () => {
    test("Add multiple cars and delete one, then check the count", () => {
        //arrange
        const garage = new Garage();
        const car1 = new Car("VolksWagen", "Fusca", 1970, true);
        const car2 = new Car("Ford", "Mustang", 1969, true);
        const car3 = new Car("Chevrolet", "Camaro", 1970, true);
        garage.addCar(car1);
        garage.addCar(car2);
        garage.addCar(car3);

        //act
        garage.removeCar(car2);

        //assert
        expect(garage.getCarCount()).toBe(2);
        expect(garage.listCars()).toContain(car1);
        expect(garage.listCars()).toContain(car3);
        expect(garage.listCars()).not.toContain(car2);
    });
});

//16
describe("Checking the state of the removed car in the garage", () => {
    test("Adding three cars, removing a car and check if it is no longer stored and the state of the others cars", () => {
        //arrange
        const garage = new Garage();
        const car1 = new Car("VolksWagen", "Fusca", 1970, true);
        const car2 = new Car("Ford", "Mustang", 1969, true);
        const car3 = new Car("Chevrolet", "Camaro", 1970, true);
        garage.addCar(car1);
        garage.addCar(car2);
        garage.addCar(car3);

        //act
        garage.removeCar(car1);

        //assert
        expect(car1.getStored()).toBe(false);
        expect(garage.getCarCount()).toBe(2);
        expect(garage.listCars()).toContain(car2);
        expect(garage.listCars()).toContain(car3);
        expect(garage.listCars()).not.toContain(car1);
    });
});