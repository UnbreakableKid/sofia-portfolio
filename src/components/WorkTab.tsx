import type { ImageMetadata } from "astro/dist/assets/types";
import { useTranslation } from "react-i18next";
import LoadingImage from "./ui/LoadingImage";
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
            <TabsContent
              key={category.key}
              value={category.key}
              className="px-7"
            >
              <div
                className={`flex flex-grow flex-wrap justify-center gap-4 self-center`}
              >
                {category.elements?.map((element) => (
                  <img
                    key={element.url}
                    src={element.img.src}
                    className="aspect-square h-72  object-contain"
                    alt=""
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
