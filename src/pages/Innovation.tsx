import { AppLayout } from "@/components/layout/AppLayout";
import { PageHeader } from "@/components/ui/PageHeader";
import { Lightbulb, Beaker, Rocket, Building, GraduationCap } from "lucide-react";

const innovationTiers = [
  {
    tier: 1,
    name: "Foundation",
    description: "Core technology adoption and process optimization",
    icon: Building,
    status: "future",
  },
  {
    tier: 2,
    name: "Experimentation",
    description: "Internal R&D initiatives and proof of concepts",
    icon: Beaker,
    status: "future",
  },
  {
    tier: 3,
    name: "Industry Involvement",
    description: "Academic partnerships and industry consortiums",
    icon: GraduationCap,
    status: "future",
  },
  {
    tier: 4,
    name: "Market Leadership",
    description: "Patents, publications, and market-defining products",
    icon: Rocket,
    status: "future",
  },
  {
    tier: 5,
    name: "Ecosystem Creation",
    description: "Platform leadership and industry standard setting",
    icon: Lightbulb,
    status: "future",
  },
];

const Innovation = () => {
  return (
    <AppLayout>
      <PageHeader
        title="Innovation"
        description="Innovation framework and research roadmap"
      />

      {/* Coming Soon Banner */}
      <div className="bg-surface border border-border rounded-xl p-8 mb-8 text-center">
        <div className="w-16 h-16 rounded-2xl bg-accent mx-auto mb-4 flex items-center justify-center">
          <Lightbulb className="w-8 h-8 text-muted-foreground" />
        </div>
        <h2 className="text-xl font-semibold text-foreground mb-2">
          Innovation Module Coming Soon
        </h2>
        <p className="text-sm text-muted-foreground max-w-md mx-auto mb-6">
          This module will track company innovation metrics, IP portfolios, and
          research partnerships once the relevant data is integrated.
        </p>
        <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-disabled/20 text-disabled text-xs font-medium uppercase tracking-wider">
          Disabled — Requires IP & research data
        </span>
      </div>

      {/* Five-Tier Innovation Framework */}
      <div className="stat-card">
        <h3 className="text-sm font-medium text-muted-foreground mb-6">
          Five-Tier Innovation Framework
        </h3>
        <div className="space-y-4">
          {innovationTiers.map((tier) => {
            const Icon = tier.icon;
            return (
              <div
                key={tier.tier}
                className="flex items-start gap-4 p-4 bg-accent/30 rounded-lg border border-dashed border-border"
              >
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-muted-foreground" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Tier {tier.tier}
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded bg-disabled/20 text-disabled">
                      Coming Soon
                    </span>
                  </div>
                  <h4 className="text-sm font-medium text-foreground mb-1">
                    {tier.name}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {tier.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Future Capabilities */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="coming-soon-block">
          <h3 className="text-sm font-medium text-muted-foreground mb-2">
            Industry Involvement Tracking
          </h3>
          <p className="text-xs text-muted-foreground mb-3">
            Monitor company participation in academic research, hackathons, and
            industry working groups starting from Tier 3.
          </p>
          <span className="text-[10px] uppercase tracking-wider font-medium text-disabled">
            Requires: partnership_data table
          </span>
        </div>

        <div className="coming-soon-block">
          <h3 className="text-sm font-medium text-muted-foreground mb-2">
            IP & Research Roadmap
          </h3>
          <p className="text-xs text-muted-foreground mb-3">
            Visualize patent portfolios, research publications, and innovation
            investment trajectories.
          </p>
          <span className="text-[10px] uppercase tracking-wider font-medium text-disabled">
            Requires: ip_portfolio table
          </span>
        </div>
      </div>
    </AppLayout>
  );
};

export default Innovation;
