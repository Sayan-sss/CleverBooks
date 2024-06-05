import Hero from "@/components/Hero";
import Blog from "@/components/Blog";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import Approach from "@/components/Approach";
import Feature from "@/components/Feature";
import Review from "@/components/Review";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full ">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Approach />
        <Blog />
        <Review />
        <Feature />
        <Footer />
      </div>
    </main>
  );
}
