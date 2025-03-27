import { useState } from 'react';
import supabase from '../services/supabase';
import Button from '../ui/Button';

import { customers } from './data-customers';
import { products } from './data-products';
import { orders } from './data-orders';

async function deleteOrders() {
  const { error } = await supabase.from('orders').delete().gt('id', 0);
  if (error) console.log(error.message);
}

async function deleteCustomers() {
  const { error } = await supabase.from('customers').delete().gt('id', 0);
  if (error) console.log(error.message);
}

async function deleteProducts() {
  const { error } = await supabase.from('products').delete().gt('id', 0);
  if (error) console.log(error.message);
}

async function createCustomers() {
  const { error } = await supabase.from('customers').insert(customers);
  if (error) console.log(error.message);
}

async function createProducts() {
  const { error } = await supabase.from('products').insert(products);
  if (error) console.log(error.message);
}

async function createOrders() {
  const { data: customerIds } = await supabase
    .from('customers')
    .select('id')
    .order('id');
  const allCustomerIds = customerIds.map((customer) => customer.id);

  const { data: productIds } = await supabase
    .from('products')
    .select('id')
    .order('id');
  const allProductIds = productIds.map((product) => product.id);

  const finalOrders = orders.map((order) => ({
    ...order,
    customerId: allCustomerIds.at(order.customerId - 1),
    productId: allProductIds.at(order.productId - 1),
  }));

  console.log(finalOrders);

  const { error } = await supabase.from('orders').insert(finalOrders);
  if (error) console.log(error.message);
}

function Uploader() {
  const [isLoading, setIsLoading] = useState(false);

  async function uploadAll() {
    setIsLoading(true);
    await deleteOrders();
    await deleteCustomers();
    await deleteProducts();

    await createCustomers();
    await createProducts();
    await createOrders();

    setIsLoading(false);
  }

  async function uploadOrders() {
    setIsLoading(true);
    await deleteOrders();
    await createOrders();
    setIsLoading(false);
  }

  return (
    <div
      style={{
        marginTop: 'auto',
        backgroundColor: '#e0e7ff',
        padding: '8px',
        borderRadius: '5px',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
      }}
    >
      <h3>SAMPLE DATA</h3>
      <Button onClick={uploadAll} disabled={isLoading}>
        Upload ALL
      </Button>
      <Button onClick={uploadOrders} disabled={isLoading}>
        Upload orders ONLY
      </Button>
    </div>
  );
}

export default Uploader;
