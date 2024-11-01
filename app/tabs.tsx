"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useSocket } from "@/contexts/socketContext";
import { useRouter } from "next/navigation";

export default function JoinCreateTab() {
  const [name, setName] = useState("host");
  const socket = useSocket();
  const router = useRouter();

  function createGame() {
    socket?.updateQueryParams({ type: "host", name });
    socket?.connect();
    router.push("/create");
    if (socket?.isConnected) {
      socket?.sendJsonMessage({ type: "create" });
    }
  }

  function joinGame() {
    socket?.updateQueryParams({ type: "player", name });
    socket?.connect();
    router.push("/join");
  }

  return (
    <Tabs defaultValue="player" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="player">Join</TabsTrigger>
        <TabsTrigger value="host">Create</TabsTrigger>
      </TabsList>
      <TabsContent value="player">
        <Card>
          <CardHeader>
            <CardTitle>Join Game</CardTitle>
            <CardDescription>Join the game.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                onChange={(e) => setName(() => e.target.value)}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={joinGame}>Join</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="host">
        <Card>
          <CardHeader>
            <CardTitle>Create Game</CardTitle>
            <CardDescription>Create a game as the host.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                onChange={(e) => setName(() => e.target.value)}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={createGame}>Create</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
