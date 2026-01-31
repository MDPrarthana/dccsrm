import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Building2,
  Lightbulb,
  BarChart3,
  Sparkles,
  Clock,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface NavItem {
  label: string;
  path: string;
  icon: React.ElementType;
  enabled: boolean;
  comingSoonReason?: string;
}

const navItems: NavItem[] = [
  {
    label: "Dashboard",
    path: "/",
    icon: LayoutDashboard,
    enabled: true,
  },
  {
    label: "Companies",
    path: "/companies",
    icon: Building2,
    enabled: true,
  },
  {
    label: "Skills",
    path: "/skills",
    icon: Sparkles,
    enabled: false,
    comingSoonReason: "Requires skill & role tables integration",
  },
  {
    label: "Analytics",
    path: "/analytics",
    icon: BarChart3,
    enabled: true,
  },
  {
    label: "Innovation",
    path: "/innovation",
    icon: Lightbulb,
    enabled: false,
    comingSoonReason: "Requires IP & research data integration",
  },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <aside className="w-64 border-r border-border bg-sidebar flex flex-col">
      {/* Logo / Brand */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">
              DCC
            </span>
          </div>
          <div>
            <h1 className="text-sm font-semibold text-foreground">SRM DCC</h1>
            <p className="text-xs text-muted-foreground">
              Digital Career Compass
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;

            if (!item.enabled) {
              return (
                <li key={item.path}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div
                        className={cn(
                          "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm nav-disabled"
                        )}
                      >
                        <Icon className="w-5 h-5" />
                        <span>{item.label}</span>
                        <Clock className="w-3.5 h-3.5 ml-auto" />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent side="right" className="max-w-[200px]">
                      <p className="font-medium">Coming Soon</p>
                      <p className="text-xs text-muted-foreground">
                        {item.comingSoonReason}
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </li>
              );
            }

            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors",
                    isActive
                      ? "nav-active"
                      : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                  )}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-border">
        <p className="text-xs text-muted-foreground leading-relaxed">
          Built by students under structured training programs.
        </p>
        <p className="text-xs text-muted-foreground mt-1">
          Powered by{" "}
          <a
            href="https://talenciaglobal.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Talenciaglobal
          </a>
        </p>
      </div>
    </aside>
  );
}
