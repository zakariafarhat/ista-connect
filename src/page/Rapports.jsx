import React from 'react'

import {
  ChartNoAxesColumn,
  ChartPie,
  Monitor,
  ChartNoAxesColumnIncreasing,
  Settings,
  UserRound,
  Building2,
  BriefcaseBusiness,
  Layers
} from "lucide-react";


export default function Rapports() {

  const filieres = [
    {
      id: 1,
      nom: "Développement",
      nombre: 60,
      icon: Monitor
    },
    {
      id: 2,
      nom: "Gestion",
      nombre: 120,
      icon: ChartNoAxesColumnIncreasing
    },
    {
      id: 3,
      nom: "Mécanique",
      nombre: 50,
      icon: Settings
    }
  ];



  const totalStagiaires = 230;

  const totalFilieres = filieres.reduce(
    (total, e) => total + e.nombre, 0
  );


  return (

    <div className="space-y-5">

      {/* phase 1 */}

      <div className="flex justify-between items-center">

        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Rapports
          </h1>

          <p className="text-gray-500 mt-1">
            Consultez les statistiques et indicateurs de votre institut.
          </p>
        </div>

        <select className="border border-gray-200 rounded-lg p-3 bg-white text-sm">
          <option>Année : 2025 - 2026</option>
          <option>Année : 2024 - 2025</option>
          <option>Année : 2023 - 2024</option>
        </select>

      </div>


      {/* phase 2 */}

      <div className="grid grid-cols-2 gap-5">


        <div className="bg-white p-4 rounded-xl border border-gray-200">

          <div className="flex items-center gap-3 mb-5">

            <ChartNoAxesColumn
              size={25}
              className="text-blue-600"
            />

            <h2 className="font-bold text-gray-800">
              Répartition des stagiaires par filière
            </h2>

          </div>


          <table className="w-full text-sm text-left">

            <thead className="bg-blue-50">

              <tr>
                <th className="p-3">Filière</th>
                <th className="p-3">Nombre de stagiaires</th>
                <th className="p-3">Pourcentage</th>
              </tr>

            </thead>


            <tbody>

              {filieres.map((e) => {

                const pourcentage = (e.nombre / totalStagiaires) * 100;

                const Icon = e.icon;

                return (

                  <tr
                    key={e.id}
                    className="border-t border-gray-100"
                  >

                    <td className="p-3">

                      <div className="flex items-center gap-3">

                        <div className="bg-blue-50 p-2 rounded-lg">
                          <Icon size={19} className="text-blue-600" />
                        </div>

                        <span className="font-medium">
                         {e.nom}
                        </span>

                      </div>

                    </td>


                    <td className="p-3 font-semibold text-center">
                      {e.nombre}
                    </td>


                    <td className="p-3">

                      <div className="flex items-center gap-3">

                        <span className="font-semibold min-w-12">
                          {pourcentage.toFixed(1)} %
                        </span>

                        

                      </div>

                    </td>

                  </tr>

                );

              })}



              <tr className="bg-blue-100 font-bold">

                <td className="p-3">
                  Total
                </td>

                <td className="p-3 text-center">
                  {totalStagiaires}
                </td>

                <td className="p-3">
                  100 %
                </td>

              </tr>

            </tbody>

          </table>

        </div>




        <div className="bg-white p-4 rounded-xl border border-gray-200">

          <div className="flex items-center gap-3 mb-5">

            <ChartPie
              size={25}
              className="text-blue-600"
            />

            <h2 className="font-bold text-gray-800">
              Synthèse globale
            </h2>

          </div>


          <div className="space-y-1">



            <div className="flex items-center justify-between p-3 border-b border-gray-100">

              <div className="flex items-center gap-3">

                <div className="bg-blue-50 p-2 rounded-full">
                  <UserRound size={20} className="text-blue-600" />
                </div>

                <span>Total stagiaires</span>

              </div>

              <span className="font-bold text-xl">248</span>

            </div>



            <div className="flex items-center justify-between p-3 border-b border-gray-100">

              <div className="flex items-center gap-3">

                <div className="bg-purple-50 p-2 rounded-full">
                  <UserRound size={20} className="text-purple-600" />
                </div>

                <span>Formateurs</span>

              </div>

              <span className="font-bold text-xl">18</span>

            </div>



            <div className="flex items-center justify-between p-3 border-b border-gray-100">

              <div className="flex items-center gap-3">

                <div className="bg-orange-50 p-2 rounded-full">
                  <Building2 size={20} className="text-orange-500" />
                </div>

                <span>Entreprises partenaires</span>

              </div>

              <span className="font-bold text-xl">56</span>

            </div>



            <div className="flex items-center justify-between p-3 border-b border-gray-100">

              <div className="flex items-center gap-3">

                <div className="bg-green-50 p-2 rounded-full">
                  <BriefcaseBusiness size={20} className="text-green-600" />
                </div>

                <span>Stages en cours</span>

              </div>

              <span className="font-bold text-xl">48</span>

            </div>



            <div className="flex items-center justify-between p-3">

              <div className="flex items-center gap-3">

                <div className="bg-blue-50 p-2 rounded-full">
                  <Layers size={20} className="text-blue-600" />
                </div>

                <span>Total des stages</span>

              </div>

              <span className="font-bold text-xl">87</span>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}
