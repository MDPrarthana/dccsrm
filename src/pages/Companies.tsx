import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { AppLayout } from "@/components/layout/AppLayout";
import { PageHeader } from "@/components/ui/PageHeader";
import { sampleCompanies } from "@/data/sampleData";
import { Building2, MapPin, Users, Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

// Extract unique filter options from data
const companyTypes = [...new Set(sampleCompanies.map((c) => c.company_type))];
const categories = [...new Set(sampleCompanies.map((c) => c.category))];
const employeeSizes = [...new Set(sampleCompanies.map((c) => c.employee_size))];

const Companies = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({
    company_type: null as string | null,
    category: null as string | null,
    employee_size: null as string | null,
  });

  const filteredCompanies = useMemo(() => {
    return sampleCompanies.filter((company) => {
      const matchesSearch =
        search === "" ||
        company.name.toLowerCase().includes(search.toLowerCase()) ||
        company.category.toLowerCase().includes(search.toLowerCase());

      const matchesType =
        !filters.company_type || company.company_type === filters.company_type;
      const matchesCategory =
        !filters.category || company.category === filters.category;
      const matchesSize =
        !filters.employee_size ||
        company.employee_size === filters.employee_size;

      return matchesSearch && matchesType && matchesCategory && matchesSize;
    });
  }, [search, filters]);

  const clearFilters = () => {
    setFilters({ company_type: null, category: null, employee_size: null });
  };

  const hasActiveFilters = Object.values(filters).some((v) => v !== null);

  return (
    <AppLayout>
      <PageHeader
        title="Companies"
        description={`${filteredCompanies.length} companies in database`}
      >
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search companies..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9"
          />
        </div>
      </PageHeader>

      {/* Filters */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-sm text-muted-foreground mr-2">Filters:</span>

          {/* Company Type */}
          {companyTypes.map((type) => (
            <button
              key={type}
              onClick={() =>
                setFilters((f) => ({
                  ...f,
                  company_type: f.company_type === type ? null : type,
                }))
              }
              className={cn(
                "filter-chip",
                filters.company_type === type && "filter-chip-active"
              )}
            >
              {type}
            </button>
          ))}

          <span className="w-px h-4 bg-border mx-1" />

          {/* Category */}
          {categories.slice(0, 4).map((cat) => (
            <button
              key={cat}
              onClick={() =>
                setFilters((f) => ({
                  ...f,
                  category: f.category === cat ? null : cat,
                }))
              }
              className={cn(
                "filter-chip",
                filters.category === cat && "filter-chip-active"
              )}
            >
              {cat}
            </button>
          ))}

          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="filter-chip text-destructive border-destructive/30 hover:bg-destructive/10"
            >
              <X className="w-3 h-3 mr-1" />
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Company Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredCompanies.map((company) => (
          <div
            key={company.id}
            onClick={() => navigate(`/companies/${company.id}`)}
            className="company-card"
          >
            <div className="flex items-start gap-3 mb-3">
              <div className="w-12 h-12 rounded-lg bg-accent border border-border flex items-center justify-center flex-shrink-0">
                {company.logo_url ? (
                  <img
                    src={company.logo_url}
                    alt={company.name}
                    className="w-8 h-8 object-contain"
                  />
                ) : (
                  <Building2 className="w-6 h-6 text-muted-foreground" />
                )}
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-sm font-medium text-foreground truncate">
                  {company.name}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {company.company_type}
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="inline-flex items-center px-2 py-0.5 rounded bg-accent text-foreground">
                  {company.category}
                </span>
              </div>

              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Users className="w-3.5 h-3.5" />
                <span>{company.employee_size}</span>
              </div>

              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <MapPin className="w-3.5 h-3.5" />
                <span className="truncate">{company.headquarters_address}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredCompanies.length === 0 && (
        <div className="text-center py-12">
          <Building2 className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-medium text-foreground mb-2">
            No companies found
          </h3>
          <p className="text-sm text-muted-foreground">
            Try adjusting your search or filters.
          </p>
        </div>
      )}
    </AppLayout>
  );
};

export default Companies;
