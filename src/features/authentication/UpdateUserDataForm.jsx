import { useState } from 'react';
import Button from '../../ui/Button';
import FormRow from '../../ui/FormRow';
import { useUser } from './useUser';
import { useUpdateUser } from './useUpdateUser';
import { ImSpinner2 } from 'react-icons/im';
function UpdateUserDataForm() {
  const {
    user: {
      email,
      user_metadata: { fullName: currentFullName },
    },
  } = useUser();

  const { updateUser, isUpdating } = useUpdateUser();
  const [avatar, setAvatar] = useState(null);
  const [fullName, setFullName] = useState(currentFullName || '');

  function handleSubmit(e) {
    e.preventDefault();
    if (!fullName) return;
    updateUser(
      { fullName, avatar },
      {
        onSuccess: () => {
          setAvatar(null);
          e.target.reset();
        },
      },
    );
  }

  return (
    <div className="m-auto w-fit">
      <h2 className="mb-5 ml-4 text-xl font-semibold text-slate-500 sm:ml-0 dark:text-slate-300">
        Update user data
      </h2>
      <form
        className="rounded-lg bg-white p-2 shadow-lg md:p-5 dark:bg-sky-800"
        onSubmit={handleSubmit}
      >
        <FormRow label="Email" type="updateUser">
          <input
            className="input h-9 sm:w-sm"
            id="email"
            disabled={true}
            value={email}
          />
        </FormRow>
        <FormRow label="Full name" type="updateUser">
          <input
            className="input h-9 sm:w-sm"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            disabled={isUpdating}
          />
        </FormRow>
        <FormRow label="Avatar image" type="updateUser">
          <input
            id="image"
            type="file"
            onChange={(e) => setAvatar(e.target.files[0])}
            disabled={isUpdating}
            accept="image/*"
            className="w-50 cursor-pointer rounded-full text-[10px] text-slate-700 file:mr-2 file:cursor-pointer file:rounded-full file:border-0 file:bg-sky-400 file:px-2 file:py-2 file:font-semibold file:text-slate-50 hover:file:brightness-105 focus:border-sky-500 sm:h-auto sm:w-auto sm:text-sm sm:focus:border-1 dark:text-slate-200 dark:file:bg-sky-500"
          />
        </FormRow>
        <div className="grid grid-cols-[7rem_1fr] py-10 sm:grid-cols-2">
          <span className="col-2 flex gap-3 justify-self-end whitespace-nowrap sm:gap-3">
            <Button variant="secondary" buttonType="reset">
              Clear
            </Button>
            <Button variant="primary" disabled={isUpdating}>
              {isUpdating ? (
                <>
                  <span>Updating..</span>
                  <ImSpinner2 size={20} className="animate-spin" />
                </>
              ) : (
                'Update account'
              )}
            </Button>
          </span>
        </div>
      </form>
    </div>
  );
}

export default UpdateUserDataForm;
/* 
 <input
          id="image"
          type="file"
          disabled={isCreating}
          accept="image/*"
          className="col-2 w-3xs cursor-pointer rounded-full text-sm text-[10px] text-slate-700 file:mr-2 file:cursor-pointer file:rounded-full file:border-0 file:bg-sky-400 file:px-2 file:py-2 file:font-semibold file:text-slate-50 hover:file:brightness-105 focus:border-sky-500 sm:col-1 sm:ml-40 sm:h-auto sm:text-sm sm:focus:border-1"
          {...register('image', {
            required: !isUpdateSession && 'This field is required!',
          })}
        />
*/
