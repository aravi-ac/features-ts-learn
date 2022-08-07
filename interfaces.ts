interface Reportable {
  summary(): string;
}

const personData = {
  name: 'aravinth',
  age: 23,
  year: new Date(),
  employed: true,
  summary(): string {
    return `${this.name} age is ${this.age}`;
  },
};

const drinkData = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  },
};

const printReport = (item: Reportable): void => console.log(item.summary());

printReport(personData);
printReport(drinkData);
