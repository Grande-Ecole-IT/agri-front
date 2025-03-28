import { useEffect, useState } from "react";
import AILoader from "../components/AILoader";
import Header from "../components/Header";
import UserCard from "../components/UserCard";
import { useAuth } from "../hooks/useAuth";

const Calendrier = () => {
  const [recommandation, setRecommandation] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const uri = "https://agri-back-fo2l.onrender.com/recommandations/";
  const month = new Date().toLocaleString("fr-FR", { month: "long" });

  const { user } = useAuth();

  useEffect(() => {
    fetch(uri, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        country: user?.pays,
        region: user?.region,
        month: month,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setRecommandation(data);
        setIsLoading(false);
      })
      .catch((e) => console.error(e));
  }, [month, user?.pays, user?.region]);

  return (
    <div className="h-screen flex justify-center bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-950 relative overflow-hidden">
      <div className="container mx-auto px-4 py-2 relative z-10">
        <Header />
        <div className="bg-white p-10 mt-5 rounded-2xl h-full ">
          <UserCard
            saison={recommandation?.season}
            month={month.toLocaleUpperCase()}
          />
          {isLoading ? <AILoader /> : <p></p>}
        </div>
      </div>
    </div>
  );
};

export default Calendrier;
