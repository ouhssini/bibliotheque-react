import { useEffect, useContext } from "react";
import { EmpruntContext } from "../Context/EmpruntContext";
import { fetchLivres } from "../Services/Api";
import CardLivre from "./CardLivre";

const ListLivre = () => {
  const { livres, setLivres, setLoading, loading } = useContext(EmpruntContext);
  useEffect(() => {
    const getLivres = async () => {
      try {
        const data = await fetchLivres();
        const disponibles = data.filter((livre) => livre.disponible);
        setLivres(disponibles);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch books:", error);
      }
    };
    getLivres();
  }, []);
  if (loading) {
    return <></>;
  }

  return (
    <div>
      <h2 className="text-2xl text-indigo-700  font-bold uppercase">
        Livres Disponibles
      </h2>
      {
        livres.filter(l=>l.disponible).length === 0 && (
          <p className="text-center text-gray-500 text-6xl font-black uppercase my-8">
          Aucun livre disponible
        </p>
        )
      }
      <div className="flex flex-wrap  gap-8 my-5 justify-center">
        {livres
          .filter((l) => l.disponible)
          .map((livre) => (
            <CardLivre key={livre.id} livre={livre} />
          ))}
      </div>
    </div>
  );
};

export default ListLivre;
