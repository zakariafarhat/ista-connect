
import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from './components/navbar'
import Table from './page/Table-bord'
import Stagiaires from './page/stagiaires'
import Formateur from './page/formateur'
import Filières from './page/Filières'
import Entreprises from './page/Entreprises'
import Rapports from './page/Rapports'
import Paramètres from './page/Paramètres'

function App() {

  // Page actuelle
  const [page, setPage] = useState("Tableau de bord");
   function afficherPage() {

    if (page === "Tableau de bord") {
      return <Table />;
    }
   if (page === "Stagiaires") {
  return <Stagiaires />;
    }
   if(page=== "Formateurs"){
  return <Formateur/>;
   }
   if(page=== "Filières"){
  return <Filières/>;
   }
   if(page=== "Entreprises"){
  return <Entreprises/>;
   }
   if(page=== "Rapports"){
  return <Rapports/>;
   }
   if(page=== "Paramètres"){
  return <Paramètres/>;
   }
    return <h1>{page}</h1>;
  }
 
 
return (
  <div className="flex min-h-screen">
 
     <Sidebar page={page} setPage={setPage} />

    <div className="flex-1  flex flex-col  min-h-screen">

      <Navbar />

      <main className="flex-1 bg-blue-50 p-6">
        {afficherPage()}
      </main>

    </div>

  </div>
);

}

export default App;
