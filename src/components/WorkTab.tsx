import { useTranslation } from "react-i18next";
import { TabsList, TabsTrigger, Tabs, TabsContent } from "./ui/Tabs";

export default function WorkTab() {
  const { t } = useTranslation();
  const categories = [
    { key: "all", value: t("works.all") },
    { key: "webdesign", value: t("works.webdesign") },
    { key: "illustration", value: t("works.illustration") },
    { key: "pictorgrams", value: t("works.pictograms") },
    { key: "branding", value: t("works.branding") },
    { key: "packaging", value: t("works.packaging") },
    { key: "infography", value: t("works.infography") },
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
      <TabsContent value="all">
        <div className="flex justify-center ">
          <div className="gap grid w-8/12 place-items-center gap-y-6 md:grid-cols-3">
            <div>
              <img
                src={"./public/36daysthumb.jpg"}
                alt=""
                className="aspect-square h-72 object-contain"
              />
            </div>
            <div>
              <img
                src={"./public/36daysthumb.jpg"}
                alt=""
                className="aspect-square h-72 object-contain"
              />
            </div>
            <div>
              <img
                src={"./public/36daysthumb.jpg"}
                alt=""
                className="aspect-square h-72 object-contain"
              />
            </div>
            <div>
              <img
                src={"./public/36daysthumb.jpg"}
                alt=""
                className="aspect-square h-72 object-contain"
              />
            </div>
            <div>
              <img
                src={"./public/36daysthumb.jpg"}
                alt=""
                className="aspect-square h-72 object-contain"
              />
            </div>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="webdesign">Partial</TabsContent>
      <TabsContent value="illustration">Partial</TabsContent>
      <TabsContent value="pictorgrams">Partial</TabsContent>
      <TabsContent value="branding">Partial</TabsContent>
      <TabsContent value="packaging">Partial</TabsContent>
      <TabsContent value="infography">Partial</TabsContent>
    </Tabs>
  );
}
