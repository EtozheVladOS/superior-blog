import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { ReducersList } from '@/shared/lib/components/DynamicReducerLoader';
import { loginReducer } from '@/features/AuthByUsername/model/slice/loginSlice';
import { profileReducer } from '@/features/EditableProfileCard';
import { articleDeatilsReducer } from '@/entities/Article/model/slice/articleDetailsSlice';
import { addCommentFormReducer } from '@/features/AddCommentForm/model/slices/addCommentFormSlice';
import { articleDetailsPageReducer } from '@/pages/ArticleDetailsPage/model/slices';

const defaultAsyncRedusers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDeatils: articleDeatilsReducer,
  addCommentForm: addCommentFormReducer,
  articleDetailsPage: articleDetailsPageReducer,
};

export const StoreDecorator = (
  initState: DeepPartial<StateSchema>,
  asyncReducers?: ReducersList,
) => (StoryComponent: Story) => (
  <StoreProvider
    initState={initState as StateSchema}
    asyncRedusers={{ ...defaultAsyncRedusers, ...asyncReducers }}
  >
    <StoryComponent />
  </StoreProvider>
);
