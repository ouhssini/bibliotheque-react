import { Toaster } from "react-hot-toast";
import ListLivre from "./Components/ListLivre";
import LivresEmpruntes from "./Components/LivresEmpruntes";
import { useContext } from "react";
import { EmpruntContext } from "./Context/EmpruntContext";

export default function App() {
  const { loading } = useContext(EmpruntContext);
  return (
    <div className="px-10  py-8">
    {loading && <p className="text-center text-4xl font-bold text-indigo-900">Chargement...</p>}
      <ListLivre />
      {
        !loading && (
          <>
            <hr className="bg-red-500 h-2 w-1/2 mx-auto border-none" />
            <LivresEmpruntes />
            <Toaster />
          </>
        )
      }
     
    </div>
  );
}
