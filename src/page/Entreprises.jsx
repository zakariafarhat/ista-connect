
import React, { useState } from 'react'

import {
  Plus,
  Search,
  
  Pencil,
  Trash2,
  Building2,
  Handshake,
  BriefcaseBusiness
} from "lucide-react";


export default function Entreprises() {

  const [entreprises, setEntreprises] = useState([
    {
      id: 1,
      nom: "IBM Maroc",
      secteur: "Informatique",
      email: "contact@ibm.ma",
      telephone: "+212 5 22 11 22 33",
      statut: "Partenaire",
      stages: 15
    },
    {
      id: 2,
      nom: "Renault Maroc",
      secteur: "Automobile",
      email: "info@renault.ma",
      telephone: "+212 5 22 44 55 66",
      statut: "Inactif",
      stages: 12
    },
    {
      id: 3,
      nom: "OCP Group",
      secteur: "Industrie",
      email: "contact@ocp.ma",
      telephone: "+212 5 23 99 00 11",
      statut: "Partenaire",
      stages: 10
    },
    {
      id: 4,
      nom: "Inwi",
      secteur: "Télécommunications",
      email: "partenariat@inwi.ma",
      telephone: "+212 5 22 77 88 99",
      statut: "Partenaire",
      stages: 11
    }
  ]);


  const [recherche, setRecherche] = useState("");
  const [secteur, setSecteur] = useState("Tous les secteurs");
  const [statut, setStatut] = useState("Tous les statuts");



  const entreprisesFiltrees = entreprises.filter((e) => {
    return (
      (e.nom.toLowerCase().includes(recherche.toLowerCase()) ||
       e.email.toLowerCase().includes(recherche.toLowerCase())) &&

      (secteur === "Tous les secteurs" || e.secteur === secteur) &&

      (statut === "Tous les statuts" || e.statut === statut)
    );
  });



  const supprimerEntreprise = (id) => {
    setEntreprises(entreprises.filter((e) => e.id !== id));
  };


  return (

    <div className="space-y-5">


      {/* phase 1*/}

      <div className="flex justify-between items-center">

        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Gestion des entreprises
          </h1>

          <p className="text-gray-500 mt-2">
            Consultez, ajoutez et gérez les entreprises partenaires.
          </p>
        </div>

        <button className="flex items-center gap-2 bg-blue-600 rounded-lg text-white px-5
         py-3 hover:bg-blue-700 duration-300">
          <Plus size={20} />
          Ajouter une entreprise
        </button>

      </div>


      {/* phase 2*/}

      <div className="grid grid-cols-3 gap-5">


        <div className="bg-white p-5 rounded-xl border border-gray-200 flex items-center gap-4">

          <div className="bg-blue-100 p-3 rounded-xl">
            <Building2 size={25} className="text-blue-600" />
          </div>

          <div>
            <p className="text-gray-500 text-sm">
              Total des entreprises
            </p>

            <h2 className="text-2xl font-bold text-gray-800">
              56
            </h2>
          </div>

        </div>


        <div className="bg-white p-5 rounded-xl border border-gray-200 flex items-center gap-4">

          <div className="bg-cyan-100 p-3 rounded-xl">
            <Handshake size={25} className="text-cyan-500" />
          </div>

          <div>
            <p className="text-gray-500 text-sm">
              Entreprises actives
            </p>

            <h2 className="text-2xl font-bold text-gray-800">
              56
            </h2>
          </div>

        </div>


        <div className="bg-white p-5 rounded-xl border border-gray-200 flex items-center gap-4">

          <div className="bg-orange-100 p-3 rounded-xl">
            <BriefcaseBusiness size={25} className="text-orange-500" />
          </div>

          <div>
            <p className="text-gray-500 text-sm">
              Stages en cours
            </p>

            <h2 className="text-2xl font-bold text-gray-800">
              48
            </h2>
          </div>

        </div>

      </div>


      {/* phase 3*/}

      <div className="grid grid-cols-3 gap-5 bg-white p-4 rounded-xl border border-gray-200">


        <div className="flex items-center gap-2 border border-gray-200 rounded-lg p-3">

          <Search size={20} className="text-gray-400" />

          <input
            value={recherche}
            onChange={(e) => setRecherche(e.target.value)}
            className="w-full outline-none text-sm"
            type="text"
            placeholder="Rechercher par nom, email..."
          />

        </div>


        <div>

          <label className="text-sm text-gray-600">
            Secteur
          </label>

          <select
            value={secteur}
            onChange={(e) => setSecteur(e.target.value)}
            className="w-full border border-gray-200 rounded-lg p-3 mt-1"
          >

            <option>Tous les secteurs</option>
            <option>Informatique</option>
            <option>Automobile</option>
            <option>Industrie</option>
            <option>Télécommunications</option>

          </select>

        </div>


        <div>

          <label className="text-sm text-gray-600">
            Statut
          </label>

          <select
            value={statut}
            onChange={(e) => setStatut(e.target.value)}
            className="w-full border border-gray-200 rounded-lg p-3 mt-1">

            <option>Tous les statuts</option>
            <option>Partenaire</option>
            <option>Inactif</option>

          </select>

        </div>

      </div>


      <div className="bg-white border border-gray-200 rounded-xl overflow-x-auto">

        <table className="w-full text-sm text-left">



          <thead className="bg-gray-50 text-gray-700">

            <tr>

              

              <th className="p-4">
                Nom de l'entreprise
              </th>

              <th className="p-4">
                Secteur d'activité
              </th>

              <th className="p-4">
                Email
              </th>

              <th className="p-4">
                Téléphone
              </th>

              <th className="p-4">
                Statut
              </th>

              <th className="p-4">
                Actions
              </th>

            </tr>

          </thead>



          <tbody>

            {entreprisesFiltrees.map((e) => (

              <tr
                key={e.id}
                className="border-t border-gray-100 hover:bg-gray-50 duration-200"
              >

                


                <td className="p-4 font-semibold text-gray-800">

                  <div className="flex items-center gap-2">

                    <div className="bg-blue-50 p-2 rounded-lg">
                      <Building2 size={18} className="text-blue-600" />
                    </div>

                    {e.nom}

                  </div>

                </td>



                <td className="p-4 text-gray-600">
                  {e.secteur}
                </td>



                <td className="p-4 text-gray-600">
                  {e.email}
                </td>



                <td className="p-4 text-gray-600">
                  {e.telephone}
                </td>



                <td className="p-4">

                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    e.statut === "Partenaire" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                  }`}>

                    {e.statut}

                  </span>

                </td>


                <td className="p-4">

                  <div className="flex items-center gap-3">

                    

                    <button className="text-blue-600 hover:text-blue-800">
                      <Pencil size={18} />
                    </button>

                    <button
                      onClick={() => supprimerEntreprise(e.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 size={18} />
                    </button>

                  </div>

                </td>

              </tr>

            ))}



            {entreprisesFiltrees.length === 0 && (

              <tr>
                <td colSpan="7" className="text-center p-8 text-gray-400">
                  Aucune entreprise trouvée.
                </td>
              </tr>

            )}

          </tbody>

        </table>

      </div>


     


    </div>

  );

}
