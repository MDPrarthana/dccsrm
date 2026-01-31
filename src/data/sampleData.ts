import { Company } from "@/types/company";

// Sample company data - in production, this would come from Supabase
export const sampleCompanies: Company[] = [
  {
    id: "1",
    name: "TechCorp Solutions",
    logo_url: null,
    company_type: "Product",
    category: "Information Technology",
    employee_size: "10,001+",
    headquarters_address: "San Francisco, CA, USA",
    operating_countries: ["USA", "India", "UK"],
    founded_year: 2005,
    website: "https://techcorp.example.com",
  },
  {
    id: "2",
    name: "Global Consulting Partners",
    logo_url: null,
    company_type: "Service",
    category: "Consulting",
    employee_size: "1,001-5,000",
    headquarters_address: "New York, NY, USA",
    operating_countries: ["USA", "Germany", "Japan"],
    founded_year: 1998,
    website: "https://gcp.example.com",
  },
  {
    id: "3",
    name: "FinServe Technologies",
    logo_url: null,
    company_type: "Product",
    category: "Financial Services",
    employee_size: "5,001-10,000",
    headquarters_address: "London, UK",
    operating_countries: ["UK", "Singapore", "UAE"],
    founded_year: 2010,
    website: "https://finserve.example.com",
  },
  {
    id: "4",
    name: "DataStream Analytics",
    logo_url: null,
    company_type: "Product",
    category: "Information Technology",
    employee_size: "501-1,000",
    headquarters_address: "Bangalore, India",
    operating_countries: ["India", "USA"],
    founded_year: 2015,
    website: "https://datastream.example.com",
  },
  {
    id: "5",
    name: "CloudNine Solutions",
    logo_url: null,
    company_type: "Service",
    category: "Information Technology",
    employee_size: "201-500",
    headquarters_address: "Chennai, India",
    operating_countries: ["India", "Australia"],
    founded_year: 2018,
    website: "https://cloudnine.example.com",
  },
  {
    id: "6",
    name: "MedTech Innovations",
    logo_url: null,
    company_type: "Product",
    category: "Healthcare",
    employee_size: "1,001-5,000",
    headquarters_address: "Boston, MA, USA",
    operating_countries: ["USA", "Canada", "Mexico"],
    founded_year: 2012,
    website: "https://medtech.example.com",
  },
  {
    id: "7",
    name: "RetailPro Systems",
    logo_url: null,
    company_type: "Product",
    category: "Retail",
    employee_size: "501-1,000",
    headquarters_address: "Mumbai, India",
    operating_countries: ["India", "UAE", "Singapore"],
    founded_year: 2014,
    website: "https://retailpro.example.com",
  },
  {
    id: "8",
    name: "EduLearn Platform",
    logo_url: null,
    company_type: "Product",
    category: "Education",
    employee_size: "51-200",
    headquarters_address: "Hyderabad, India",
    operating_countries: ["India"],
    founded_year: 2020,
    website: "https://edulearn.example.com",
  },
];

// Aggregated stats from the sample data
export const companyStats = {
  total: sampleCompanies.length,
  byType: {
    Product: sampleCompanies.filter((c) => c.company_type === "Product").length,
    Service: sampleCompanies.filter((c) => c.company_type === "Service").length,
  },
  byCategory: [
    {
      category: "Information Technology",
      count: sampleCompanies.filter(
        (c) => c.category === "Information Technology"
      ).length,
    },
    {
      category: "Consulting",
      count: sampleCompanies.filter((c) => c.category === "Consulting").length,
    },
    {
      category: "Financial Services",
      count: sampleCompanies.filter((c) => c.category === "Financial Services")
        .length,
    },
    {
      category: "Healthcare",
      count: sampleCompanies.filter((c) => c.category === "Healthcare").length,
    },
    {
      category: "Retail",
      count: sampleCompanies.filter((c) => c.category === "Retail").length,
    },
    {
      category: "Education",
      count: sampleCompanies.filter((c) => c.category === "Education").length,
    },
  ],
  recentlyAdded: sampleCompanies.slice(-3).reverse(),
};
