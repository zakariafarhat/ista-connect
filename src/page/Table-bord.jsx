import React from "react";
import{
  Users,
  UserRound,
  BookOpen,
  Building2,   
} from 'lucide-react';

function Table() {
  return (
    <div className="p-6 ">

      <div className="flex justify-between items-center mb-8">

        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Bonjour, Administrateur 
          </h1>

          <p className="text-gray-500 mt-2">
            Voici un aperçu de l'activité de votre institut aujourd'hui.
          </p>
        </div>

        <div>
          <input
            type="date"
            className="border border-gray-200 rounded-lg p-3 bg-white"
          />
        </div>

      </div>

      <div className="grid grid-cols-4 gap-5">

        <div className="bg-white p-5 rounded-xl border border-gray-200">
            <div className="flex justify-center p-2 gap-5">
           <Users  />
          <h3 className="text-gray-500 text-sm">
            Total stagiaires
          </h3 >
          </div>
          <h1 className="text-3xl font-bold mt-3 pl-10 pb-2">248</h1>
          <p className="text-green-600 text-xs mt-3 pl-4">
            224 stagiaires actifs
          </p>
        </div>
        
        <div className="bg-white p-5 rounded-xl border border-gray-200">
           <div className="flex justify-center gap-5 p-2">
             <UserRound />
            <h3 className="text-gray-500 text-sm">
            Formateurs
            </h3>
           </div>
          
          <h1 className="text-3xl font-bold pb-4 pl-14 mt-3">18</h1>
          <p className="text-gray-500 text-xs mt-3">
            Une équipe à votre écoute
          </p>
        </div>

        <div className="bg-white p-5 rounded-xl border border-gray-200">
          <div className="flex justify-center gap-5 p-2">
             <BookOpen />
            <h3 className="text-gray-500 text-sm">
            Stages en cours
          </h3>
          </div>
          
          <h1 className="text-3xl font-bold pb-4 pl-14 mt-3">48</h1>
          <p className="text-gray-500 text-xs mt-3 pl-5">
            87 stages au total
          </p>
        </div>

        <div className="bg-white p-5 rounded-xl border border-gray-200">
          <div className="flex justify-center gap-8   ">
            <Building2  className="size-10  "/>
            <h3 className="text-gray-500 text-sm ">
            Entreprises partenaires
          </h3>
          </div>
          
          <h1 className="text-3xl font-bold pb-4 pl-14 mt-3">56</h1>
          <p className="text-gray-500 text-xs mt-3 pl-7">
            Un réseau qui vous accompagne
          </p>
        </div>

      </div>



   
<div className="mt-4">

  <h2 className="text-xl font-bold text-gray-800 mb-4">
    Accès rapide
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

    <button className="flex items-center gap-4 bg-white border border-gray-200 
    rounded-xl p-5 text-left hover:border-blue-500
     hover:shadow-lg hover:-translate-y-1
      transition-all duration-300 ">

      <div className="bg-blue-100 p-3 rounded-lg">
        <Users className="text-blue-600" size={25} />
      </div>

      <div>
        <h3 className="font-semibold text-gray-800">
          Gestion des stagiaires
        </h3>
        <p className="text-sm text-gray-500 mt-1">
          Voir et modifier les stagiaires
        </p>
      </div>

    </button>

    <button className="flex items-center gap-4 bg-white border border-gray-200 
    rounded-xl p-5 text-left hover:border-purple-500
     hover:shadow-lg hover:-translate-y-1 transition-all 
     duration-300 ">

      <div className="bg-purple-100 p-3 rounded-lg">
        <UserRound className="text-purple-600" size={25} />
      </div>

      <div>
        <h3 className="font-semibold text-gray-800">
          Gestion des formateurs
        </h3>
        <p className="text-sm text-gray-500 mt-1">
          Voir et modifier les formateurs
        </p>
      </div>

    </button>

    <button className="flex items-center gap-4 bg-white border border-gray-200 
    rounded-xl p-5 text-left hover:border-green-500 hover:shadow-lg
     hover:-translate-y-1 transition-all duration-300 ">

      <div className="bg-green-100 p-3 rounded-lg">
        <BookOpen className="text-green-600" size={25} />
      </div>

      <div>
        <h3 className="font-semibold text-gray-800">
          Gestion des filières
        </h3>
        <p className="text-sm text-gray-500 mt-1">
          Consulter les filières
        </p>
      </div>

    </button>

  </div>
</div>


    </div>
  );
}

export default Table;
