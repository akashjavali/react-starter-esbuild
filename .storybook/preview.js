// .storybook/preview.js

import React from 'react';

import { addDecorator } from '@storybook/react';

import { CustomMuiThemeProvider } from '../src/@Utils/theme';

import '../src/global.scss';

addDecorator((Story) => (
    <CustomMuiThemeProvider>
      <Story />
    </CustomMuiThemeProvider>
));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}