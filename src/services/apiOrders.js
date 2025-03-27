import { PAGE_SIZE } from '../utils/constants';
import { getToday } from '../utils/helper';
import supabase from './supabase';

export async function getOrders({ filter, sortBy, page }) {
  let query = supabase
    .from('orders')
    .select(
      'id,created_at,orderDate,dueDate, status,totalPrice, products(name), customers(fullName,email)',
      { count: 'exact' },
    );

  if (filter !== null) query = query.eq(filter.field, filter.value);
  if (sortBy)
    query = query.order(sortBy.field, {
      ascending: sortBy.direction === 'asc',
    });

  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }
  const { data, error, count } = await query;
  if (error) throw new Error('Orders could not be created');
  return { data, count };
}

export async function getOrder(id) {
  const { data, error } = await supabase
    .from('orders')
    .select('*, products(*), customers(*)')
    .eq('id', id)
    .single();

  if (error) {
    console.log(error);
    throw new Error('Order not found');
  }
  return data;
}

export async function updateIsPaid(id, confirmPaid) {
  console.log(id, confirmPaid);
  const { data, error } = await supabase
    .from('orders')
    .update({ isPaid: true })
    .eq('id', id)
    .select();
  if (error) {
    console.log(error);
    throw new Error('isPaid could not be updated');
  }
  return data;
}

export async function updateStatus(id, status) {
  const { data, error } = await supabase
    .from('orders')
    .update({ status })
    .eq('id', id)
    .select();
  if (error) {
    console.log(error);
    throw new Error('status could not be updated');
  }
  return data;
}

export async function deleteOrder(id) {
  const { error } = await supabase.from('orders').delete().eq('id', id);

  if (error) {
    console.log(error);
    throw new Error('Order could not be deleted');
  }
}

//date: ISO String
export async function getOrdersAfterDate(date) {
  const { data, error } = await supabase
    .from('orders')
    .select('*, customers(fullName)')
    .gte('created_at', date)
    .lte('created_at', getToday({ end: true }));

  if (error) {
    console.log(error);
    throw new Error('Orders could not get loaded');
  }

  return data;
}

export async function getOrdersPaid(date) {
  const { data, error } = await supabase
    .from('orders')
    .select('*, customers(fullName)')
    .eq('isPaid', true)
    .gte('created_at', date)
    .lte('created_at', getToday());

  if (error) {
    console.log(error);
    throw new Error('Orders could not get loaded');
  }

  return data;
}
