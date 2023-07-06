import React from 'react';
import ReactDOM from 'react-dom';

import { theme } from '@Utils';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import './global.scss';

import App from './App';

const { CustomMuiThemeProvider } = theme;

const twentyFourHoursInMs = 1000 * 60 * 60 * 24;
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: twentyFourHoursInMs,
    },
  },
});

// @ts-ignore
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(

// );

const rootElement = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <CustomMuiThemeProvider>
      <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools position='bottom-right' />
      </QueryClientProvider>
    </CustomMuiThemeProvider>
  </React.StrictMode>,
  rootElement,
);
