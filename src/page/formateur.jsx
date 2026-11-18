import React, { useState } from 'react';

import {
  Plus,
  Search,
  Pencil,
  Trash2
} from "lucide-react";

function Formateur() {

  const [formateur, setFormateur] = useState([
    {
      id: 1,
      nom: "Yassine El Idrissi",
      specialite: "Développement",
      email: "yassine@ista.ma",
      statut: "Actif"
    },
    {
      id: 2,
      nom: "Fatima Zahra Kabaj",
      specialite: "Réseaux et Sécurité",
      email: "fatima@ista.ma",
      statut: "Actif"
    },
    {
      id: 3,
      nom: "Omar El Amrani",
      specialite: "Infographie",
      email: "omar@ista.ma",
      statut: "En attente"
    },
    {
      id: 4,
      nom: "Imane Bouzid",
      specialite: "Maintenance",
      email: "imane@ista.ma",
      statut: "Inactif"
    }
  ]);

  const [recherche, setRecherche] = useState("");
  const [specialite, setSpecialite] = useState("Toutes les specialites");
  const [statut, setStatut] = useState("Tous les statuts");
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [specialiteForm, setSpecialiteForm] = useState("Développement");
  const [statutForm, setStatutForm] = useState("Actif");

  const [vue, setVue] = useState("liste");
  const [idModification, setIdModification] = useState(null);
  const [prochainId, setProchainId] = useState(5);

  function ouvrirAjout() {
    setNom("");
    setEmail("");
    setSpecialiteForm("Développement");
    setStatutForm("Actif");
    setIdModification(null);
    setVue("formulaire");
  }

  function ouvrirModification(e) {
    setNom(e.nom);
    setEmail(e.email);
    setSpecialiteForm(e.specialite);
    setStatutForm(e.statut);
    setIdModification(e.id);
    setVue("formulaire");
  }


  function ajouter() {

    setFormateur([
      ...formateur,
      {
        id: prochainId,
        nom: nom,
        email: email,
        specialite: specialiteForm,
        statut: statutForm
      }
    ]);

    setProchainId(prochainId + 1);
  }

  function modifier() {

    setFormateur(
      formateur.map(e => {

        if (e.id === idModification) {
          return {
            ...e,
            nom: nom,
            email: email,
            specialite: specialiteForm,
            statut: statutForm
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

    setRecherche("");
    setSpecialite("Toutes les specialites");
    setStatut("Tous les statuts");
    setVue("liste");
  }

  const formateursFiltres = formateur.filter((e) => {
    return (
      e.nom.toLowerCase().includes(recherche.toLowerCase()) &&
      (specialite === "Toutes les specialites" || e.specialite === specialite) &&
      (statut === "Tous les statuts" || e.statut === statut)
    );
  });

  const supprimerFormateur = (id) => {
    setFormateur(formateur.filter((e) => e.id !== id));
  };


  if (vue === "formulaire") {

    let titre = "Ajouter un formateur";

    if (idModification !== null) {
      titre = "Modifier un formateur";
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
              Nom complet

              <input
                type="text"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                required
                className="block w-full border border-gray-200 rounded-lg p-3 mt-1"
              />
            </label>

            <label className="block text-gray-600">
              Email

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="block w-full border border-gray-200 rounded-lg p-3 mt-1"
              />
            </label>

            <label className="block text-gray-600">
              Spécialité

              <select
                value={specialiteForm}
                onChange={(e) => setSpecialiteForm(e.target.value)}
                className="block w-full border border-gray-200 rounded-lg p-3 mt-1"
              >
                <option>Développement</option>
                <option>Réseaux et Sécurité</option>
                <option>Infographie</option>
                <option>Maintenance</option>
              </select>
            </label>

            <label className="block text-gray-600">
              Statut

              <select
                value={statutForm}
                onChange={(e) => setStatutForm(e.target.value)}
                className="block w-full border border-gray-200 rounded-lg p-3 mt-1"
              >
                <option>Actif</option>
                <option>Inactif</option>
                <option>En attente</option>
              </select>
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

      {/* heade */}

      <div className="flex flex-wrap gap-4 justify-between items-center">

        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Gestion des formateurs
          </h1>

          <p className="text-gray-500 mt-2">
            Consultez, recherchez et gérez tous les formateurs de l'institut.
          </p>
        </div>

        <button
          type="button"
          onClick={ouvrirAjout}
          className="flex items-center gap-2 bg-blue-600 rounded-lg text-white px-5 py-3 hover:bg-blue-700 duration-300"
        >
          <Plus size={20} />
          Ajouter un formateur
        </button>

      </div>

      {/* 2 */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

        <div className="bg-white p-5 rounded-xl border border-gray-200">
          <p className="text-gray-500">
            Total formateurs
          </p>

          <h2 className="text-2xl font-bold">
            {formateur.length}
          </h2>
        </div>

        <div className="bg-white p-5 rounded-xl border border-gray-200">
          <p className="text-gray-500">
            Formateurs actifs
          </p>

          <h2 className="text-2xl font-bold">
            {formateur.filter(e => e.statut === "Actif").length}
          </h2>
        </div>

        <div className="bg-white p-5 rounded-xl border border-gray-200">
          <p className="text-gray-500">
            Formateurs inactifs
          </p>

          <h2 className="text-2xl font-bold">
            {formateur.filter(e => e.statut === "Inactif").length}
          </h2>
        </div>

      </div>
    {/*3 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 bg-white p-4 rounded-xl border border-gray-200">

        <div className="flex items-center gap-2 border border-gray-200 rounded-lg p-3">

          <Search size={20} className="text-gray-400" />

          <input
            value={recherche}
            onChange={(e) => setRecherche(e.target.value)}
            className="w-full outline-none text-sm"
            type="text"
            placeholder="Rechercher un formateur..."
          />

        </div>

        <div>
          <label className="text-sm text-gray-600">
            Spécialité
          </label>

          <select
            value={specialite}
            onChange={(e) => setSpecialite(e.target.value)}
            className="w-full border border-gray-200 rounded-lg p-3 mt-1"
          >
            <option>Toutes les specialites</option>
            <option>Développement</option>
            <option>Réseaux et Sécurité</option>
            <option>Infographie</option>
            <option>Maintenance</option>
          </select>
        </div>

        <div>
          <label className="text-sm text-gray-600">
            Statut
          </label>

          <select
            value={statut}
            onChange={(e) => setStatut(e.target.value)}
            className="w-full border border-gray-200 rounded-lg p-3 mt-1"
          >
            <option>Tous les statuts</option>
            <option>Actif</option>
            <option>Inactif</option>
            <option>En attente</option>
          </select>
        </div>

      </div>

      {/* tableau */}

      <div className="bg-white border border-gray-200 rounded-xl overflow-x-auto">

        <table className="w-full text-sm text-left">

          <thead className="bg-gray-50 text-gray-700">
            <tr>
              <th className="p-4">#</th>
              <th className="p-4">Nom complet</th>
              <th className="p-4">Spécialité</th>
              <th className="p-4">Email</th>
              <th className="p-4">Statut</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>

          <tbody>

            {formateursFiltres.map((e) => (

              <tr
                key={e.id}
                className="border-t border-gray-100 hover:bg-gray-50"
              >

                <td className="p-4">
                  {e.id}
                </td>

                <td className="p-4 font-medium text-gray-800">
                  {e.nom}
                </td>

                <td className="p-4">
                  {e.specialite}
                </td>

                <td className="p-4 text-gray-500">
                  {e.email}
                </td>

                <td className="p-4">
                  <span className="px-3 py-1 rounded-full text-xs font-medium">
                    {e.statut}
                  </span>
                </td>

                <td className="p-4">

                  <div className="flex items-center gap-3">

                    <button
                      type="button"
                      onClick={() => ouvrirModification(e)}
                     
                      className="text-blue-400 hover:text-blue-500"
                    >
                      <Pencil size={18} />
                    </button>

                    <button
                      type="button"
                      onClick={() => supprimerFormateur(e.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <Trash2 size={18} />
                    </button>

                  </div>

                </td>

              </tr>

            ))}
          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Formateur;
