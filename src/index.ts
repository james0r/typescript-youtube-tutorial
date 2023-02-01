// Static Members

class Ride {
  private static _activeRides: number = 0

  get activeRides(): number {
    return Ride._activeRides
  }

  // set activeRides(value: number) {
  //   if (value >= 0) {
  //     Ride._activeRides += Ride._activeRides + value
  //   } else {
  //     throw new Error('Value cannot be negative.')
  //   }
  // }

  start() { Ride._activeRides++ }
  stop() { Ride._activeRides-- }
}

let ride1 = new Ride()
ride1.start()

let ride2 = new Ride()
ride2.start()

console.log(ride1.activeRides)
console.log(ride2.activeRides)