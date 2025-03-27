import FormRow from '../../ui/FormRow';
import Spinner from '../../ui/Spinner';
import { useSettings } from './useSettings';
import { useUpdateSetting } from './useUpdateSetting';

function UpdateSettingsForm() {
  const { settings, isPending } = useSettings();

  const { updateSetting, isUpdating } = useUpdateSetting();
  if (isPending) return <Spinner />;

  function handleUpdate(e, field) {
    const { value } = e.target;

    if (!value) return;
    updateSetting({ [field]: value });
  }
  return (
    <form className="m-auto w-fit">
      <FormRow label="Min shipping fee/Order" type="normal">
        <input
          type="number"
          className="input h-9 sm:w-sm"
          id="minShippingFee"
          defaultValue={settings.minShippingFee}
          step="0.01"
          onBlur={(e) => handleUpdate(e, 'minShippingFee')}
          disabled={isUpdating}
        />
      </FormRow>
      <FormRow label="Max shipping fee/Order" type="normal">
        <input
          type="number"
          className="input h-9 sm:w-sm"
          id="maxShippingFee"
          defaultValue={settings.maxShippingFee}
          step="0.01"
          onBlur={(e) => handleUpdate(e, 'maxShippingFee')}
          disabled={isUpdating}
        />
      </FormRow>
      <FormRow label="Max Delivery Days/Order" type="normal">
        <input
          type="number"
          className="input h-9 sm:w-sm"
          id="maxDeliveryDays"
          defaultValue={settings.maxDeliveryDays}
          onBlur={(e) => handleUpdate(e, 'maxDeliveryDays')}
          disabled={isUpdating}
        />
      </FormRow>
      <FormRow label="Max Quantity/Order" type="normal">
        <input
          className="input h-9 sm:w-sm"
          id="maxQuantity"
          onBlur={(e) => handleUpdate(e, 'maxQuantity')}
          defaultValue={settings.maxQuantity}
          disabled={isUpdating}
        />
      </FormRow>
    </form>
  );
}

export default UpdateSettingsForm;
