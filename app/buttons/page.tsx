import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="space-y-4 p-4 flex flex-col max-w-50">
      <Button>Default</Button>

      <Button variant={"primary"}>Primary</Button>
      <Button variant={"primaryOutline"}>Primary outline</Button>

      <Button variant={"secondary"}>secondary</Button>
      <Button variant={"secondaryOutline"}>secondary outline</Button>

      <Button variant={"danger"}>secondary</Button>
      <Button variant={"dangerOutline"}>secondary outline</Button>

      <Button variant={"super"}>super</Button>
      <Button variant={"superOutline"}>super outline</Button>

      <Button variant={"ghost"}>ghost</Button>

      <Button variant={"sidebar"}>sidebar</Button>
      <Button variant={"sidebarOutline"}>sidebar outline</Button>
    </div>
  );
}
