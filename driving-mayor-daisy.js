const cars = [
  {
    time: 1568329654807,
    speed: 40,
  },
  {
    time: 1568329821632,
    speed: 42,
  },
  {
    time: 1568331115463,
    speed: 35
  }
]

const speed = 38

const carPassing = function (cars, speed) {
  let car = {
    time: Date.now(),
    speed
  }
  cars.push(car);
  return cars;
}

console.log(carPassing(cars, speed));