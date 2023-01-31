// Objects
let employee: {
  readonly id: number,
  name: string,
  retire: (date: Date) => void
} = {
  id: 1,
  name: 'James',
  retire: (date: Date) => {
    console.log(date)
  }
};

employee.id = 5;