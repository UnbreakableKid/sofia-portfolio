import { TabsList, TabsTrigger, Tabs, TabsContent } from "./ui/Tabs";

const WorkTab = () => {
  return (
    <Tabs defaultValue="full">
      <div className="flex  justify-center">
        <TabsList>
          <TabsTrigger value="full" className="">
            Full
          </TabsTrigger>
          <TabsTrigger value="partial" className="">
            Partial
          </TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="full" className="border-none dark:border-none">
        <div className="grid grid-cols-4 grid-rows-4 place-items-center gap-5">
          <h1>hi</h1>
          <h1>h2</h1>
          <h1>h3</h1>
          <h1>h4</h1>
          <h1>h5</h1>
          <h1>h6</h1>
        </div>
      </TabsContent>
      <TabsContent value="partial">Partial</TabsContent>
    </Tabs>
  );
};

export default WorkTab;
