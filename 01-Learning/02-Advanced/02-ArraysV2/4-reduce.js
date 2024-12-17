// make it list of 10 different country and name and products
const orders = [
  { countryCode: "US", name: "John", product: "stickers" },
  { countryCode: "CA", name: "Sarah", product: "shirt" },
  { countryCode: "MX", name: "Carlos", product: "skateboard" },
  { countryCode: "FR", name: "Marie", product: "hoodie" },
  { countryCode: "JP", name: "Yuki", product: "basketball" },
  { countryCode: "US", name: "Emily", product: "stickers" },
  { countryCode: "CA", name: "David", product: "shirt" },
  { countryCode: "MX", name: "Juan", product: "skateboard" },
]

// Using a reduce

const ordersByCountry = orders.reduce((acc, order) => {
  const { countryCode } = order
  if (!acc[countryCode]) {
    acc[countryCode] = []
  }
  acc[countryCode].push(order)
  return acc
}, {})

console.log(ordersByCountry)

// {
// US: [
//   { countryCode: 'US', name: 'John', product: 'stickers' },
//   { countryCode: 'US', name: 'Emily', product: 'stickers' }
// ],
// CA: [
//   { countryCode: 'CA', name: 'Sarah', product: 'shirt' },
//   { countryCode: 'CA', name: 'David', product: 'shirt' }
// ],
// MX: [
//   { countryCode: 'MX', name: 'Carlos', product: 'skateboard' },
//   { countryCode: 'MX', name: 'Juan', product: 'skateboard' }
// ],
// FR: [ { countryCode: 'FR', name: 'Marie', product: 'hoodie' } ],
// JP: [ { countryCode: 'JP', name: 'Yuki', product: 'basketball' } ]
// }

console.log("---------------------------------")

// Group y country code
const ordersByCountry1 = Object.groupBy(orders, (order) => order.countryCode)

console.log(ordersByCountry1)