import React, { useState } from "react";

import {
  Plus,
  Search,
  Eye,
  Pencil,
  Trash2
} from "lucide-react";

function Stagiaires() {
    const [stagiaires, setStagiaires] = useState([
  {
    id: 1,
    nom: "Yassine El Idrissi",
    code: "STG001",
    filiere: "Développement",
    annee: "2ème année",
    email: "yassine@ista.ma",
    statut: "Actif"
  },
  {
    id: 2,
    nom: "Fatima Zahra",
    code: "STG002",
    filiere: "Gestion",
    annee: "1ère année",
    email: "fatima@ista.ma",
    statut: "Actif"
  },
  {
    id: 3,
    nom: "Omar El Amrani",
    code: "STG003",
    filiere: "Mécanique",
    annee: "2ème année",
    email: "omar@ista.ma",
    statut: "En attente"
  }
])



function couleurStatut(statut) {
  if (statut === "Actif") {
    return "bg-green-100 text-green-700";
  }

  if (statut === "En attente") {
    return "bg-yellow-100 text-yellow-700";
  }

  return "bg-red-100 text-red-700";
}
;
const supprimerStagiaires = (id) => {
  setStagiaires(stagiaires.filter((e) => e.id !== id));
};

  return (
    <div>

      <div className="flex justify-between items-center ">

        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Gestion des stagiaires
          </h1>

          <p className="text-gray-500 mt-2">
            Consultez, recherchez et gérez les stagiaires de l'institut.
          </p>
        </div>

        <button className="flex items-center gap-2 bg-blue-600 text-white 
        px-5 py-3 rounded-lg hover:bg-blue-700 duration-500">
          <Plus size={20} />
          Ajouter un stagiaire
        </button>

      </div>

      <div className="grid grid-cols-4 gap-5 h-auto bg-white
       p-5 rounded-xl border border-gray-200">

        <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3">
          <Search size={20} className="text-gray-400" />

          <input
            type="text"
            placeholder="Rechercher par nom, email..."
            className="w-full outline-none py-3 text-sm"
          />
        </div>

        <div >
          <label className="text-sm">Filière</label>
          <select className="w-full border border-gray-200 rounded-lg p-3">
            <option>Toutes les filières</option>
            <option>Développement</option>
            <option>Gestion</option>
            <option>Mécanique</option>
          </select>
        </div>

        <div>
          <label className="text-sm">Année</label>
          <select className="w-full border border-gray-200 rounded-lg p-3">
            <option>Toutes les années</option>
            <option>1ère année</option>
            <option>2ème année</option>
          </select>
        </div>

        <div>
          <label className="text-sm">Statut</label>
          <select className="w-full border border-gray-200 rounded-lg p-3">
            <option>Tous les statuts</option>
            <option>Actif</option>
            <option>En attente</option>
            <option>Désactivé</option>
          </select>
        </div>

      </div>



    <div className="mt-6 bg-white border border-gray-200 rounded-xl overflow-x-auto">

     <table className="w-full text-sm text-left">

    <thead className="bg-gray-50 text-gray-700">
      <tr>
        <th className="p-4">Nom complet</th>
        <th className="p-4">Code stagiaire</th>
        <th className="p-4">Filière</th>
        <th className="p-4">Année</th>
        <th className="p-4">Email</th>
        <th className="p-4">Statut</th>
        <th className="p-4">Actions</th>
      </tr>
    </thead>

    <tbody>
      {stagiaires.map((e)=> {
        return (
          <tr key={e.id} className="border-t border-gray-100 hover:bg-gray-50">

            <td className="p-4 font-medium">
              {e.nom}
            </td>

            <td className="p-4">{e.code}</td>

            <td className="p-4">{e.filiere}</td>

            <td className="p-4">{e.annee}</td>

            <td className="p-4">{e.email}</td>

            <td className="p-4">
              <span className={`px-3 py-1 rounded-full ${couleurStatut(e.statut)}`}>
                 {e.statut}
               </span>
            </td>

            <td className="p-4">
              <div className="flex gap-2">
                <button  className="text-blue-600 opacity-50">
                  <Eye size={18} />
                </button>

                <button className="text-blue-600 opacity-50">
                  <Pencil size={18} />
                </button>

                <button  onClick={() => supprimerStagiaires(e.id)}
                 className="text-red-500 opacity-50">
                  <Trash2 size={18} />

                </button>
              </div>
            </td>

          </tr>
        );
      })}
    </tbody>

  </table>
</div>





    </div>
  );
}

export default Stagiaires;
