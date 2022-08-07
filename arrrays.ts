let carMakers: string[] = ['ford', 'BMW', 'BENZ'];

const dates = [new Date(), new Date()];

// const carsByMake = [['f150'], ['corolla'], ['camaro']];
const carsByMake: string[][] = [];

// help with inference when extracting  value
const car = carMakers[0];
const myCar = carMakers.pop();

//  prevent incompatible values
carMakers.push('toyota');

// help with map
carMakers.map((car: string): string => {
  return car;
});

// Flexible types
const remainder: (Date | string)[] = [];
remainder.push(new Date());
remainder.push('14-01-2000');
