import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import JoinGame from "../joinGame"
import CreateGame from "../createGame"

export default function TabsDemo() {
  return (
    <Tabs defaultValue="join" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="join">JOIN</TabsTrigger>
        <TabsTrigger value="create">CREATE</TabsTrigger>
      </TabsList>
      <TabsContent value="join"><JoinGame /></TabsContent>
      <TabsContent value="create"><CreateGame /></TabsContent>
    </Tabs>
  )
}
