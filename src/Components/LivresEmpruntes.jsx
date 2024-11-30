import { useContext } from "react";
import { EmpruntContext } from "../Context/EmpruntContext";
import EmprunteCard from "./EmprunteCard";

const LivresEmpruntes = () => {
  const { emprunts } = useContext(EmpruntContext);

  return (
    <div>
      <h2 className="text-2xl text-indigo-700  font-bold uppercase mt-4">
        Livres Empruntés
      </h2>
      {emprunts.length === 0 ? (
        <p className="text-center text-gray-500 text-6xl font-black uppercase my-8">
          Aucun livre emprunté
        </p>
      ) : (
        <div className="flex flex-wrap  gap-8 my-5 justify-center">
          {emprunts.map((livre) => (
            <EmprunteCard key={livre.id} livre={livre} />
          ))}
        </div>
      )}
    </div>
  );
};

export default LivresEmpruntes;
