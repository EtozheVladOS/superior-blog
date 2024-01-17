import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ComponentRender } from '@/shared/lib/unitTest/ComponentRender';
import { Profile } from '@/entities/Profile';
import { CURRENCY } from '@/entities/Currency';
import { COUNTRY } from '@/entities/Country';
import { $api } from '@/shared/api/api';
import { EditableProfileCard } from './EditableProfileCard';
import { EditableProfilePageHeader } from '../EditableProfilePageHeader/EditableProfilePageHeader';
import { profileReducer } from '../../model/slice/profileSlice';

const profile: Profile = {
  id: '1',
  firstname: 'adminFirstName',
  lastname: 'adminLastName',
  age: 33,
  currency: CURRENCY.RUB,
  country: COUNTRY.Russia,
  city: 'Moscow',
  username: 'adminUsername',
};

const options = {
  initReduxState: {
    profile: {
      readonly: true,
      data: profile,
      editableForm: profile,
    },
    user: {
      authData: {
        id: '1',
      },
    },
  },
  asyncRedusers: {
    profile: profileReducer,
  },
};

const component = (
  <>
    <EditableProfilePageHeader />
    <EditableProfileCard id="1" />
  </>
);

describe('features/EditableProfileCard', () => {
  test('set init data to form after click cancel btn', async () => {
    ComponentRender(component, options);

    await userEvent.click(screen.getByTestId('EditableProfilePageHeader.EditBtn'));
    expect(screen.getByTestId('EditableProfilePageHeader.CancelBtn'));
  });

  test('change readonly to edit flow', async () => {
    ComponentRender(component, options);

    await userEvent.click(screen.getByTestId('EditableProfilePageHeader.EditBtn'));

    await userEvent.clear(screen.getByTestId('ProfileCard.username'));
    await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));

    await userEvent.type(screen.getByTestId('ProfileCard.username'), 'newUsername');
    await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'newFirstname');

    expect(screen.getByTestId('ProfileCard.username')).toHaveValue('newUsername');
    expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('newFirstname');

    await userEvent.click(screen.getByTestId('EditableProfilePageHeader.CancelBtn'));

    expect(screen.getByTestId('ProfileCard.username')).toHaveValue(profile.username);
    expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue(profile.firstname);
  });

  test('form validating with error', async () => {
    ComponentRender(component, options);

    await userEvent.click(screen.getByTestId('EditableProfilePageHeader.EditBtn'));
    await userEvent.clear(screen.getByTestId('ProfileCard.username'));
    await userEvent.click(screen.getByTestId('EditableProfilePageHeader.SaveBtn'));

    expect(screen.getByTestId('EditableProfileCard.ErrorText.Paragraph'))
      .toBeInTheDocument();
  });

  test('send PUT request while form is valid', async () => {
    ComponentRender(component, options);
    const mockPutRequest = jest.spyOn($api, 'put');

    await userEvent.click(screen.getByTestId('EditableProfilePageHeader.EditBtn'));
    await userEvent.type(screen.getByTestId('ProfileCard.username'), 'newUsername');
    await userEvent.click(screen.getByTestId('EditableProfilePageHeader.SaveBtn'));

    expect(mockPutRequest).toHaveBeenCalled();
  });
});
