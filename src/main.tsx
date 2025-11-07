import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import './index.css';

import App from './App';
import { HomePage } from './components/HomePage';
import { ProductsPage } from './components/ProductsPage';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import { ProductDetailPage } from './components/ProductDetailPage'; 

import { AdminLayout } from './components/AdminLayout'; 
import { AdminLoginPage } from './components/AdminLoginPage';
import { AdminDashboard } from './components/AdminDashboard';
import { ProtectedRoute } from './components/ProtectedRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, 
    children: [
      { path: '/', element: <HomePage /> }, 
      { path: '/produk', element: <ProductsPage /> },
      { path: '/produk/:id', element: <ProductDetailPage /> }, 
      { path: '/tentang', element: <AboutPage /> }, 
      { path: '/kontak', element: <ContactPage /> },
    ],
  },
  {
    path: '/',
    element: <AdminLayout />,
    children: [
      { 
        path: 'admin-login', 
        element: <AdminLoginPage /> 
      },
      {
        path: 'admin', 
        element: <ProtectedRoute />, 
        children: [
          { 
            path: 'dashboard',
            element: <AdminDashboard /> 
          },
        ]
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);