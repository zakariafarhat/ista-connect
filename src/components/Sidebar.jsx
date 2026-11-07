import React, { useState } from "react";

import {
  GraduationCap,
  LayoutDashboard,
  Users,
  UserRound,
  BookOpen,
  Building2,
  ChartNoAxesCombined,
  Settings
} from "lucide-react";

function Sidebar({ page, setPage }) {

  const [menu, setMenu] = useState([
    { id: 1, nom: "Tableau de bord", icon: LayoutDashboard },
    { id: 2, nom: "Stagiaires", icon: Users },
    { id: 3, nom: "Formateurs", icon: UserRound },
    { id: 4, nom: "Filières", icon: BookOpen },
    { id: 5, nom: "Entreprises", icon: Building2 },
    { id: 6, nom: "Rapports", icon: ChartNoAxesCombined },
    { id: 7, nom: "Paramètres", icon: Settings }
  ]);

  // Fonction qui change la page sélectionnée
  function changerPage(nom) {
    setPage(nom);
  }
  function couleurMenu(nom) {
  if (page === nom) {
    return "bg-blue-50 text-blue-600 font-semibold";
  } else {
    return "text-gray-600 hover:bg-gray-100";
  }
} 

  return (
   <>
    <div className="flex flex-col" >
      {/* Logo */}
      <div className="flex items-center gap-3 p-5">
        <GraduationCap size={32} className="text-blue-600" />

        <div>
          <h1 className="font-bold text-blue-700">
            ISTA Connect
          </h1>
          <p className="text-xs text-gray-500">
            Gestion des stagiaires
          </p>
        </div>
      </div>

      {/* Menu */}
      <nav className="px-3 mt-5 space-y-3">

        {menu.map((item) => {

          const Icon = item.icon;

          return (
            <button
              key={item.id}
              onClick={() => changerPage(item.nom)}
              className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg text-sm
                ${couleurMenu(item.nom)}
              `}
            >
              <Icon size={20} />
              <span>{item.nom}</span>
            </button>
          );

        })}

      </nav>

      {/* Footer */}
      <div className="mt-auto p-4">
        <div className="bg-blue-50 rounded-xl p-3">
          <h3 className="text-blue-700 font-bold text-sm">
            ISTA Connect
          </h3>

          <p className="text-xs text-gray-500 mt-2">
            Une meilleure gestion pour un meilleur avenir
          </p>
        </div>

        <p className="text-xs text-gray-400 mt-3">
          Version dial zakaria farhat 
        </p>
      </div>
    </div>
    </>
  );
}

export default Sidebar;
