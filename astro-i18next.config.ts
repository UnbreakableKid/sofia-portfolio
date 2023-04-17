import type { AstroI18nextConfig } from "astro-i18next";

const config: AstroI18nextConfig = {
  defaultLocale: "en",
  locales: ["en", "pt"],
  load: ["server", "client"],

  i18nextServerPlugins: {
    "{initReactI18next}": "react-i18next",
  },
  i18nextClientPlugins: {
    "{initReactI18next}": "react-i18next",
  },
  routes: {
    pt: {
      about: "sobre",
      contact: "contato",
      works: {
        index: "trabalhos",
        "5steps": "5passos",
        "36days": "36days",
        booky: "booky",
        caeiro: "caeiro",
        cicloexpresso: "cicloexpresso",
        daHorta: "daHorta",
        fraunhofer: "fraunhofer",
        memo: "memo",
        sinaletica: "sinaletica",
      },
    },
  },
};

export default config;
