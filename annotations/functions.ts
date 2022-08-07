const add = (a: number, b: number): number => a + b;

const subract = (a: number, b: number): number => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => console.log(message);

const throwError = (message: string): never => {
  throw new Error(message);
};

// destructuring with annotations
const todaysWeather = {
  date: new Date(),
  weather: 'sunny',
};
const logweather = (forecast: { date: Date; weather: string }): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};
logweather(todaysWeather);

// destructuring with annotations wiht es15
const logweatherES15 = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};
