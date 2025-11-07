import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer'; // <-- 1. TAMBAHKAN IMPOR INI
import { SplashScreen } from './components/SplashScreen'; // (Saya biarkan ini jika Anda masih memakainya)
import { useState, useEffect } from 'react'; // (Saya biarkan ini jika Anda masih memakainya)

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Logika splash screen
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); 
    return () => clearTimeout(timer);
  }, []); 

  // 1. Saat loading, tampilkan SplashScreen
  if (isLoading) {
    return <SplashScreen />;
  }
  
  // 2. Setelah loading, tampilkan layout aplikasi
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer /> {/* <-- 2. TAMBAHKAN KOMPONEN FOOTER DI SINI */}
    </div>
  );
}