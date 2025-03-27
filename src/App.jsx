import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AppLayout from './ui/AppLayout';
import Dashboard from './pages/dashboard';
import Products from './pages/Products';
import Settings from './pages/Settings';
import Orders from './pages/Orders';
import Users from './pages/Users';
import Login from './pages/Login';
import Account from './pages/Account';
import PageNotFound from './pages/PageNotFound';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Order from './pages/Order';
import Status from './pages/Status';
import ProtectedRoute from './ui/ProtectedRoute';

import { Toaster } from 'react-hot-toast';

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="products" element={<Products />} />
            <Route path="orders" element={<Orders />} />
            <Route path="orders/:orderId" element={<Order />} />
            <Route path="status/:orderId" element={<Status />} />
            <Route path="users" element={<Users />} />
            <Route path="account" element={<Account />} />
            <Route path="settings" element={<Settings />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>

      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          className: '',
          duration: 5000,
          removeDelay: 1000,
          style: {
            background: '#363636',
            color: '#fff',
          },

          success: {
            className:
              'dark:!bg-sky-700 !text-slate-700 dark:!text-slate-200 !bg-white',
            duration: 3000,
            iconTheme: {
              primary: 'var(--toast-icon-success-primary)',
              secondary: 'var(--toast-icon-success-secondary)',
            },
          },
          error: {
            className: '!bg-red-500 dark:!bg-red-600 dark:!text-slate-200',
            duration: 5000,
            iconTheme: {
              primary: 'var(--toast-icon-error-primary)',
              secondary: 'var(--toast-icon-error-secondary)',
            },
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
