import { useParams, useNavigate } from "react-router-dom";
import { AppLayout } from "@/components/layout/AppLayout";
import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/button";
import { sampleCompanies } from "@/data/sampleData";
import { sampleCompanyDetails } from "@/data/companyDetails";
import {
  Building2,
  ArrowLeft,
  ExternalLink,
  MapPin,
  Users,
  Calendar,
  Globe,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CompanyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const company = sampleCompanies.find((c) => c.id === id);
  const details = sampleCompanyDetails[id || ""];

  if (!company) {
    return (
      <AppLayout>
        <div className="text-center py-12">
          <Building2 className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-medium text-foreground mb-2">
            Company not found
          </h3>
          <Button variant="outline" onClick={() => navigate("/companies")}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Companies
          </Button>
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      {/* Header */}
      <div className="mb-6">
        <button
          onClick={() => navigate("/companies")}
          className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Companies
        </button>

        <div className="flex items-start gap-4">
          <div className="w-16 h-16 rounded-xl bg-accent border border-border flex items-center justify-center flex-shrink-0">
            {company.logo_url ? (
              <img
                src={company.logo_url}
                alt={company.name}
                className="w-10 h-10 object-contain"
              />
            ) : (
              <Building2 className="w-8 h-8 text-muted-foreground" />
            )}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-1">
              <h1 className="text-2xl font-semibold text-foreground">
                {company.name}
              </h1>
              {company.website && (
                <a
                  href={company.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <span className="inline-flex items-center px-2 py-0.5 rounded bg-accent text-foreground text-xs font-medium">
                {company.company_type}
              </span>
              <span>{company.category}</span>
              <span className="flex items-center gap-1">
                <Users className="w-3.5 h-3.5" />
                {company.employee_size}
              </span>
              {company.founded_year && (
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  Founded {company.founded_year}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="tab-nav w-full justify-start h-auto p-0 bg-transparent rounded-none mb-6">
          <TabsTrigger value="overview" className="tab-item data-[state=active]:tab-item-active rounded-none bg-transparent">
            Overview
          </TabsTrigger>
          <TabsTrigger value="business" className="tab-item data-[state=active]:tab-item-active rounded-none bg-transparent">
            Business & Strategy
          </TabsTrigger>
          <TabsTrigger value="technology" className="tab-item data-[state=active]:tab-item-active rounded-none bg-transparent">
            Technology
          </TabsTrigger>
          <TabsTrigger value="people" className="tab-item data-[state=active]:tab-item-active rounded-none bg-transparent">
            People & Leadership
          </TabsTrigger>
          <TabsTrigger value="culture" className="tab-item data-[state=active]:tab-item-active rounded-none bg-transparent">
            Culture
          </TabsTrigger>
          <TabsTrigger value="talent" className="tab-item data-[state=active]:tab-item-active rounded-none bg-transparent">
            Talent & Growth
          </TabsTrigger>
          <TabsTrigger value="compensation" className="tab-item data-[state=active]:tab-item-active rounded-none bg-transparent">
            Compensation & Logistics
          </TabsTrigger>
          <TabsTrigger value="financials" className="tab-item data-[state=active]:tab-item-active rounded-none bg-transparent">
            Financials & Brand
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="stat-card">
              <h3 className="text-sm font-medium text-muted-foreground mb-4">
                Basic Information
              </h3>
              <dl className="space-y-3">
                <div className="flex justify-between text-sm">
                  <dt className="text-muted-foreground">Headquarters</dt>
                  <dd className="text-foreground font-medium">
                    {company.headquarters_address}
                  </dd>
                </div>
                <div className="flex justify-between text-sm">
                  <dt className="text-muted-foreground">Employee Size</dt>
                  <dd className="text-foreground font-medium">
                    {company.employee_size}
                  </dd>
                </div>
                <div className="flex justify-between text-sm">
                  <dt className="text-muted-foreground">Founded</dt>
                  <dd className="text-foreground font-medium">
                    {company.founded_year || "Not Available"}
                  </dd>
                </div>
                <div className="flex justify-between text-sm">
                  <dt className="text-muted-foreground">Type</dt>
                  <dd className="text-foreground font-medium">
                    {company.company_type}
                  </dd>
                </div>
              </dl>
            </div>

            <div className="stat-card">
              <h3 className="text-sm font-medium text-muted-foreground mb-4">
                Operating Countries
              </h3>
              <div className="flex flex-wrap gap-2">
                {company.operating_countries.map((country) => (
                  <span
                    key={country}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-accent text-xs font-medium text-foreground"
                  >
                    <Globe className="w-3 h-3" />
                    {country}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="business" className="mt-0">
          <div className="stat-card">
            <h3 className="text-sm font-medium text-muted-foreground mb-4">
              Business & Strategy
            </h3>
            {details?.business ? (
              <dl className="space-y-4">
                <div>
                  <dt className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                    Business Model
                  </dt>
                  <dd className="text-sm text-foreground">
                    {details.business.business_model || "Not Available"}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                    Target Market
                  </dt>
                  <dd className="text-sm text-foreground">
                    {details.business.target_market || "Not Available"}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                    Key Products
                  </dt>
                  <dd className="flex flex-wrap gap-2">
                    {details.business.key_products?.map((product) => (
                      <span
                        key={product}
                        className="px-2 py-1 bg-accent rounded text-xs text-foreground"
                      >
                        {product}
                      </span>
                    )) || (
                      <span className="text-sm text-muted-foreground">
                        Not Available
                      </span>
                    )}
                  </dd>
                </div>
              </dl>
            ) : (
              <p className="text-sm text-muted-foreground">
                Business data not available
              </p>
            )}
          </div>
        </TabsContent>

        <TabsContent value="technology" className="mt-0">
          <div className="stat-card">
            <h3 className="text-sm font-medium text-muted-foreground mb-4">
              Technology Stack
            </h3>
            {details?.technologies ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <dt className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                    Primary Languages
                  </dt>
                  <dd className="flex flex-wrap gap-2">
                    {details.technologies.primary_languages?.map((lang) => (
                      <span
                        key={lang}
                        className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium"
                      >
                        {lang}
                      </span>
                    )) || (
                      <span className="text-sm text-muted-foreground">
                        Not Available
                      </span>
                    )}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                    Frameworks
                  </dt>
                  <dd className="flex flex-wrap gap-2">
                    {details.technologies.frameworks?.map((fw) => (
                      <span
                        key={fw}
                        className="px-2 py-1 bg-accent rounded text-xs text-foreground"
                      >
                        {fw}
                      </span>
                    )) || (
                      <span className="text-sm text-muted-foreground">
                        Not Available
                      </span>
                    )}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                    Cloud Providers
                  </dt>
                  <dd className="flex flex-wrap gap-2">
                    {details.technologies.cloud_providers?.map((cloud) => (
                      <span
                        key={cloud}
                        className="px-2 py-1 bg-accent rounded text-xs text-foreground"
                      >
                        {cloud}
                      </span>
                    )) || (
                      <span className="text-sm text-muted-foreground">
                        Not Available
                      </span>
                    )}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                    Databases
                  </dt>
                  <dd className="flex flex-wrap gap-2">
                    {details.technologies.databases?.map((db) => (
                      <span
                        key={db}
                        className="px-2 py-1 bg-accent rounded text-xs text-foreground"
                      >
                        {db}
                      </span>
                    )) || (
                      <span className="text-sm text-muted-foreground">
                        Not Available
                      </span>
                    )}
                  </dd>
                </div>
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">
                Technology data not available
              </p>
            )}
          </div>
        </TabsContent>

        <TabsContent value="people" className="mt-0">
          <div className="stat-card">
            <h3 className="text-sm font-medium text-muted-foreground mb-4">
              People & Leadership
            </h3>
            {details?.people ? (
              <dl className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-accent/50 rounded-lg">
                    <dt className="text-xs text-muted-foreground mb-1">CEO</dt>
                    <dd className="text-sm font-medium text-foreground">
                      {details.people.ceo_name || "Not Available"}
                    </dd>
                  </div>
                  <div className="p-4 bg-accent/50 rounded-lg">
                    <dt className="text-xs text-muted-foreground mb-1">CTO</dt>
                    <dd className="text-sm font-medium text-foreground">
                      {details.people.cto_name || "Not Available"}
                    </dd>
                  </div>
                  <div className="p-4 bg-accent/50 rounded-lg">
                    <dt className="text-xs text-muted-foreground mb-1">
                      Hiring Status
                    </dt>
                    <dd className="text-sm font-medium text-foreground">
                      {details.people.hiring_status || "Not Available"}
                    </dd>
                  </div>
                </div>
                <div>
                  <dt className="text-xs text-muted-foreground mb-1">
                    Engineering Team Size
                  </dt>
                  <dd className="text-sm text-foreground">
                    {details.people.team_size_engineering
                      ? `${details.people.team_size_engineering} engineers`
                      : "Not Available"}
                  </dd>
                </div>
              </dl>
            ) : (
              <p className="text-sm text-muted-foreground">
                People data not available
              </p>
            )}
          </div>
        </TabsContent>

        <TabsContent value="culture" className="mt-0">
          <div className="stat-card">
            <h3 className="text-sm font-medium text-muted-foreground mb-4">
              Company Culture
            </h3>
            {details?.culture ? (
              <dl className="space-y-4">
                <div>
                  <dt className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                    Work Style
                  </dt>
                  <dd className="text-sm text-foreground">
                    <span
                      className={cn(
                        "inline-flex px-2 py-1 rounded text-xs font-medium",
                        details.culture.work_style === "Remote"
                          ? "bg-success/10 text-success"
                          : details.culture.work_style === "Hybrid"
                          ? "bg-warning/10 text-warning"
                          : "bg-accent text-foreground"
                      )}
                    >
                      {details.culture.work_style || "Not Available"}
                    </span>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                    Core Values
                  </dt>
                  <dd className="flex flex-wrap gap-2">
                    {details.culture.core_values?.map((value) => (
                      <span
                        key={value}
                        className="px-2 py-1 bg-accent rounded text-xs text-foreground"
                      >
                        {value}
                      </span>
                    )) || (
                      <span className="text-sm text-muted-foreground">
                        Not Available
                      </span>
                    )}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                    Employee Benefits
                  </dt>
                  <dd className="flex flex-wrap gap-2">
                    {details.culture.employee_benefits?.map((benefit) => (
                      <span
                        key={benefit}
                        className="px-2 py-1 bg-accent rounded text-xs text-foreground"
                      >
                        {benefit}
                      </span>
                    )) || (
                      <span className="text-sm text-muted-foreground">
                        Not Available
                      </span>
                    )}
                  </dd>
                </div>
              </dl>
            ) : (
              <p className="text-sm text-muted-foreground">
                Culture data not available
              </p>
            )}
          </div>
        </TabsContent>

        <TabsContent value="talent" className="mt-0">
          <div className="stat-card">
            <h3 className="text-sm font-medium text-muted-foreground mb-4">
              Talent & Growth
            </h3>
            {details?.talentGrowth ? (
              <dl className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <dt className="text-xs text-muted-foreground mb-1">
                      Mentorship Available
                    </dt>
                    <dd className="text-sm text-foreground">
                      {details.talentGrowth.mentorship_available
                        ? "Yes"
                        : "No"}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs text-muted-foreground mb-1">
                      Internal Mobility
                    </dt>
                    <dd className="text-sm text-foreground">
                      {details.talentGrowth.internal_mobility ? "Yes" : "No"}
                    </dd>
                  </div>
                </div>
                <div>
                  <dt className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                    Training Programs
                  </dt>
                  <dd className="flex flex-wrap gap-2">
                    {details.talentGrowth.training_programs?.map((program) => (
                      <span
                        key={program}
                        className="px-2 py-1 bg-accent rounded text-xs text-foreground"
                      >
                        {program}
                      </span>
                    )) || (
                      <span className="text-sm text-muted-foreground">
                        Not Available
                      </span>
                    )}
                  </dd>
                </div>
              </dl>
            ) : (
              <p className="text-sm text-muted-foreground">
                Talent & growth data not available
              </p>
            )}
          </div>
        </TabsContent>

        <TabsContent value="compensation" className="mt-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="stat-card">
              <h3 className="text-sm font-medium text-muted-foreground mb-4">
                Compensation
              </h3>
              {details?.compensation ? (
                <dl className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <dt className="text-muted-foreground">Entry Level</dt>
                    <dd className="text-foreground font-medium">
                      {details.compensation.salary_range_entry || "Not Available"}
                    </dd>
                  </div>
                  <div className="flex justify-between text-sm">
                    <dt className="text-muted-foreground">Mid Level</dt>
                    <dd className="text-foreground font-medium">
                      {details.compensation.salary_range_mid || "Not Available"}
                    </dd>
                  </div>
                  <div className="flex justify-between text-sm">
                    <dt className="text-muted-foreground">Senior Level</dt>
                    <dd className="text-foreground font-medium">
                      {details.compensation.salary_range_senior || "Not Available"}
                    </dd>
                  </div>
                  <div className="flex justify-between text-sm">
                    <dt className="text-muted-foreground">Equity Offered</dt>
                    <dd className="text-foreground font-medium">
                      {details.compensation.equity_offered ? "Yes" : "No"}
                    </dd>
                  </div>
                </dl>
              ) : (
                <p className="text-sm text-muted-foreground">
                  Compensation data not available
                </p>
              )}
            </div>

            <div className="stat-card">
              <h3 className="text-sm font-medium text-muted-foreground mb-4">
                Logistics
              </h3>
              {details?.logistics ? (
                <dl className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <dt className="text-xs text-muted-foreground mb-1">
                        Relocation Support
                      </dt>
                      <dd className="text-sm text-foreground">
                        {details.logistics.relocation_support ? "Yes" : "No"}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs text-muted-foreground mb-1">
                        Visa Sponsorship
                      </dt>
                      <dd className="text-sm text-foreground">
                        {details.logistics.visa_sponsorship ? "Yes" : "No"}
                      </dd>
                    </div>
                  </div>
                  <div>
                    <dt className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                      Office Locations
                    </dt>
                    <dd className="flex flex-wrap gap-2">
                      {details.logistics.office_locations?.map((loc) => (
                        <span
                          key={loc}
                          className="px-2 py-1 bg-accent rounded text-xs text-foreground"
                        >
                          {loc}
                        </span>
                      )) || (
                        <span className="text-sm text-muted-foreground">
                          Not Available
                        </span>
                      )}
                    </dd>
                  </div>
                </dl>
              ) : (
                <p className="text-sm text-muted-foreground">
                  Logistics data not available
                </p>
              )}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="financials" className="mt-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="stat-card">
              <h3 className="text-sm font-medium text-muted-foreground mb-4">
                Financials
              </h3>
              {details?.financials ? (
                <dl className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <dt className="text-muted-foreground">Funding Stage</dt>
                    <dd className="text-foreground font-medium">
                      {details.financials.funding_stage || "Not Available"}
                    </dd>
                  </div>
                  <div className="flex justify-between text-sm">
                    <dt className="text-muted-foreground">Total Funding</dt>
                    <dd className="text-foreground font-medium">
                      {details.financials.total_funding || "Not Available"}
                    </dd>
                  </div>
                  <div className="flex justify-between text-sm">
                    <dt className="text-muted-foreground">Revenue Range</dt>
                    <dd className="text-foreground font-medium">
                      {details.financials.revenue_range || "Not Available"}
                    </dd>
                  </div>
                  <div className="flex justify-between text-sm">
                    <dt className="text-muted-foreground">Profitability</dt>
                    <dd className="text-foreground font-medium">
                      {details.financials.profitability_status || "Not Available"}
                    </dd>
                  </div>
                </dl>
              ) : (
                <p className="text-sm text-muted-foreground">
                  Financial data not available
                </p>
              )}
            </div>

            <div className="stat-card">
              <h3 className="text-sm font-medium text-muted-foreground mb-4">
                Brand Reputation
              </h3>
              {details?.brandReputation ? (
                <dl className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-accent/50 rounded-lg text-center">
                      <dt className="text-xs text-muted-foreground mb-1">
                        Glassdoor Rating
                      </dt>
                      <dd className="text-xl font-semibold text-foreground">
                        {details.brandReputation.glassdoor_rating?.toFixed(1) ||
                          "N/A"}
                      </dd>
                    </div>
                    <div className="p-4 bg-accent/50 rounded-lg text-center">
                      <dt className="text-xs text-muted-foreground mb-1">
                        LinkedIn Followers
                      </dt>
                      <dd className="text-xl font-semibold text-foreground">
                        {details.brandReputation.linkedin_followers
                          ? `${(
                              details.brandReputation.linkedin_followers / 1000
                            ).toFixed(0)}K`
                          : "N/A"}
                      </dd>
                    </div>
                  </div>
                  <div>
                    <dt className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                      Awards
                    </dt>
                    <dd className="flex flex-wrap gap-2">
                      {details.brandReputation.awards?.map((award) => (
                        <span
                          key={award}
                          className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium"
                        >
                          {award}
                        </span>
                      )) || (
                        <span className="text-sm text-muted-foreground">
                          Not Available
                        </span>
                      )}
                    </dd>
                  </div>
                </dl>
              ) : (
                <p className="text-sm text-muted-foreground">
                  Brand reputation data not available
                </p>
              )}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </AppLayout>
  );
};

export default CompanyDetail;
