import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { ReducersList } from '@/shared/lib/components/DynamicReducerLoader';
import { loginReducer } from '@/features/AuthByUsername/model/slice/loginSlice';
import { profileReducer } from '@/entities/Profile';
import { articleDeatilsReducer } from '@/entities/Article/model/slice/articleDetailsSlice';

const defaultAsyncRedusers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDeatils: articleDeatilsReducer,
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
