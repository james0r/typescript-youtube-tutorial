class SeatAssignment {
  // A1, A2, ...
  // Index signature property
  [seatNumber: string]: string
}

let seats = new SeatAssignment()

// Good
seats.A1 = 'James'
seats.A2 = 'Roger'

// Bad
seats.A3 = 25