"use strict";
class Ride {
    get activeRides() {
        return Ride._activeRides;
    }
    start() { Ride._activeRides++; }
    stop() { Ride._activeRides--; }
}
Ride._activeRides = 0;
let ride1 = new Ride();
ride1.start();
let ride2 = new Ride();
ride2.start();
console.log(ride1.activeRides);
console.log(ride2.activeRides);
//# sourceMappingURL=index.js.map