import { useNavigate } from "react-router";
import ThreeDScene from "../components/3D/ThreeDScene";
import AILoader from "../components/AILoader";
import Header from "../components/Header";
import HeroContent from "../components/HeroContent";
import MainBackground from "../components/MainBackground";
import { useAuth } from "../hooks/useAuth";

const Home = () => {
  const navigate = useNavigate();
  const { loading, user } = useAuth();

  if (loading) return <AILoader />;

  if (user) {
    return navigate("/dashboard", { replace: true });
  }

  return (
    <MainBackground>
      <div className="container mx-auto px-4 py-2 relative z-10">
        <Header />

        <main className="flex flex-col lg:flex-row items-center justify-between pt-12 pb-16 gap-8">
          <HeroContent />
          <ThreeDScene />
        </main>
      </div>
    </MainBackground>
  );
};

export default Home;
