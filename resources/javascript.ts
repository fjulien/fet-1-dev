import type { DetailsType } from "../types";

export const javascript: DetailsType = {
    title: "Javascript (navigateur)",
    contents: [
        "Ecmascript",
        "DOM",
        "AJAX",
        "XHR",
        {
            title: "Base du language",
            contents: [
                "hoisting",
                "scope",
                {title: "var / let / const", url:"/posts/les-variables", isNew:true},
                "Math",
                "switch",
                "conditions",
                "ternaire",
                "operateur logique",
                "use strict",
                {
                    title: "boucle",
                    contents: ["for", "for in", "for of", "while", "do while"],
                },
                {
                    title: "variable",
                    contents: [
                        {
                            title: "primitive",
                            contents: [
                                "boolean",
                                "number",
                                "String",
                                "undefined",
                                "Synbol",
                                "NaN",
                                "null",
                                "Circular",
                            ],
                        },
                        {
                            title: "Complexe",
                            contents: [
                                "JSON",
                                "Map",
                                "Set",
                                "Proxi",
                                {
                                    title: "Array",
                                    contents: [
                                        "foreach",
                                        "map",
                                        "filter",
                                        "reduce",
                                        "autres",
                                    ],
                                },
                                { title: "Object", contents: [] },
                            ],
                        },
                    ],
                },

                "Destructuration",
                "Spread opératuer",
                "closue",
                "Curring",
                {
                    title: "Asyncrone",
                    contents: ["callback", "then", "async / await"],
                },
                {
                    title: "Fonction",
                    contents: [
                        "Arrow",
                        "Auto invoked",
                        "generator",
                        "r2cursiviter",
                    ],
                },
            ],
        },
    ],
};

const environemnt: DetailsType = {
    title: "Environement",
    contents: [
      "internet",
      "HTTP / HTTPS",
      {
        title: "Navigateur",
        contents: ["inspecteur", "devtools", "network"],
      },
      {
        title: "frontend",
        contents: [
          "composant",
          "SPA et MPA",
          "routage",
          "cookies",
          "localstorage",
  
          { title: "Architecture", contents: [] },
        ],
      },
      {
        title: "backend",
        contents: ["API client", "API Rest", "GraphQl", "Websocket"],
      },
      {
        title: "BDD",
        contents: ["relationnel", "non relationnel", "graphique"],
      },
    ],
  };
  const ide: DetailsType = {
    title: "IDE",
    contents: ["vsc", "intellj", "gitpod", "playcode"],
  };
  const html: DetailsType = {
    title: "HTML",
    contents: ["basic", "Accesibilité", "Sémantique"],
  };
  const css: DetailsType = {
    title: "CSS",
    contents: [
      "basic",
      "flexbox",
      "grid",
      "responsive",
      { title: "preprocessors", contents: ["SCSS"] },
      { title: "Architecture", contents: ["Atomic"] },
    ],
  };
  
  const dataStructure: DetailsType = { title: "Data structure", contents: [] };
  const bestPratice: DetailsType = {
    title: "bestPratice",
    contents: [
      "Complexité",
      "Convention de nommage",
      "Taille / découpage",
      "DRY",
      "KISS",
      "SOLID",
      "Puer fonction",
    ],
  };
  const toolsOfBuild: DetailsType = {
    title: "Build tools",
    contents: ["Webpack", "ViteJS", "Rollup"],
  };
  const Paradigms: DetailsType = {
    title: "Paradigms",
    contents: [
      { title: "POO", contents: ["Typescripte"] },
      "Programation fonctionnelle",
      "Reactive",
    ],
  };
  const tests: DetailsType = {
    title: "Tests",
    contents: ["TU", "TI", "e2e", "TDD"],
  };
  const algoExo: DetailsType = {
    title: "Algoritmie et pratique",
    contents: [
      {
        title: "Niveau 1",
        contents: [
          "fizz buzz",
          "Suite de finabochi",
          "Compararaion de tableau",
          "Clean duplication tableau ",
          "Création d'un compteur",
          "tri d'un tableau",
        ],
      },
      {
        title: "Niveau 2",
        contents: ["Refaire les méthodes map, filter et sort de Array"],
      },
    ],
  };
  const packageManagement: DetailsType = {
    title: "Gestion de dépendances",
    contents: ["NPM", "YARN", "PNPM"],
  };
  const versionning: DetailsType = {
    title: "Verssionage",
    contents: [{ title: "git", contents: ["github", "gitlab", "bitbucket"] }],
  };
  const jsFrameworkFront: DetailsType = {
    title: "Framework frontend",
    contents: [
      "next",
      "nuxt",
      "vue",
      "svelte",
      {
        title: "React",
        contents: ["composant", "routage", "Formualire", "hooks"],
      },
      {
        title: "Angular",
        contents: ["ReactiveForm", "routage", "rxjs", "composant"],
      },
    ],
  };
  const jsFrameworkBack: DetailsType = {
    title: "Framework backend",
    contents: ["express", "denoJs"],
  };
  const Patern: DetailsType = {
    title: "Design patern",
    contents: [
      { title: "State management", contents: ["Redux"] },
      "Singluton",
      { title: "Observable", contents: ["RXJS"] },
    ],
  };
  const Linux: DetailsType = {
    title: "Linux",
    contents: [{ title: "Terminal", contents: ["Commandes de bases"] }],
  };
  const architecture: DetailsType = {
    title: "Architecture",
    contents: ["3 tiers", "Hexagonal"],
  };
  const methodAgile: DetailsType = { title: "Agilité", contents: [] };

  const treeJavascript: DetailsType[] = [
    environemnt,
    ide,
    html,
    css,
    javascript,
    dataStructure,
    bestPratice,
    toolsOfBuild,
    Paradigms,
    tests,
    algoExo,
    packageManagement,
    versionning,
    jsFrameworkFront,
    jsFrameworkBack,
    Patern,
    Linux,
    architecture,
    methodAgile,
  ];

  export default treeJavascript;