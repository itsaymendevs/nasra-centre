// :import stylings
// import './page.module.css';
import './_assets/bootstrap/css/bootstrap.min.css';
import './_assets/css/aos.min.css';
import './_assets/css/globals.css';
import './_assets/css/styles.css';
import './_assets/css/select2.css';
import './_assets/css/filters.css';
import './_assets/css/home.css';
import './_assets/css/login.css';
import './_assets/css/modal.css';
import './_assets/css/navbar.css';
import './_assets/css/orders.css';
import './_assets/css/profile.css';
import './_assets/css/scroll.css';
import './_assets/css/select2-custom.css';
import './_assets/css/sms.css';
import './_assets/css/sort.css';
import './_assets/css/react-select.css';

// ----------------------------------------------------------------------------------------------------

import Script from 'next/script';
import { Provider } from 'react-redux';
import StoreProvider from '@/slices/StoreProvider';
import { CookiesProvider } from 'next-client-cookies/server';
import FormLoading from './_essentials/FormLoading';

// ----------------------------------------------------------------------------------------------------

export const metadata = {
  title: 'Nasra Centre',
  description: 'Grocery Store Dashboard',
};

// ----------------------------------------------------------------------------------------------------

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Cairo:400,500,600,700&amp;subset=arabic&amp;display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Courgette&amp;display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Noto+Sans+Arabic:400,500,600,700&amp;display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Poppins:400,500,600,700,800,900&amp;display=swap"
        />
      </head>

      {/* --------------------------------------------------------- */}

      <body>
        {/* content */}
        <StoreProvider>
          <FormLoading />

          <CookiesProvider>{children}</CookiesProvider>

          {/* portals */}
          <div id="portals"></div>
        </StoreProvider>

        {/* --------------------------------------------------------- */}
        <Script async src="/assets/js/jquery.js" />
        <Script async src="/assets/bootstrap/js/bootstrap.min.js" />
        <Script async src="/assets/js/aos.min.js" />
        <Script async src="/assets/js/bs-init.js" />
        {/* <Script
          async
          rel="preload prefetch"
          src="https://cdnjs.cloudflare.com/ajax/libs/Sortable/1.15.0/Sortable.min.js"
        />
        <Script async src="/assets/js/init-sort.js" /> */}
        <Script async src="/assets/js/init.js" />
        {/* --------------------------------------------------------- */}
      </body>
    </html>
  );
} // end function
