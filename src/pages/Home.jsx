import ThreeDScene from "../components/3D/ThreeDScene";
import AILoader from "../components/AILoader";
import DataRain from "../components/background/DataRain";
import FloatingLeaves from "../components/background/FloatingLeaves";
import Hologrid from "../components/background/Hologrid";
import Header from "../components/Header";
import HeroContent from "../components/HeroContent";
import PulseEffect from "../components/ui/PulseEffect";
import { useAuth } from "../hooks/useAuth";

const Home = () => {
  const { loading } = useAuth();

  if (loading) return <AILoader />;

  return (
    <div className="relative h-screen bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-950 overflow-hidden">
      <Hologrid />
      <DataRain />
      <FloatingLeaves />
      <PulseEffect />

      <div className="container mx-auto px-4 py-2 relative z-10">
        <Header />

        <main className="flex flex-col lg:flex-row items-center justify-between pt-12 pb-16 gap-8">
          <HeroContent />
          <ThreeDScene />
        </main>
      </div>
    </div>
  );
};

export default Home;
