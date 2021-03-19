import React, { Fragment } from 'react';
import { addDecorator, addParameters } from '@storybook/react';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import { withKnobs } from "@storybook/addon-knobs";
import { withThemesProvider } from "storybook-addon-styled-component-theme";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import themes from '../src/themes/index';
import global from '../src/global.css';

// Set up global css syling
const GlobalStyle = createGlobalStyle`
  ${global}
`;

export const withGlobal = cb => (
  <Fragment>
    <GlobalStyle />
    {cb()}
  </Fragment>
);
addDecorator(withGlobal);

// Add relevant themes, create theme switch for storybook
addDecorator(withThemesProvider(themes), ThemeProvider);

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
});

addDecorator(withKnobs);