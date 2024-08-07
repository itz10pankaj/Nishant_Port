import Hero from '@/Components/Hero';
import Grid from '@/Components/Grid';
import { FloatingNav } from '@/Components/ui/FloatingNav';
import { FaHome } from 'react-icons/fa';
import RecentProjects from '@/Components/RecentProjects';
import { navItems } from '@/data';
import Experience from '@/Components/Experience';
import Footer from '@/Components/Footer';
import TechStack from '@/Components/TechStack';

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Experience />
        <TechStack />
        <Footer />
      </div>
    </main>
  );
}