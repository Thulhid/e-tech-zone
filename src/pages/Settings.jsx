import UpdateSettingsForm from '../features/settings/UpdateSettingsForm';

function Settings() {
  return (
    <div>
      <h1 className="m-4 mb-10 ml-4 text-2xl font-semibold text-slate-700 sm:text-2xl md:text-3xl dark:text-slate-200">
        Update shop settings
      </h1>
      <UpdateSettingsForm />
    </div>
  );
}

export default Settings;
