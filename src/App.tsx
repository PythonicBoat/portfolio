import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import BentoGrid from './components/BentoGrid';
import Preloader from './components/PreLoder';
import { Analytics } from "@vercel/analytics/react"


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <div className="min-h-screen bg-[#111827] text-[#111827] font-sans">
      <main className="container mx-auto px-4 py-8">
        {/* <Navbar /> */}
        <BentoGrid />
        <Analytics />
      </main>
    </div>
  );
}

export default App;