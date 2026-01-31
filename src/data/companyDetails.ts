import {
  CompanyBusiness,
  CompanyTechnologies,
  CompanyPeople,
  CompanyCulture,
  CompanyTalentGrowth,
  CompanyCompensation,
  CompanyLogistics,
  CompanyFinancials,
  CompanyBrandReputation,
} from "@/types/company";

interface CompanyDetails {
  business?: CompanyBusiness;
  technologies?: CompanyTechnologies;
  people?: CompanyPeople;
  culture?: CompanyCulture;
  talentGrowth?: CompanyTalentGrowth;
  compensation?: CompanyCompensation;
  logistics?: CompanyLogistics;
  financials?: CompanyFinancials;
  brandReputation?: CompanyBrandReputation;
}

export const sampleCompanyDetails: Record<string, CompanyDetails> = {
  "1": {
    business: {
      company_id: "1",
      business_model: "B2B SaaS",
      target_market: "Enterprise software companies",
      key_products: ["Cloud Platform", "Analytics Suite", "DevOps Tools"],
    },
    technologies: {
      company_id: "1",
      primary_languages: ["TypeScript", "Python", "Go"],
      frameworks: ["React", "Node.js", "Django"],
      cloud_providers: ["AWS", "GCP"],
      databases: ["PostgreSQL", "MongoDB", "Redis"],
    },
    people: {
      company_id: "1",
      ceo_name: "Sarah Johnson",
      cto_name: "Michael Chen",
      team_size_engineering: 2500,
      hiring_status: "Active",
    },
    culture: {
      company_id: "1",
      work_style: "Hybrid",
      core_values: ["Innovation", "Transparency", "Customer Focus"],
      employee_benefits: ["Health Insurance", "401k", "Stock Options", "Remote Work"],
    },
    talentGrowth: {
      company_id: "1",
      training_programs: ["Leadership Academy", "Tech Bootcamps", "Mentorship Program"],
      mentorship_available: true,
      internal_mobility: true,
    },
    compensation: {
      company_id: "1",
      salary_range_entry: "$80,000 - $120,000",
      salary_range_mid: "$120,000 - $180,000",
      salary_range_senior: "$180,000 - $300,000",
      equity_offered: true,
    },
    logistics: {
      company_id: "1",
      office_locations: ["San Francisco", "New York", "Bangalore", "London"],
      relocation_support: true,
      visa_sponsorship: true,
    },
    financials: {
      company_id: "1",
      funding_stage: "Series E",
      total_funding: "$500M+",
      revenue_range: "$1B+",
      profitability_status: "Profitable",
    },
    brandReputation: {
      company_id: "1",
      glassdoor_rating: 4.2,
      linkedin_followers: 250000,
      awards: ["Best Place to Work 2024", "Top Tech Employer"],
    },
  },
  "2": {
    business: {
      company_id: "2",
      business_model: "Professional Services",
      target_market: "Fortune 500 companies",
      key_products: ["Strategy Consulting", "Digital Transformation", "M&A Advisory"],
    },
    technologies: {
      company_id: "2",
      primary_languages: ["Python", "R", "SQL"],
      frameworks: ["PowerBI", "Tableau"],
      cloud_providers: ["Azure", "AWS"],
      databases: ["SQL Server", "Snowflake"],
    },
    people: {
      company_id: "2",
      ceo_name: "Robert Williams",
      cto_name: "Emily Davis",
      team_size_engineering: 800,
      hiring_status: "Active",
    },
    culture: {
      company_id: "2",
      work_style: "Hybrid",
      core_values: ["Excellence", "Integrity", "Collaboration"],
      employee_benefits: ["Health Insurance", "Sabbatical", "Education Reimbursement"],
    },
    compensation: {
      company_id: "2",
      salary_range_entry: "$90,000 - $130,000",
      salary_range_mid: "$130,000 - $200,000",
      salary_range_senior: "$200,000 - $350,000",
      equity_offered: false,
    },
    logistics: {
      company_id: "2",
      office_locations: ["New York", "Chicago", "Frankfurt", "Tokyo"],
      relocation_support: true,
      visa_sponsorship: true,
    },
    brandReputation: {
      company_id: "2",
      glassdoor_rating: 3.9,
      linkedin_followers: 180000,
      awards: ["Best Consulting Firm 2024"],
    },
  },
  "3": {
    business: {
      company_id: "3",
      business_model: "Fintech Platform",
      target_market: "Banks and Financial Institutions",
      key_products: ["Payment Gateway", "Risk Analytics", "Compliance Suite"],
    },
    technologies: {
      company_id: "3",
      primary_languages: ["Java", "Kotlin", "Scala"],
      frameworks: ["Spring Boot", "Kafka"],
      cloud_providers: ["AWS", "Private Cloud"],
      databases: ["Oracle", "PostgreSQL", "Cassandra"],
    },
    people: {
      company_id: "3",
      ceo_name: "James Anderson",
      cto_name: "Priya Sharma",
      team_size_engineering: 1500,
      hiring_status: "Moderate",
    },
    culture: {
      company_id: "3",
      work_style: "Onsite",
      core_values: ["Security First", "Reliability", "Innovation"],
      employee_benefits: ["Health Insurance", "Bonus", "Gym Membership"],
    },
    compensation: {
      company_id: "3",
      salary_range_entry: "£45,000 - £65,000",
      salary_range_mid: "£65,000 - £95,000",
      salary_range_senior: "£95,000 - £150,000",
      equity_offered: true,
    },
    financials: {
      company_id: "3",
      funding_stage: "Series C",
      total_funding: "$200M",
      revenue_range: "$500M - $1B",
      profitability_status: "Break-even",
    },
    brandReputation: {
      company_id: "3",
      glassdoor_rating: 4.0,
      linkedin_followers: 95000,
      awards: ["Fintech Innovation Award 2023"],
    },
  },
  "4": {
    technologies: {
      company_id: "4",
      primary_languages: ["Python", "JavaScript", "R"],
      frameworks: ["TensorFlow", "React", "Flask"],
      cloud_providers: ["GCP", "AWS"],
      databases: ["BigQuery", "MongoDB"],
    },
    people: {
      company_id: "4",
      ceo_name: "Vikram Patel",
      hiring_status: "Active",
      team_size_engineering: 200,
    },
    culture: {
      company_id: "4",
      work_style: "Remote",
      core_values: ["Data-Driven", "Agility", "Learning"],
      employee_benefits: ["Remote Work", "Learning Budget", "Flexible Hours"],
    },
  },
};
