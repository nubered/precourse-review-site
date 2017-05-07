class Order {
  constructor() {
    this.sequence = [
      'Taking order',
      'Cooking order',
      'Request pickup of order',
      'Order complete',
    ]

    this.state = 0 // set initial state to taking order
  }

  advanceState() { this.state++ }
  getState() { return this.sequence[this.state] }
}


let order_1 = new Order
let order_2 = new Order
order_1.advanceState()
order_1.advanceState()
order_2.advanceState()
order_1.advanceState()

console.log('State of order 1 is ', order_1.getState())
console.log('State of order 2 is ', order_2.getState())

// create order instance #1
// create order instance #2
// advance state of #1
// advance state of #1
// advance state of #2
// advance state of #1
// print state of #1 to console
// print state of #2 to console
