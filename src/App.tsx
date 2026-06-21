import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatIsKronos from './components/WhatIsKronos';
import EcosystemArchitecture from './components/EcosystemArchitecture';
import Addons from './components/Addons';
import NodeGraph from './components/NodeGraph';
import WhyKronos from './components/WhyKronos';
import Timeline from './components/Timeline';
import Performance from './components/Performance';
import Footer from './components/Footer';

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-0.5 bg-transparent">
      <div
        className="h-full transition-[width] duration-150 ease-out"
        style={{
          width: `${progress}%`,
          background:
            'linear-gradient(90deg, #8b5cf6, #e8b75a)',
          boxShadow: '0 0 8px rgba(139,92,246,0.6)',
        }}
      />
    </div>
  );
}

function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden>
      {/* Base */}
      <div className="absolute inset-0 bg-space-base" />
      {/* Faint grid */}
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(139,92,246,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.025) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage:
            'radial-gradient(ellipse 80% 60% at 50% 30%, black, transparent 80%)',
        }}
      />
      {/* Ambient color blooms */}
      <div
        className="absolute left-[-10%] top-[20%] h-[40rem] w-[40rem] rounded-full blur-[120px]"
        style={{ background: 'rgba(109,40,217,0.08)' }}
      />
      <div
        className="absolute right-[-10%] top-[60%] h-[36rem] w-[36rem] rounded-full blur-[120px]"
        style={{ background: 'rgba(232,183,90,0.05)' }}
      />
    </div>
  );
}

export default function App() {
  return (
    <div className="relative min-h-screen">
      <AmbientBackground />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <WhatIsKronos />
        <EcosystemArchitecture />
        <Addons />
        <NodeGraph />
        <WhyKronos />
        <Timeline />
        <Performance />
      </main>
      <Footer />
    </div>
  );
}
