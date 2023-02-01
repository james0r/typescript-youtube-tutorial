// Interfaces

// abstract class Calendar {
//   constructor(public name: string) { }

//   abstract addEvent(): void
//   abstract removeEvent(): void
// }

// Interfaces might be preferred in the case that an abstract class
// doesn't provide any logic or algorhythms that can be reused.

interface Calendar {
  name: string
  addEvent(): void
  removeEvent(): void
}

interface CloudCalendar extends Calendar {
  sync(): void
}

// This is valid TypeScript. If we were to--say--implement CloudCalendar however, we
// would need to also implement property sync()
class GoogleCalendar implements Calendar {
  constructor(public name: string) {}
  addEvent(): void {
    throw new Error("Method not implemented.")
  }
  removeEvent(): void {
    throw new Error("Method not implemented.")
  }

}