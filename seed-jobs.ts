import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const careerOpportunities = [
  { industry: "Energy", sector: "Renewable Energy" },
  { industry: "Energy", sector: "Thermal Power" },
  { industry: "Infrastructure and Construction", sector: "Civil Engineering" },
  { industry: "Infrastructure and Construction", sector: "Electrical Engineering" },
  { industry: "Infrastructure and Construction", sector: "Mechanical Engineering" },
  { industry: "Technology", sector: "Automation and Control" },
  { industry: "Mining", sector: "-" },
  { industry: "Corrosion and Control Management", sector: "Safety and Control System" },
  { industry: "Corrosion and Control Management", sector: "Fire Alarm Systems" },
];

async function main() {
  console.log("Seeding jobs...");
  for (const opp of careerOpportunities) {
    const title = opp.sector !== "-" ? opp.sector : opp.industry + " Professional";
    
    await prisma.job.create({
      data: {
        title: title,
        category: opp.industry,
        type: "Full-time",
        location: "Nigeria",
        description: `Join Sevengate Group as a ${title} within our ${opp.industry} division. Help us build the future of Africa.`,
        responsibilities: JSON.stringify([
          "Collaborate with cross-functional teams to deliver high-quality projects",
          "Ensure compliance with industry standards and safety regulations",
          "Drive innovation and operational excellence within your sector"
        ]),
        requirements: JSON.stringify([
          "Relevant degree in engineering or a related field",
          "Proven experience in the industry",
          "Strong problem-solving and communication skills"
        ])
      }
    });
    console.log(`Created job: ${title}`);
  }
  console.log("Seeding finished!");
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
