import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar'; 

export function AdminLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar /> 
      
      <main className="flex-grow">
        <Outlet /> 
      </main>

    </div>
  );
}