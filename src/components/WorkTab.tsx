import { useTranslation } from "react-i18next";
import { TabsList, TabsTrigger, Tabs, TabsContent } from "./ui/Tabs";

export default function WorkTab() {
  const { t, i18n } = useTranslation();

  const slug = i18n.language === "en" ? "./public" : "../public";
  const days = `${slug}/36days/Capa_36days.jpeg`; // ilustração
  const daHorta = `${slug}/daHorta/Capa_daHorta.png`; // branding e webdesign
  const cicloexpressoCover = `${slug}/cicloExpresso/cicloexpressoCover.png`; // ilustração e infografia
  const pictogramas = `${slug}/pictogramas/pictogramas.png`; // pictogramas

  const categories = [
    {
      key: "all",
      value: t("works.all"),
      elements: [days, daHorta, cicloexpressoCover],
    },
    { key: "webdesign", value: t("works.webdesign"), elements: [daHorta] },
    {
      key: "illustration",
      value: t("works.illustration"),
      elements: [days, cicloexpressoCover],
    },
    {
      key: "pictorgrams",
      value: t("works.pictograms"),
      elements: [pictogramas],
    },
    { key: "branding", value: t("works.branding"), elements: [daHorta] },
    { key: "packaging", value: t("works.packaging") },
    {
      key: "infography",
      value: t("works.infography"),
      elements: [cicloexpressoCover],
    },
  ];

  return (
    <Tabs defaultValue="all">
      <div className="flex justify-center">
        <TabsList className="flex-wrap gap-4 bg-none">
          {categories.map((category) => (
            <TabsTrigger key={category.key} value={category.key}>
              {category.value}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>
      <div className="flex justify-center">
        <div className="flex w-[80%]">
          {categories.map((category) => (
            <TabsContent key={category.key} value={category.key}>
              <div
                className={`flex flex-grow flex-wrap justify-center gap-4 self-center px-7 md:justify-start`}
              >
                {category.elements?.map((element) => (
                  <img
                    src={element}
                    alt=""
                    className="aspect-square h-72 object-contain"
                  />
                ))}
              </div>
            </TabsContent>
          ))}
        </div>
      </div>
    </Tabs>
  );
}
