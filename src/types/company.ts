export interface Company {
  id: string;
  name: string;
  logo_url: string | null;
  company_type: "Product" | "Service";
  category: string;
  employee_size: string;
  headquarters_address: string;
  operating_countries: string[];
  founded_year?: number;
  website?: string;
}

export interface CompanyBusiness {
  company_id: string;
  business_model?: string;
  revenue_streams?: string[];
  key_products?: string[];
  target_market?: string;
  competitive_advantage?: string;
}

export interface CompanyTechnologies {
  company_id: string;
  primary_languages?: string[];
  frameworks?: string[];
  cloud_providers?: string[];
  databases?: string[];
  dev_tools?: string[];
}

export interface CompanyPeople {
  company_id: string;
  ceo_name?: string;
  cto_name?: string;
  hr_contact?: string;
  team_size_engineering?: number;
  hiring_status?: "Active" | "Moderate" | "Paused";
}

export interface CompanyCulture {
  company_id: string;
  work_style?: "Remote" | "Hybrid" | "Onsite";
  core_values?: string[];
  employee_benefits?: string[];
  work_life_balance_rating?: number;
  diversity_initiatives?: string[];
}

export interface CompanyTalentGrowth {
  company_id: string;
  training_programs?: string[];
  mentorship_available?: boolean;
  internal_mobility?: boolean;
  typical_career_path?: string;
  promotion_frequency?: string;
}

export interface CompanyCompensation {
  company_id: string;
  salary_range_entry?: string;
  salary_range_mid?: string;
  salary_range_senior?: string;
  bonus_structure?: string;
  equity_offered?: boolean;
}

export interface CompanyLogistics {
  company_id: string;
  office_locations?: string[];
  relocation_support?: boolean;
  visa_sponsorship?: boolean;
  interview_process?: string[];
}

export interface CompanyFinancials {
  company_id: string;
  funding_stage?: string;
  total_funding?: string;
  revenue_range?: string;
  profitability_status?: string;
}

export interface CompanyBrandReputation {
  company_id: string;
  glassdoor_rating?: number;
  linkedin_followers?: number;
  awards?: string[];
  media_mentions?: string[];
}
