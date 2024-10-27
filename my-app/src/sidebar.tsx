// src/components/Sidebar.tsx
import { Sidebar, SidebarContent } from "@shadcn/ui";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <h2 className="text-lg font-bold">My Sidebar</h2>
        <ul>
          <li><a href="#">Link 1</a></li>
          <li><a href="#">Link 2</a></li>
          <li><a href="#">Link 3</a></li>
        </ul>
      </SidebarContent>
    </Sidebar>
  );
}
