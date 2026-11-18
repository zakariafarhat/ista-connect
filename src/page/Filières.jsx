
import React, { useState } from 'react'

import {
  BookOpen,
  UserRound,
  Layers,
  Pencil,
  Trash2,
  Plus
} from "lucide-react";



export default function Filieres() {

  const [filieres, setFilieres] = useState([
    {
      id: 1,
      nom: "Développement",
      nombreStagiaires: 80
    },
    {
      id: 2,
      nom: "Gestion",
      nombreStagiaires: 70
    },
    {
      id: 3,
      nom: "Mécanique",
      nombreStagiaires: 50
    }
  ]);

  const [vue, setVue] = useState("liste");
  const [nom, setNom] = useState("");
  const [nombreStagiaires, setNombreStagiaires] = useState("");
  const [idModification, setIdModification] = useState(null);
  const [prochainId, setProchainId] = useState(4);


  const supprimerFiliere = (id) => {
    setFilieres(filieres.filter((e) => e.id !== id));
  };


  function ouvrirAjout() {
    setNom("");
    setNombreStagiaires("");
    setIdModification(null);
    setVue("formulaire");
  }


  function ouvrirModification(e) {
    setNom(e.nom);
    setNombreStagiaires(e.nombreStagiaires);
    setIdModification(e.id);
    setVue("formulaire");
  }


  function ajouter() {
    setFilieres([
      ...filieres,
      {
        id: prochainId,
        nom: nom,
        nombreStagiaires: Number(nombreStagiaires)
      }
    ]);

    setProchainId(prochainId + 1);
  }


  function modifier() {
    setFilieres(
      filieres.map((e) => {
        if (e.id === idModification) {
          return {
            ...e,
            nom: nom,
            nombreStagiaires: Number(nombreStagiaires)
          };
        }

        return e;
      })
    );
  }


  function enregistrer(event) {
    event.preventDefault();

    if (idModification === null) {
      ajouter();
    } else {
      modifier();
    }

    setVue("liste");
  }


  const totalFilieres = filieres.length;

  const totalStagiaires = 248;

  const max = Math.max(...filieres.map(e => e.nombreStagiaires));

  const filiereDemandee = filieres.find(e => e.nombreStagiaires === max)?.nom || "Aucune";

  if (vue === "formulaire") {

    let titre = "Ajouter une filière";

    if (idModification !== null) {
      titre = "Modifier une filière";
    }

    return (
      <div className="space-y-5">

        <h1 className="text-2xl font-bold text-gray-800">
          {titre}
        </h1>

        <form
          onSubmit={enregistrer}
          className="bg-white border border-gray-200 rounded-xl p-5 space-y-5"
        >

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            <label className="block text-gray-600">
              Nom de la filière

              <input
                type="text"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                required
                className="block w-full border border-gray-200 rounded-lg p-3 mt-1"
              />
            </label>

            <label className="block text-gray-600">
              Nombre de stagiaires

              <input
                type="number"
                min="0"
                value={nombreStagiaires}
                onChange={(e) => setNombreStagiaires(e.target.value)}
                required
                className="block w-full border border-gray-200 rounded-lg p-3 mt-1"
              />
            </label>

          </div>

          <div className="flex flex-wrap gap-3 justify-end">

            <button
              type="button"
              onClick={() => setVue("liste")}
              className="border border-gray-200 rounded-lg px-5 py-3"
            >
              Annuler
            </button>

            <button
              type="submit"
              className="bg-blue-600 text-white rounded-lg px-5 py-3 hover:bg-blue-700"
            >
              Enregistrer
            </button>

          </div>

        </form>

      </div>
    );
  }


  return (
    <div className="space-y-5">

      {/* phase 1  */}

      <div className="flex justify-between items-center">

        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Gestion des filières
          </h1>

          <p className="text-gray-500 mt-2">
            Consultez, ajoutez et gérez les filières de formation de l'institut.
          </p>
        </div>

        <button
          onClick={ouvrirAjout}
          className="flex items-center gap-2 bg-blue-600 rounded-lg text-white px-5 py-3 hover:bg-blue-700 duration-300"
        >
          <Plus size={20} />
          Ajouter une filiere
        </button>

      </div>


      {/* phase 2 */}

      <div className="grid grid-cols-3 gap-5">


        <div className="bg-white p-5 rounded-xl border border-gray-200 flex items-center gap-4">

          <div className="bg-blue-100 p-3 rounded-xl">
            <BookOpen size={25} className="text-blue-600" />
          </div>

          <div>
            <p className="text-gray-500 text-sm">
              Total des filières
            </p>

            <h2 className="text-2xl font-bold text-gray-800">
              {totalFilieres}
            </h2>
          </div>

        </div>



        <div className="bg-white p-5 rounded-xl border border-gray-200 flex items-center gap-4">

          <div className="bg-purple-100 p-3 rounded-xl">
            <UserRound size={25} className="text-purple-600" />
          </div>

          <div>
            <p className="text-gray-500 text-sm">
              Total stagiaires
            </p>

            <h2 className="text-2xl font-bold text-gray-800">
              {totalStagiaires}
            </h2>
          </div>

        </div>


        <div className="bg-white p-5 rounded-xl border border-gray-200 flex items-center gap-4">

          <div className="bg-purple-100 p-3 rounded-xl">
            <Layers size={25} className="text-purple-600" />
          </div>

          <div>
            <p className="text-gray-500 text-sm">
              Filière la plus demandée
            </p>

            <h2 className="text-xl font-bold text-gray-800">
              {filiereDemandee}
            </h2>
          </div>

        </div>

      </div>


      {/* phase 3 */}

      <div className="bg-white border border-gray-200 rounded-xl overflow-x-auto">

        <table className="w-full text-sm text-left">

          <thead className="bg-gray-50 text-gray-700">

            <tr>
              <th className="p-4">#</th>

              <th className="p-4">
                Nom de la filière
              </th>

              <th className="p-4">
                Nombre de stagiaires
              </th>

              <th className="p-4">
                Actions
              </th>
            </tr>

          </thead>


          <tbody>

            {filieres.map((e) => (

              <tr
                key={e.id}
                className="border-t border-gray-100 hover:bg-gray-50 duration-200"
              >

                <td className="p-4">
                  {e.id}
                </td>


                <td className="p-4 font-semibold text-gray-800">

                  <div className="flex items-center gap-3">

                    <div className="bg-blue-50 p-2 rounded-lg">
                      <BookOpen size={18} className="text-blue-600" />
                    </div>

                    {e.nom}

                  </div>

                </td>


                <td className="p-4">

                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                    {e.nombreStagiaires} stagiaires
                  </span>

                </td>


                <td className="p-4">

                  <div className="flex items-center gap-3">

                    <button
                      onClick={() => ouvrirModification(e)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <Pencil size={18} />
                    </button>

                    <button
                      onClick={() => supprimerFiliere(e.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 size={18} />
                    </button>

                  </div>

                </td>

              </tr>

            ))}


            {filieres.length === 0 && (

              <tr>
                <td
                  colSpan="4"
                  className="text-center p-8 text-gray-400"
                >
                  Aucune filière trouvée.
                </td>
              </tr>

            )}

          </tbody>

        </table>

      </div>


     <div>
        <p>the best stagiaire is <span className='text-red-700'>zakaria ostora</span>
        </p>
     </div>

    </div>
  );

}
