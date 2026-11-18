import React, { useState } from "react";

import {
  Plus,
  Search,
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

const[recherche,setRecherche]=useState("");
const[filiere,setFiliere]=useState("Toutes les filières")
const[annee,setAnnee]=useState("Toutes les années")
const[statut,setStatut]=useState("Tous les statuts")
const [filiereForm, setFiliereForm] = useState("Développement");
const [anneeForm, setAnneeForm] = useState("1ère année");
const [statutForm, setStatutForm] = useState("Actif");
const [nom, setNom] = useState("");
const [code, setCode] = useState("");
const [email, setEmail] = useState("");


const [vue, setVue] = useState("liste");
 const [idModification, setIdModification] = useState(null);
 const [prochainId, setProchainId] = useState(5);

function ouvrirAjout() {
  setNom("");
  setCode("");
  setEmail("");
  setFiliereForm("Développement");
  setAnneeForm("1ère année");
  setStatutForm("Actif");
  setIdModification(null);
  setVue("formulaire");
}

function ouvrirModification(e) {
  setNom(e.nom);
  setCode(e.code);
  setEmail(e.email);
  setFiliereForm(e.filiere);
  setAnneeForm(e.annee);
  setStatutForm(e.statut);
  setIdModification(e.id);
  setVue("formulaire");
}

  function ajouter() {

    setStagiaires([
      ...stagiaires,
      {
        id: prochainId,
        nom: nom,
        code:code,
        filiere: filiereForm,
        annee: anneeForm,
        statut: statutForm,
        email: email,
      }
    ]);

    setProchainId(prochainId + 1);
  }




 function modifier() {

    setStagiaires(
      stagiaires.map(e => {

        if (e.id === idModification) {
          return {
            ...e,
        nom: nom,
        code: code,
        filiere: filiereForm,
        annee: anneeForm,
        email: email,
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
    setFiliere("Toutes les filières");
    setAnnee("Toutes les années")
    setStatut("Tous les statuts");
    setVue("liste");
  }

 const StagiairesFiltres = stagiaires.filter((e) => {
  return (
    (
      e.nom.toLowerCase().includes(recherche.toLowerCase()) ||
      e.email.toLowerCase().includes(recherche.toLowerCase()) ||
      e.code.toLowerCase().includes(recherche.toLowerCase())
    ) &&
    (filiere === "Toutes les filières" || e.filiere === filiere) &&
    (annee === "Toutes les années" || e.annee === annee) &&
    (statut === "Tous les statuts" || e.statut === statut)
  );
});
 if (vue === "formulaire") {

    let titre = "Ajouter un stagiaire";

    if (idModification !== null) {
      titre = "Modifier un stagiaire";
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
              Code stagiaire

              <input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="STG004"
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
              Filière

              <select
                value={filiereForm}
                onChange={(e) => setFiliereForm(e.target.value)}
                className="block w-full border border-gray-200 rounded-lg p-3 mt-1"
              >
                <option>Développement</option>
                <option>Gestion</option>
                <option>Mécanique</option>
              </select>
            </label>

            <label className="block text-gray-600">
              Année

              <select
                value={anneeForm}
                onChange={(e) => setAnneeForm(e.target.value)}
                className="block w-full border border-gray-200 rounded-lg p-3 mt-1"
              >
                <option>1ère année</option>
                <option>2ème année</option>
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
                <option>En attente</option>
                <option>Désactivé</option>
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

        <button
         type="button"
         onClick={ouvrirAjout}

        className="flex items-center gap-2 bg-blue-600 text-white
        px-5 py-3 rounded-lg hover:bg-blue-700 duration-500"

        >
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
            value={recherche}
            onChange={(e) => setRecherche(e.target.value)}
            placeholder="Rechercher par nom, email..."
            className="w-full  py-3 text-sm"
          />
        </div>

        <div >
          <label className="text-sm">Filière</label>
          <select
            value={filiere}
            onChange={(e) => setFiliere(e.target.value)}
            className="w-full border border-gray-200 rounded-lg p-3"
          >
            <option>Toutes les filières</option>
            <option>Développement</option>
            <option>Gestion</option>
            <option>Mécanique</option>
          </select>
        </div>

        <div>
          <label className="text-sm">Année</label>
          <select
            value={annee}
            onChange={(e) => setAnnee(e.target.value)}
            className="w-full border border-gray-200 rounded-lg p-3"
          >
            <option>Toutes les années</option>
            <option>1ère année</option>
            <option>2ème année</option>
          </select>
        </div>

        <div>
          <label className="text-sm">Statut</label>
          <select
            value={statut}
            onChange={(e) => setStatut(e.target.value)}
            className="w-full border border-gray-200 rounded-lg p-3"
          >
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
      {StagiairesFiltres.map((e)=> {
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


                <button onClick={() => ouvrirModification(e)} className="text-blue-600 ">
                  <Pencil size={18} />
                </button>

                <button  onClick={() => supprimerStagiaires(e.id)}
                 className="text-red-500 ">
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
