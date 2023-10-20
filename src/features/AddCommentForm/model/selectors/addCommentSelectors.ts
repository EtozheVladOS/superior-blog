import { StateSchema } from '@/app/providers/StoreProvider';

export const getAddCommentTextSelector = (state: StateSchema) => state.addCommentForm?.text;

export const getAddCommentErrorSelector = (state: StateSchema) => state.addCommentForm?.error;
