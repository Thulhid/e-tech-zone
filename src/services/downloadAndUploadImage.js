import { toast } from 'react-toastify';
import supabase from './supabase';

export async function downloadAndUploadImage(imageUrl, from) {
  try {
    // Step 1: Fetch the image as a Blob
    const response = await fetch(imageUrl);
    if (!response.ok) toast.error('Failed to copying image.');

    const blob = await response.blob();

    // Step 2: Generate a new unique file name
    const urlParts = imageUrl.split('/');
    const oldFileName = urlParts[urlParts.length - 1];
    const newFileName = `copy-${Date.now()}-${oldFileName}`;

    // Step 3: Upload the new image
    const { error } = await supabase.storage
      .from(from)
      .upload(newFileName, blob, { contentType: blob.type });

    if (error) toast.error(error.message);

    // Step 4: Get new public URL
    // const { data: publicUrlData } = supabase.storage
    //   .from('products-images')
    //   .getPublicUrl(newFileName);

    // return publicUrlData.publicUrl;
  } catch (err) {
    toast.error(err.message);
  }
}
