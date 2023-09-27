import { StateSchema } from '@/app/providers/StoreProvider';

export const getProfileEditableForm = (state: StateSchema) => state.profile?.editableForm;
