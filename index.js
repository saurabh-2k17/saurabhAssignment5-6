class Car {
    constructor(brand, model, year, color, price, gas) {
      this.brand = brand;
      this.model = model;
      this.year = year;
      this.color = color;
      this.price = price;
      this.gas = gas;
    }
  
    honk() {
      console.log("Tuut tuut");
      console.log(`Brand: ${this.brand}`);
      console.log(`Model: ${this.model}`);
      console.log(`Year: ${this.year}`);
      console.log(`Color: ${this.color}`);
      console.log(`Price: ${this.price}`);
    }
  
    loseGas(turn) {
      const currentYear = new Date().getFullYear();
      const age = currentYear - this.year;
      let gasLoss = 5 + age;
  
      if (age > 0) {
        gasLoss += age - 1;
      }
  
      this.gas -= gasLoss * turn;
    }
  }
  
  // Create car objects
  const car1 = new Car("Honda", "CR-V", 2023, "Red", 50000, 45);
  const car2 = new Car("Ford", "F-150", 2020, "Black", 25000, 30);
  const car3 = new Car("BMW", "X5", 2022, "Green", 60000, 65);
  const car4 = new Car("Mazda", "CX-5", 2019, "White", 15000, 60);
  const car5 = new Car("Audi", "Q7", 2018, "Silver", 52000, 47);
  const car6 = new Car("Kia", "Forte", 2020, "Blue", 21000, 56);
  
  // Invoke the honk method for each car
  car1.honk();
  car2.honk();
  car3.honk();
  car4.honk();
  car5.honk();
  car6.honk();
  
  // Race simulation
  const numberOfTurns = 7;
  for (let turn = 1; turn <= numberOfTurns; turn++) {
    console.log(`Turn ${turn}`);
    car1.loseGas(turn);
    car2.loseGas(turn);
    car3.loseGas(turn);
    car4.loseGas(turn);
    car5.loseGas(turn);
    car6.loseGas(turn);
  }
  
  console.log("Final gas levels:");
  console.log("Car 1 gas:", car1.gas);
  console.log("Car 2 gas:", car2.gas);
  console.log("Car 3 gas:", car3.gas);
  console.log("Car 4 gas:", car4.gas);
  console.log("Car 5 gas:", car5.gas);
  console.log("Car 6 gas:", car6.gas);