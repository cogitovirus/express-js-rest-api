CREATE TABLE IF NOT EXISTS enterprise_genai_adoption_impact (
    id SERIAL PRIMARY KEY,
    "Company Name" TEXT,
    "Industry" TEXT,
    "Country" TEXT,
    "GenAI Tool" TEXT,
    "Adoption Year" INTEGER,
    "Number of Employees Impacted" INTEGER,
    "New Roles Created" INTEGER,
    "Training Hours Provided" INTEGER,
    "Productivity Change (%)" NUMERIC,
    "Employee Sentiment" TEXT
);

COPY enterprise_genai_adoption_impact(
    "Company Name",
    "Industry",
    "Country",
    "GenAI Tool",
    "Adoption Year",
    "Number of Employees Impacted",
    "New Roles Created",
    "Training Hours Provided",
    "Productivity Change (%)",
    "Employee Sentiment"
)
FROM '/docker-entrypoint-initdb.d/Enterprise_GenAI_Adoption_Impact.csv'
DELIMITER ','
CSV HEADER;