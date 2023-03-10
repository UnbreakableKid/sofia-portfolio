import type { ImageMetadata } from "astro/dist/assets/types";
import { useTranslation } from "react-i18next";
import { TabsList, TabsTrigger, Tabs, TabsContent } from "./ui/Tabs";

type WorkTabProps = {
  categories: category[];
};

type category = {
  key: string;
  value: string;
  elements: element[];
};

type element = {
  img: ImageMetadata;
  url: string;
};

export default function WorkTab({ categories }: WorkTabProps) {
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
                    key={element.url}
                    src={element.img.src}
                    alt=""
                    className="aspect-square h-72 object-contain"
                    onClick={() => {
                      window.open(element.url, "_self");
                    }}
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
