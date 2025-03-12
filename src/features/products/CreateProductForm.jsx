import { useForm } from 'react-hook-form';
import { useCreateProducts } from './useCreateProducts';
import { useUpdateProducts } from './useUpdateProducts';
import FormRow from '../../ui/FormRow';
import Button from '../../ui/Button';
import { ImSpinner2 } from 'react-icons/im';

function CreateProductForm({ productToUpdate = {}, onCloseModal }) {
  const { id: updateId, ...updateValues } = productToUpdate;
  const isUpdateSession = Boolean(updateId);
  const { createProduct, isCreating } = useCreateProducts();
  const { updateProduct, isUpdating } = useUpdateProducts();
  const isWorking = isCreating || isUpdating;
  const { handleSubmit, register, reset, formState, getValues } = useForm({
    defaultValues: isUpdateSession ? updateValues : {},
  });
  console.log(updateValues);
  const { errors } = formState;

  function onSubmit(data) {
    const image = typeof data.image === 'string' ? data.image : data.image[0];
    if (isUpdateSession)
      updateProduct(
        {
          newProduct: { ...data, image },
          id: updateId,
        },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        },
      );
    else
      createProduct(
        { ...data, image: data.image[0] },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        },
      );
  }
  function onError() {
    console.log(errors);
  }
  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label="Product name" error={errors?.name?.message}>
        <input
          className="input"
          id="name"
          type="text"
          disabled={isCreating}
          {...register('name', {
            required: 'This field required!',
          })}
        />
      </FormRow>
      <FormRow label="Regular price" error={errors?.regularPrice?.message}>
        <input
          className="input"
          id="regularPrice"
          disabled={isCreating}
          type="number"
          {...register('regularPrice', {
            required: 'This field required!',
          })}
        />
      </FormRow>
      <FormRow label="Discount" error={errors?.discount?.message}>
        <input
          className="input"
          id="discount"
          disabled={isCreating}
          type="number"
          defaultValue={0}
          {...register('discount', {
            required: 'This field is required!',
            validate: (value) =>
              +value <= getValues().regularPrice ||
              'Discount should be regular price',
          })}
        />
      </FormRow>
      <FormRow label="description" error={errors?.description?.message}>
        <textarea
          className="input h-17 w-40"
          id="description"
          disabled={isCreating}
          type="textarea"
          {...register('description')}
        />
      </FormRow>

      <FormRow error={errors?.image?.message}>
        <input
          id="image"
          type="file"
          disabled={isCreating}
          accept="image/*"
          className="ml-34 w-3xs cursor-pointer rounded-full text-sm text-[10px] text-slate-700 file:mr-2 file:cursor-pointer file:rounded-full file:border-0 file:bg-sky-400 file:px-2 file:py-2 file:font-semibold file:text-slate-50 hover:file:brightness-105 focus:border-sky-500 sm:ml-40 sm:text-sm sm:focus:border-1"
          {...register('image', {
            required: !isUpdateSession && 'This field is required!',
          })}
        />
      </FormRow>

      <div className="grid grid-cols-2 py-5 sm:grid-cols-[1fr_1.5fr_1fr]">
        <span className="col-3 flex gap-2 sm:gap-3">
          <Button variant="secondary" buttonType="reset" disabled={isCreating}>
            Clear
          </Button>
          <Button variant="primary" disabled={isCreating}>
            {isWorking ? (
              <>
                <span>Processing..</span>
                <ImSpinner2 size={20} className="animate-spin" />
              </>
            ) : isUpdateSession ? (
              'Edit product'
            ) : (
              'Create product'
            )}
          </Button>
        </span>
      </div>
    </form>
  );
}

export default CreateProductForm;
