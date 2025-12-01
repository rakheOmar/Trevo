import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useLocation, useNavigate } from "react-router-dom";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";

export function NavMain({ items }) {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => {
          const isActive =
            location.pathname === item.url ||
            item.items?.some((sub) => location.pathname === sub.url);

          return (
            <Collapsible key={item.title} asChild defaultOpen={isActive}>
              <SidebarMenuItem data-active={isActive}>
                <SidebarMenuButton asChild tooltip={item.title}>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(item.url);
                    }}
                    className={isActive ? "bg-sidebar-accent text-sidebar-accent-foreground" : ""}
                  >
                    <HugeiconsIcon icon={item.icon} size={18} />
                    <span>{item.title}</span>
                  </a>
                </SidebarMenuButton>

                {item.items?.length ? (
                  <>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuAction className="data-[state=open]:rotate-90">
                        <HugeiconsIcon icon={ArrowRight01Icon} size={16} />
                        <span className="sr-only">Toggle</span>
                      </SidebarMenuAction>
                    </CollapsibleTrigger>

                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.items.map((subItem) => {
                          const isSubActive = location.pathname === subItem.url;
                          return (
                            <SidebarMenuSubItem key={subItem.title} data-active={isSubActive}>
                              <SidebarMenuSubButton asChild>
                                <a
                                  href="#"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    navigate(subItem.url);
                                  }}
                                  className={
                                    isSubActive
                                      ? "bg-sidebar-accent text-sidebar-accent-foreground"
                                      : ""
                                  }
                                >
                                  <span>{subItem.title}</span>
                                </a>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          );
                        })}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </>
                ) : null}
              </SidebarMenuItem>
            </Collapsible>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
