import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>,
  );
}

// import {
//   createBrowserRouter,
//   RouterProvider,
// } from 'react-router-dom';
// import { Layout } from './components/Layout';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//   },
// ]);



/* <Routes>
  <Route path='/' element={<Layout />}>
    <Route index element={<ProductsCatalogPage />} />
    <Route path='shoppingcart' element={<ShoppingCartPage />} />
    <Route path='*' element={<NoMatch />} />
  </Route>
</Routes> */



/* <React.StrictMode>
<BrowserRouter>
  <App />
</BrowserRouter>
</React.StrictMode>, */