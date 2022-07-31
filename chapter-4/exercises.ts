// Update the overloaded reserve function
// With a third call signature that just takes a destination

type Reserve = {
  (from: Date, to: Date, destination: string): Reservation
  (from: Date, destination: string): Reservation
  (destination: string): Reservation
}

let reserve: Reserve = (
  fromOrDestination: Date | string,
  toOrDestination?: Date | string,
  destination?: string
) => {
  if (typeof fromOrDestination === 'string') {
    // Book immediate trip
  } else if (
    fromOrDestination instanceof Date 
    && typeof toOrDestination === 'string') {
      // Book one-way trip
  } else if (
    fromOrDestination instanceof Date 
    && toOrDestination instanceof Date
    && destination !== undefined) {
      // Book round trip
  } else {
    // Throw error
  }
}