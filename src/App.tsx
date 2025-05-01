import React from 'react';
import Navbar from './components/Navbar';
import BentoGrid from './components/BentoGrid';


function App() {
  return (
    <div className="min-h-screen bg-[#111827] text-[#111827] font-sans">
      <main className="container mx-auto px-4 py-8">
        {/* <Navbar /> */}
        <BentoGrid />
      </main>
    </div>
  );
}

export default App;