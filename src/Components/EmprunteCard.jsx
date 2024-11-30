import React, { useContext } from "react";
import { EmpruntContext } from "../Context/EmpruntContext";
import toast from "react-hot-toast";
import { BiBook, BiUser } from "react-icons/bi";

const EmprunteCard = ({ livre }) => {
  const { returnLivre, livres, setLivres } = useContext(EmpruntContext);
  const changeDisponibilite = (id) => {
    setLivres(
      livres.map((livre) => {
        if (livre.id === id) {
          return { ...livre, disponible: !livre.disponible };
        }
        return livre;
      })
    );
  };
  return (
    <>
      <div className="basis-64 p-4 bg-gray-200 shadow-lg rounded-lg flex flex-col justify-between">
      <div className="flex gap-4">
          <BiBook className="text-3xl text-indigo-900" />
          <h3 className="font-semibold text-indigo-900 text-xl leading-relaxed">{livre.titre}</h3>
          </div>
          <div className="flex items-center gap-3 mt-2">
          <BiUser className="text-xl text-gray-500" />
          <p className="text-sm text-gray-500 uppercase"> {livre.auteur}</p>
        </div>

        <button
          className={`bg-green-500 text-white px-6 py-2 mt-4 rounded-md`}
          onClick={(e) => {
            returnLivre(livre.id);
            changeDisponibilite(livre.id);
            toast.success("Livre rendu avec succès");
          }}
        >
          Rendre
        </button>
      </div>
    </>
  );
};

export default EmprunteCard;
