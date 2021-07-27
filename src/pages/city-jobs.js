const cityjobs = [
  {
    name: "USA",
    name_proper: "United States",
    software_engineer: "169000",
    react: "87000",
    data_analyst: "121000",
    data_engineer: "133000",
    consultant: "696000",
    financial_analyst: "52500",
    developer: "229000",
    executive_director: "51000",
    tutor: "168000",
    population: "331449281",
  },
  {
    name: "DC",
    name_proper: "District of Columbia",
    software_engineer: "14400",
    react: "4350",
    data_analyst: "11100",
    data_engineer: "12000",
    consultant: "30000",
    financial_analyst: "3000",
    developer: "18400",
    executive_director: "2300",
    tutor: "6500",
    population: "6324629",
  },
  {
    name: "newyork",
    name_proper: "New York",
    software_engineer: "10300",
    react: "6950",
    data_analyst: "10550",
    data_engineer: "9400",
    consultant: "58300",
    financial_analyst: "5500",
    developer: "18100",
    executive_director: "6250",
    tutor: "25500",
    population: "19124359",
  },
  {
    name: "bayarea",
    name_proper: "San Francisco / Bay Area",
    software_engineer: "18900",
    react: "6800",
    data_analyst: "10100",
    data_engineer: "15300",
    consultant: "27100",
    financial_analyst: "2500",
    developer: "21000",
    executive_director: "2950",
    tutor: "2400",
    population: "7756902",
  },
  {
    name: "seattle",
    name_proper: "Seattle",
    software_engineer: "11700",
    react: "3350",
    data_analyst: "7750",
    data_engineer: "7300",
    consultant: "12000",
    financial_analyst: "1250",
    developer: "10000",
    executive_director: "1150",
    tutor: "3700",
    population: "4018598",
  },
  {
    name: "boston",
    name_proper: "Boston",
    software_engineer: "7500",
    react: "3250",
    data_analyst: "5650",
    data_engineer: "6300",
    consultant: "28000",
    financial_analyst: "2150",
    developer: "9100",
    executive_director: "2800",
    tutor: "3100",
    population: "4878211",
  },
  {
    name: "losangeles",
    name_proper: "Los Angeles",
    software_engineer: "6800",
    react: "3500",
    data_analyst: "4850",
    data_engineer: "5700",
    consultant: "30500",
    financial_analyst: "3000",
    developer: "9100",
    executive_director: "2500",
    tutor: "1850",
    population: "13109903",
  },
  {
    name: "chicago",
    name_proper: "Chicago",
    software_engineer: "4400",
    react: "3000",
    data_analyst: "4850",
    data_engineer: "4100",
    consultant: "27000",
    financial_analyst: "2700",
    developer: "7800",
    executive_director: "2050",
    tutor: "11600",
    population: "9406638",
  },
  {
    name: "dallas",
    name_proper: "Dallas",
    software_engineer: "5200",
    react: "2950",
    data_analyst: "4300",
    data_engineer: "4600",
    consultant: "22000",
    financial_analyst: "1800",
    developer: "10500",
    executive_director: "1450",
    tutor: "7600",
    population: "7694138",
  },
  {
    name: "atlanta",
    name_proper: "Atlanta",
    software_engineer: "4500",
    react: "2450",
    data_analyst: "4100",
    data_engineer: "3750",
    consultant: "20000",
    financial_analyst: "1400",
    developer: "8000",
    executive_director: "1200",
    tutor: "8250",
    population: "6087762",
  },
  {
    name: "austin",
    name_proper: "Austin",
    software_engineer: "5000",
    react: "2200",
    data_analyst: "2900",
    data_engineer: "3400",
    consultant: "8700",
    financial_analyst: "700",
    developer: "6000",
    executive_director: "600",
    tutor: "1350",
    population: "2295303",
  },
  {
    name: "philly",
    name_proper: "Philadelphia",
    software_engineer: "3050",
    react: "1900",
    data_analyst: "2800",
    data_engineer: "2300",
    consultant: "18200",
    financial_analyst: "1300",
    developer: "4950",
    executive_director: "1200",
    tutor: "8200",
    population: "6107906",
  },
  {
    name: "denver",
    name_proper: "Denver",
    software_engineer: "3900",
    react: "1800",
    data_analyst: "2400",
    data_engineer: "3200",
    consultant: "10500",
    financial_analyst: "900",
    developer: "5200",
    executive_director: "700",
    tutor: "1900",
    population: "2991231",
  },
  {
    name: "raleigh",
    name_proper: "Raleigh",
    software_engineer: "2600",
    react: "1100",
    data_analyst: "1850",
    data_engineer: "2100",
    consultant: "7700",
    financial_analyst: "500",
    developer: "3900",
    executive_director: "500",
    tutor: "1700",
    population: "2079687",
  },
  {
    name: "houston",
    name_proper: "Houston",
    software_engineer: "1200",
    react: "1100",
    data_analyst: "1420",
    data_engineer: "1100",
    consultant: "13500",
    financial_analyst: "850",
    developer: "2800",
    executive_director: "714",
    tutor: "6500",
    population: "7154478",
  },
  {
    name: "san diego",
    name_proper: "San Diego",
    software_engineer: "2700",
    react: "900",
    data_analyst: "1400",
    data_engineer: "2000",
    consultant: "7400",
    financial_analyst: "650",
    developer: "2800",
    executive_director: "650",
    tutor: "350",
    population: "3332427",
  },
  {
    name: "miami",
    name_proper: "Miami",
    software_engineer: "1550",
    react: "1350",
    data_analyst: "1300",
    data_engineer: "1150",
    consultant: "12500",
    financial_analyst: "1150",
    developer: "2500",
    executive_director: "850",
    tutor: "2100",
    population: "6173008",
  },
  {
    name: "portland",
    name_proper: "Portland",
    software_engineer: "2200",
    react: "950",
    data_analyst: "1300",
    data_engineer: "1750",
    consultant: "6000",
    financial_analyst: "500",
    developer: "2650",
    executive_director: "600",
    tutor: "1100",
    population: "2510259",
  },
  {
    name: "tampa",
    name_proper: "Tampa",
    software_engineer: "950",
    react: "800",
    data_analyst: "1150",
    data_engineer: "850",
    consultant: "7400",
    financial_analyst: "600",
    developer: "2150",
    executive_director: "500",
    tutor: "1000",
    population: "3243963",
  },
  {
    name: "orlando",
    name_proper: "Orlando",
    software_engineer: "900",
    react: "550",
    data_analyst: "800",
    data_engineer: "750",
    consultant: "6700",
    financial_analyst: "400",
    developer: "1500",
    executive_director: "350",
    tutor: "1200",
    population: "2639374",
  },
];

export default cityjobs;