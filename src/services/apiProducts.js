import { downloadAndUploadImage } from './downloadAndUploadImage';
import supabase from './supabase';
import { supabaseURL } from './supabase';

export async function createUpdateProduct(newProduct, id) {
  const hasImagePath = newProduct.image?.startsWith?.(supabaseURL);
  const imageName =
    `${Math.random()}-${newProduct?.image?.name || newProduct.image.split('/').pop().split('-').slice(1).join('-')}`.replaceAll(
      '/',
      '',
    );
  const imagePath = hasImagePath
    ? newProduct.image
    : `${supabaseURL}/storage/v1/object/public/products-images/${imageName}`;

  let query = supabase.from('products');

  if (!id) query = query.insert([{ ...newProduct, image: imagePath }]);
  if (id)
    query = query.update({ ...newProduct, image: imagePath }).eq('id', id);

  const { data, error } = await query.select().single();

  if (error) throw new Error('Products could not be created');

  if (hasImagePath) {
    downloadAndUploadImage(newProduct.image, 'products-images');

    // const { error: imgError } = await supabase.storage
    //   .from('products-images')
    //   .copy(newProduct.image.split('/').pop(), imageName);
    // if (imgError) {
    //   throw new Error('Product image could not be updated');
    // }
  } else {
    const { data, error } = await supabase.storage
      .from('products-images')
      .upload(imageName, newProduct.image);
    if (error) {
      await supabase.from('products').delete().eq('id', data.id);
      throw new Error(
        'Product image could not be uploaded and the product was not created',
      );
    }
  }
  return data;
}

export async function getProducts() {
  const { data: products, error } = await supabase.from('products').select('*');
  if (error) throw new Error('Product could not be loaded');

  return products;
}
export async function deleteProduct(id, image) {
  const { data, error } = await supabase.from('products').delete().eq('id', id);
  console.log(id, image);
  if (image) {
    console.log(`products-images/${image.split('/').pop()}`);
    const { error } = await supabase.storage
      .from('products-images')
      .remove([image.split('/').pop()]);
    if (error) {
      throw new Error('Product could not be deleted');
    }
  }
  if (error) {
    throw new Error('Products could not be deleted');
  }
  return data;
}
