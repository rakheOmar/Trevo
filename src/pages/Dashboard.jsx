import { Outlet, useLocation } from "react-router-dom";
import { AppSidebar } from "@/components/blocks/Dashboard/AppSidebar";
import DashboardLoader from "@/components/DashboardLoader";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

const viewNames = {
  "/dashboard/home": "Dashboard Home",
  "/dashboard/invoices": "Invoices",
  "/dashboard/gst-matching": "GST Matching",
  "/dashboard/fraud": "Fraud Detection",
  "/dashboard/reports": "Reports",
  "/dashboard/settings": "Settings",
  "/dashboard/support": "Support",
  "/dashboard/feedback": "Feedback",
};

export default function Dashboard() {
  const location = useLocation();
  const currentView = viewNames[location.pathname] || "Dashboard Home";

  return (
    <SidebarProvider>
      <AppSidebar />
      <DashboardLoader />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/dashboard/home">Trevo</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{currentView}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>

        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
