const person = {
  name: 'aravinth',
  age: 22,
  coords: {
    lat: 212,
    lng: 13,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const { age }: { age: number } = person;
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = person;
