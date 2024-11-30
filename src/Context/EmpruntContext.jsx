import { createContext, useState } from "react";

export const EmpruntContext = createContext();

const EmpruntProvider = ({ children }) => {
  const [emprunts, setEmprunts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [livres, setLivres] = useState([]);
  const empruntLivre = (livre) => {
    if (livre.disponible === false) return;
    setEmprunts((prev) => [...prev, { ...livre, disponible: false }]);
  };

  const returnLivre = (id) => {
    setEmprunts((prev) => prev.filter((livre) => livre.id !== id));
  };

  return (
    <EmpruntContext.Provider
      value={{
        emprunts,
        empruntLivre,
        returnLivre,
        livres,
        setLivres,
        loading,
        setLoading,
      }}
    >
      {children}
    </EmpruntContext.Provider>
  );
};
export default EmpruntProvider;
