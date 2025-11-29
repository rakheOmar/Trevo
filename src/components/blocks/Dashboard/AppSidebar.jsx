import {
  AiBrain01Icon,
  BookOpen01Icon,
  CommandIcon,
  ComputerProgramming01Icon,
  Layers01Icon,
  Layout01Icon,
  MapsIcon,
  PieChart09Icon,
  Settings02Icon,
  WaveSquareIcon,
} from "@hugeicons/core-free-icons";
import { Link } from "react-router-dom";
import { NavMain } from "@/components/blocks/Dashboard/NavMain";
import { NavProjects } from "@/components/blocks/Dashboard/NavProjects";
import { ThemedLogo, WhiteIcon } from "@/components/Logo";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// Data defined outside component prevents recreation on every render
const data = {
  // ... your data remains exactly the same
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: Layers01Icon,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: WaveSquareIcon,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: CommandIcon,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Playground",
      url: "#",
      icon: ComputerProgramming01Icon,
      isActive: true,
      items: [
        { title: "History", url: "#" },
        { title: "Starred", url: "#" },
        { title: "Settings", url: "#" },
      ],
    },
    {
      title: "Models",
      url: "#",
      icon: AiBrain01Icon,
      items: [
        { title: "Genesis", url: "#" },
        { title: "Explorer", url: "#" },
        { title: "Quantum", url: "#" },
      ],
    },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen01Icon,
      items: [
        { title: "Introduction", url: "#" },
        { title: "Get Started", url: "#" },
        { title: "Tutorials", url: "#" },
        { title: "Changelog", url: "#" },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings02Icon,
      items: [
        { title: "General", url: "#" },
        { title: "Team", url: "#" },
        { title: "Billing", url: "#" },
        { title: "Limits", url: "#" },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Layout01Icon,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart09Icon,
    },
    {
      name: "Travel",
      url: "#",
      icon: MapsIcon,
    },
  ],
};

export function AppSidebar({ ...props }) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="flex h-16 items-center justify-center border-b transition-all duration-300 ease-in-out group-data-[collapsible=icon]:h-12">
        <Link to="/" className="flex items-center justify-center w-full">
          <div className="flex items-center justify-center transition-opacity duration-200 group-data-[collapsible=icon]:hidden">
            <ThemedLogo />
          </div>

          <div className="hidden items-center justify-center transition-opacity duration-200 group-data-[collapsible=icon]:flex">
            <WhiteIcon className="h-4 w-auto" />
          </div>
        </Link>
      </SidebarHeader>

      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>

      <SidebarFooter />
      <SidebarRail />
    </Sidebar>
  );
}
