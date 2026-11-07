import React, { useState } from 'react'

import {
  Building2,
  Mail,
  Phone,
  MapPin,
  Save,
} from "lucide-react";


export default function Paramètres() {

  const [institut, setInstitut] = useState({
    nom: "ISTA - Institut des Technologies Avancées",
    email: "contact@ista.ma",
    telephone: "+212 5 22 11 22 33",
    adresse: "123 Avenue Hassan II, Rabat"
  });



  const modifierInstitut = (e) => {
    setInstitut({
      ...institut,
      [e.target.name]: e.target.value
    });
  };

  const enregistrer = () => {
    console.log("Informations enregistrées :", institut);
    alert("Modifications enregistrées avec succès !");
  };


  return (

    <div className="space-y-5">


      {/* phrase 1 */}

      <div>

        <h1 className="text-2xl font-bold text-gray-800">
          Paramètres
        </h1>

        <p className="text-gray-500 mt-2">
          Configurez les paramètres de votre compte et de l'institut.
        </p>

      </div>


      {/* phase2  */}

      <div className="bg-white border border-gray-200 rounded-xl p-2">

        <div className="flex items-center gap-3 mb-3">

          <Building2 size={25} className="text-blue-600" />

          <h2 className="text-xl font-bold text-gray-800">
            Profil de l'institut
          </h2>

        </div>


        <div className="grid grid-cols-3 gap-6">


          <div className="bg-blue-50 rounded-xl flex flex-col items-center justify-center p-6">

            <Building2 size={80} className="text-blue-600" />

            <h2 className="text-2xl font-bold text-blue-700 mt-3">
              ISTA
            </h2>

          </div>


          <div className="col-span-2 space-y-4">

            <div>

              <label className="text-sm text-gray-600">
                Nom de l'institut
              </label>

              <input
                type="text"
                name="nom"
                value={institut.nom}
                onChange={modifierInstitut}
                className="w-full border border-gray-200 rounded-lg p-3 mt-1 outline-none focus:border-blue-500"
              />

            </div>


            <div>

              <label className="text-sm text-gray-600">
                Email officiel
              </label>

              <div className="flex items-center gap-3 border border-gray-200 rounded-lg p-3 mt-1">

                <Mail size={20} className="text-blue-600" />

                <input
                  type="email"
                  name="email"
                  value={institut.email}
                  onChange={modifierInstitut}
                  className="w-full outline-none"
                />

              </div>

            </div>



            <div>

              <label className="text-sm text-gray-600">
                Téléphone
              </label>

              <div className="flex items-center gap-3 border border-gray-200 rounded-lg p-3 mt-1">

                <Phone size={20} className="text-blue-600" />

                <input
                  type="text"
                  name="telephone"
                  value={institut.telephone}
                  onChange={modifierInstitut}
                  className="w-full outline-none"
                />

              </div>

            </div>



            <div>

              <label className="text-sm text-gray-600">
                Adresse
              </label>

              <div className="flex items-center gap-3 border border-gray-200 rounded-lg p-3 mt-1">

                <MapPin size={20} className="text-blue-600" />

                <input
                  type="text"
                  name="adresse"
                  value={institut.adresse}
                  onChange={modifierInstitut}
                  className="w-full outline-none"
                />

              </div>

            </div>



            <div className="flex justify-end">

              <button
                onClick={enregistrer}
                className="flex items-center gap-2 bg-blue-600 text-white px-5 py-3 
                rounded-lg hover:bg-blue-700 duration-300"
              >

                <Save size={18} />

                Enregistrer

              </button>

            </div>

          </div>

        </div>

      </div>
      


    </div>

  );

}
