import {
  ComputerTerminal01Icon,
  PieChart01Icon,
  Robot01Icon,
  Settings01Icon,
} from "@hugeicons/core-free-icons";
import { NavMain } from "@/components/blocks/Dashboard/NavMain";
import { NavSecondary } from "@/components/blocks/Dashboard/NavSecondary";
import { NavUser } from "@/components/blocks/Dashboard/NavUser";
import { TrevoLogo } from "@/components/Logo";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from "@/components/ui/sidebar";

const data = {
  user: {
    name: "Trevo Admin",
    email: "admin@trevo.com",
    avatar: "/avatars/admin.jpg",
  },
  navMain: [
    { title: "Dashboard", url: "/dashboard/home", icon: ComputerTerminal01Icon, isActive: true },
    { title: "Invoices", url: "/dashboard/invoices", icon: PieChart01Icon },
    { title: "GST Matching", url: "/dashboard/gst-matching", icon: Robot01Icon },
    { title: "Fraud Detection", url: "/dashboard/fraud", icon: Robot01Icon },
    { title: "Reports", url: "/dashboard/reports", icon: PieChart01Icon },
    { title: "Settings", url: "/dashboard/settings", icon: Settings01Icon },
  ],
  navSecondary: [
    { title: "Support", url: "/dashboard/support", icon: Robot01Icon },
    { title: "Feedback", url: "/dashboard/feedback", icon: Robot01Icon },
  ],
};

export function AppSidebar(props) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <div className="flex items-center justify-center py-4">
          <TrevoLogo className="mx-auto h-7" />
        </div>
      </SidebarHeader>

      <SidebarContent>
        <NavMain items={data.navMain} onSelect={props.onSelect} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>

      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
