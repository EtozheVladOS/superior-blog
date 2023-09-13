import { Story } from '@storybook/react';
import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';

export const StoreDecorator = (initState: DeepPartial<StateSchema>) => (StoryComponent: Story) => (
  <StoreProvider initState={initState as StateSchema}>
    <StoryComponent />
  </StoreProvider>
);
