import { AppLayout } from "@/components/layout/AppLayout";
import { PageHeader } from "@/components/ui/PageHeader";
import { ComingSoonBlock } from "@/components/ui/ComingSoonBlock";
import { sampleCompanies } from "@/data/sampleData";
import { sampleCompanyDetails } from "@/data/companyDetails";

const Analytics = () => {
  // Company distribution by type
  const typeDistribution = {
    Product: sampleCompanies.filter((c) => c.company_type === "Product").length,
    Service: sampleCompanies.filter((c) => c.company_type === "Service").length,
  };

  // Tech stack frequency from sample details
  const techFrequency: Record<string, number> = {};
  Object.values(sampleCompanyDetails).forEach((details) => {
    details.technologies?.primary_languages?.forEach((lang) => {
      techFrequency[lang] = (techFrequency[lang] || 0) + 1;
    });
  });
  const sortedTech = Object.entries(techFrequency)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8);

  // Work style distribution
  const workStyleDistribution: Record<string, number> = {};
  Object.values(sampleCompanyDetails).forEach((details) => {
    if (details.culture?.work_style) {
      workStyleDistribution[details.culture.work_style] =
        (workStyleDistribution[details.culture.work_style] || 0) + 1;
    }
  });

  return (
    <AppLayout>
      <PageHeader
        title="Analytics"
        description="Aggregated visibility across companies"
      />

      {/* Enabled Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Company Distribution */}
        <div className="stat-card">
          <h3 className="text-sm font-medium text-muted-foreground mb-4">
            Company Distribution by Type
          </h3>
          <div className="space-y-4">
            {Object.entries(typeDistribution).map(([type, count]) => (
              <div key={type}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-foreground font-medium">{type}</span>
                  <span className="text-muted-foreground">
                    {count} companies (
                    {((count / sampleCompanies.length) * 100).toFixed(0)}%)
                  </span>
                </div>
                <div className="h-3 bg-accent rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all"
                    style={{
                      width: `${(count / sampleCompanies.length) * 100}%`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Frequency */}
        <div className="stat-card">
          <h3 className="text-sm font-medium text-muted-foreground mb-4">
            Technology Stack Frequency
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {sortedTech.map(([tech, count]) => (
              <div
                key={tech}
                className="flex items-center justify-between p-3 bg-accent/50 rounded-lg"
              >
                <span className="text-sm font-medium text-foreground">
                  {tech}
                </span>
                <span className="text-xs text-muted-foreground bg-background px-2 py-1 rounded">
                  {count} {count === 1 ? "company" : "companies"}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Work Style Distribution */}
        <div className="stat-card">
          <h3 className="text-sm font-medium text-muted-foreground mb-4">
            Work Style Distribution
          </h3>
          <div className="flex gap-4">
            {Object.entries(workStyleDistribution).map(([style, count]) => (
              <div
                key={style}
                className="flex-1 p-4 bg-accent/50 rounded-lg text-center"
              >
                <p className="text-2xl font-semibold text-foreground">
                  {count}
                </p>
                <p className="text-xs text-muted-foreground mt-1">{style}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Category Breakdown */}
        <div className="stat-card">
          <h3 className="text-sm font-medium text-muted-foreground mb-4">
            Companies by Category
          </h3>
          <div className="space-y-3">
            {[...new Set(sampleCompanies.map((c) => c.category))].map(
              (category) => {
                const count = sampleCompanies.filter(
                  (c) => c.category === category
                ).length;
                return (
                  <div
                    key={category}
                    className="flex items-center justify-between"
                  >
                    <span className="text-sm text-foreground">{category}</span>
                    <div className="flex items-center gap-2">
                      <div className="w-20 h-2 bg-accent rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary/60 rounded-full"
                          style={{
                            width: `${(count / sampleCompanies.length) * 100}%`,
                          }}
                        />
                      </div>
                      <span className="text-xs text-muted-foreground w-6 text-right">
                        {count}
                      </span>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>

      {/* Coming Soon Section */}
      <h2 className="text-lg font-medium text-foreground mb-4">
        Future Analytics
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ComingSoonBlock
          title="Skill Trend Analysis"
          description="Track skill demand changes over time across companies."
          requiredData="skill_trends table"
        />
        <ComingSoonBlock
          title="Outcome Correlations"
          description="Analyze relationships between company attributes and placement outcomes."
          requiredData="placement_outcomes table"
        />
        <ComingSoonBlock
          title="Innovation Impact"
          description="Measure innovation investments against company performance."
          requiredData="innovation_metrics table"
        />
      </div>
    </AppLayout>
  );
};

export default Analytics;
