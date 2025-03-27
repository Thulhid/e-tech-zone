// import { add } from 'date-fns';

// function fromToday(numDays, withTime = false) {
//   const date = add(new Date(), { days: numDays });
//   if (!withTime) date.setUTCHours(0, 0, 0, 0);
//   return date.toISOString().slice(0, -1);
// }

// export const orders = [
//   {
//     created_at: fromToday(-10, true),
//     orderDate: fromToday(-10),
//     quantity: 2,
//     productPrice: 150.99,
//     shippingPrice: 10.0,
//     totalPrice: 310.99,
//     status: 'Shipped',
//     isPaid: true,
//     productId: 101,
//     customerId: 1001,
//     dueDate: fromToday(5),
//   },
//   {
//     created_at: fromToday(-7, true),
//     orderDate: fromToday(-7),
//     quantity: 1,
//     productPrice: 200.5,
//     shippingPrice: 15.0,
//     totalPrice: 215.5,
//     status: 'Processing',
//     isPaid: false,
//     productId: 102,
//     customerId: 1002,
//     dueDate: fromToday(7),
//   },
//   {
//     created_at: fromToday(-5, true),
//     orderDate: fromToday(-5),
//     quantity: 3,
//     productPrice: 99.99,
//     shippingPrice: 5.0,
//     totalPrice: 304.97,
//     status: 'Delivered',
//     isPaid: true,
//     productId: 103,
//     customerId: 1003,
//     dueDate: fromToday(3),
//   },
//   {
//     created_at: fromToday(-2, true),
//     orderDate: fromToday(-2),
//     quantity: 5,
//     productPrice: 50.0,
//     shippingPrice: 20.0,
//     totalPrice: 270.0,
//     status: 'Pending',
//     isPaid: false,
//     productId: 104,
//     customerId: 1004,
//     dueDate: fromToday(10),
//   },
//   {
//     created_at: fromToday(0, true),
//     orderDate: fromToday(0),
//     quantity: 4,
//     productPrice: 75.5,
//     shippingPrice: 8.0,
//     totalPrice: 310.0,
//     status: 'Processing',
//     isPaid: true,
//     productId: 105,
//     customerId: 1005,
//     dueDate: fromToday(14),
//   },
// ];
import { add } from 'date-fns';

function fromToday(numDays, withTime = false) {
  const date = add(new Date(), { days: numDays });
  if (!withTime) date.setUTCHours(0, 0, 0, 0);
  return date.toISOString().slice(0, -1);
}

const productIds = [137, 135, 134, 141, 138, 141, 140, 133];
const customerIds = [1, 3, 4, 5, 13, 11, 10, 6, 7, 8, 2];

export const orders = Array.from({ length: 30 }, (_, index) => {
  const quantity = Math.floor(Math.random() * 5) + 1; // Random quantity between 1-5
  const productPrice = Math.floor(Math.random() * 5000) + 500; // Random price between 500-5500 LKR
  const shippingPrice = Math.floor(Math.random() * 500) + 100; // Random shipping between 100-600 LKR
  const totalPrice = quantity * productPrice + shippingPrice;

  return {
    created_at: fromToday(-Math.floor(Math.random() * 10), true),
    quantity,
    productPrice,
    shippingPrice,
    totalPrice,
    status: ['shipped', 'delivered', 'pending'][Math.floor(Math.random() * 4)],
    isPaid: Math.random() < 0.5,
    productId: productIds[index % productIds.length],
    customerId: customerIds[index % customerIds.length],
    dueDate: fromToday(Math.floor(Math.random() * 20)),
  };
});
