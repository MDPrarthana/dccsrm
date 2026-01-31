import { AppLayout } from "@/components/layout/AppLayout";
import { PageHeader } from "@/components/ui/PageHeader";
import { StatCard } from "@/components/ui/StatCard";
import { ComingSoonBlock } from "@/components/ui/ComingSoonBlock";
import { companyStats } from "@/data/sampleData";
import { Building2, Briefcase, Wrench, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <AppLayout>
      <PageHeader
        title="Dashboard"
        description="System overview and key metrics"
      />

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard
          title="Total Companies"
          value={companyStats.total}
          icon={<Building2 className="w-5 h-5" />}
          description="In database"
        />
        <StatCard
          title="Product Companies"
          value={companyStats.byType.Product}
          icon={<Briefcase className="w-5 h-5" />}
        />
        <StatCard
          title="Service Companies"
          value={companyStats.byType.Service}
          icon={<Wrench className="w-5 h-5" />}
        />
        <StatCard
          title="Categories"
          value={companyStats.byCategory.length}
          icon={<MapPin className="w-5 h-5" />}
          description="Industry sectors"
        />
      </div>

      {/* Distribution Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Company by Category */}
        <div className="stat-card">
          <h3 className="text-sm font-medium text-muted-foreground mb-4">
            Companies by Category
          </h3>
          <div className="space-y-3">
            {companyStats.byCategory.map((item) => (
              <div key={item.category} className="flex items-center gap-3">
                <div className="flex-1">
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-foreground">{item.category}</span>
                    <span className="text-muted-foreground">{item.count}</span>
                  </div>
                  <div className="h-2 bg-accent rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all"
                      style={{
                        width: `${(item.count / companyStats.total) * 100}%`,
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recently Added */}
        <div className="stat-card">
          <h3 className="text-sm font-medium text-muted-foreground mb-4">
            Recently Added Companies
          </h3>
          <div className="space-y-3">
            {companyStats.recentlyAdded.map((company) => (
              <div
                key={company.id}
                onClick={() => navigate(`/companies/${company.id}`)}
                className="flex items-center gap-3 p-3 rounded-lg bg-accent/50 hover:bg-accent cursor-pointer transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-muted-foreground" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">
                    {company.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {company.category} • {company.company_type}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Coming Soon Section */}
      <h2 className="text-lg font-medium text-foreground mb-4">
        Future Capabilities
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ComingSoonBlock
          title="Employability Snapshot"
          description="Personalized readiness score based on your profile and target companies."
          requiredData="Student & skill datasets"
        />
        <ComingSoonBlock
          title="Skill Readiness"
          description="Gap analysis between your current skills and job requirements."
          requiredData="Skill mapping tables"
        />
        <ComingSoonBlock
          title="Personalized Focus Areas"
          description="AI-powered recommendations for skill development priorities."
          requiredData="Learning path integration"
        />
      </div>
    </AppLayout>
  );
};

export default Dashboard;
