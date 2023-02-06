import { TabsList, TabsTrigger, Tabs, TabsContent } from "./ui/Tabs";

export default function WorkTab() {
  return (
    <Tabs defaultValue="todos">
      <div className="flex justify-center">
        <TabsList className="flex-wrap gap-4 bg-none">
          <TabsTrigger value="todos" className="">
            Todos
          </TabsTrigger>
          <TabsTrigger value="webdesign" className="">
            Webdesign
          </TabsTrigger>
          <TabsTrigger value="ilustração" className="">
            Ilustração
          </TabsTrigger>
          <TabsTrigger value="pictorgramas" className="">
            Pictogramas
          </TabsTrigger>
          <TabsTrigger value="branding" className="">
            Branding
          </TabsTrigger>
          <TabsTrigger value="packaging" className="">
            Packaging
          </TabsTrigger>
          <TabsTrigger value="infografia" className="">
            Infografia
          </TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="todos" className="pt-10">
        <div className="grid grid-cols-4 grid-rows-4 place-items-center gap-5">
          <h1>
            <a href="/trabalhos/hi">h1</a>
          </h1>
          <h1>h2</h1>
          <h1>h3</h1>
          <h1>h4</h1>
          <h1>h5</h1>
          <h1>h6</h1>
        </div>
      </TabsContent>
      <TabsContent value="webdesign">Partial</TabsContent>
      <TabsContent value="ilustração">Partial</TabsContent>
      <TabsContent value="pictorgramas">Partial</TabsContent>
      <TabsContent value="branding">Partial</TabsContent>
      <TabsContent value="packaging">Partial</TabsContent>
      <TabsContent value="infografia">Partial</TabsContent>
    </Tabs>
  );
}
