export interface ServiceDetail {
  slug: string;
  categoryTitle: string;
  title: string;
  summary: string;
  fullContent: string[];
  parentUrl: string;
}

export const serviceDetails: ServiceDetail[] = [
  // Construction
  {
    slug: 'construction',
    categoryTitle: 'Construction & Infrastructure Services',
    title: 'Construction',
    parentUrl: '/services/construction',
    summary: 'We deliver comprehensive construction solutions that transform concepts into durable, high-quality infrastructure across multiple domains.',
    fullContent: [
      "We deliver comprehensive construction solutions that transform concepts into durable, high-quality infrastructure. Our expertise spans civil, structural, mechanical, electrical, and industrial construction, enabling us to execute projects of varying sizes and complexities. From planning and design to procurement, construction, testing, and commissioning, we maintain strict quality standards while ensuring projects are delivered safely, on schedule, and within budget.",
      "Our team combines technical expertise with innovative construction methodologies to provide cost-effective and sustainable solutions tailored to each client's needs. By adhering to international best practices and industry regulations, we consistently deliver projects that enhance operational efficiency, maximize long-term value, and contribute to the economic development of the communities we serve."
    ]
  },
  {
    slug: 'infrastructure',
    categoryTitle: 'Construction & Infrastructure Services',
    title: 'Infrastructure',
    parentUrl: '/services/construction',
    summary: 'We develop resilient infrastructure that supports economic growth, industrial development, and improved quality of life.',
    fullContent: [
      "We develop resilient infrastructure that supports economic growth, industrial development, and improved quality of life. Our capabilities cover the planning, design, construction, rehabilitation, and maintenance of roads, bridges, utilities, industrial facilities, and public infrastructure. Every project is executed with a focus on safety, functionality, durability, and environmental responsibility.",
      "Leveraging advanced engineering techniques and modern technologies, we create infrastructure solutions that meet today's demands while preparing for tomorrow's challenges. Our collaborative approach ensures that every project aligns with our clients' strategic objectives and delivers lasting social and economic benefits."
    ]
  },
  // Mining
  {
    slug: 'mine-development',
    categoryTitle: 'Mining Services',
    title: 'Mine Development & Operations',
    parentUrl: '/services/mining',
    summary: 'End-to-end mine development and operational management, applying rigorous engineering standards and sustainable practices.',
    fullContent: [
      "End-to-end mine development and operational management, applying rigorous engineering standards and sustainable practices to extract value efficiently and safely."
    ]
  },
  {
    slug: 'mineral-processing',
    categoryTitle: 'Mining Services',
    title: 'Mineral Processing',
    parentUrl: '/services/mining',
    summary: 'Advanced processing solutions designed to maximize yield and purity, leveraging state-of-the-art technology.',
    fullContent: [
      "Advanced processing solutions designed to maximize yield and purity, leveraging state-of-the-art technology to ensure high-grade mineral output for global markets."
    ]
  },
  {
    slug: 'technical-partnerships',
    categoryTitle: 'Mining Services',
    title: 'Technical Partnerships & Capability Building',
    parentUrl: '/services/mining',
    summary: 'Collaborating with leading global technical partners to build local capability and transfer specialized knowledge.',
    fullContent: [
      "Collaborating with leading global technical partners to build local capability, transfer specialized knowledge, and establish world-class mining operations in Nigeria."
    ]
  },
  // Oil & Gas
  {
    slug: 'upstream',
    categoryTitle: 'Oil & Gas Services',
    title: 'Upstream',
    parentUrl: '/services/oil-and-gas',
    summary: 'Supporting exploration and production operations with OEM equipment supply, technical services, and maintenance solutions.',
    fullContent: [
      "Supporting exploration and production operations with OEM equipment supply, technical services, and maintenance solutions that maximise production uptime and asset integrity."
    ]
  },
  {
    slug: 'midstream',
    categoryTitle: 'Oil & Gas Services',
    title: 'Midstream',
    parentUrl: '/services/oil-and-gas',
    summary: 'Providing pipeline services, procurement support, and technical expertise to operators managing transportation and storage infrastructure.',
    fullContent: [
      "Providing pipeline services, procurement support, and technical expertise to operators managing transportation, storage, and processing infrastructure."
    ]
  },
  {
    slug: 'downstream',
    categoryTitle: 'Oil & Gas Services',
    title: 'Downstream',
    parentUrl: '/services/oil-and-gas',
    summary: 'Delivering inspection, maintenance, and equipment supply services to refining and distribution facilities.',
    fullContent: [
      "Delivering inspection, maintenance, and equipment supply services to refining and distribution facilities, ensuring regulatory compliance and operational continuity."
    ]
  },
  // Power
  {
    slug: 'conventional-power',
    categoryTitle: 'Power Sector Services',
    title: 'Conventional Power',
    parentUrl: '/services/power',
    summary: 'We provide end-to-end conventional power solutions that ensure reliable electricity generation, transmission, and distribution.',
    fullContent: [
      "We provide end-to-end conventional power solutions that ensure reliable electricity generation, transmission, and distribution. Our services include engineering, procurement, construction, operation, maintenance, rehabilitation, and optimization of thermal and gas-fired power plants, helping clients achieve maximum operational performance and energy security.",
      "With extensive industry experience, we focus on improving plant efficiency, reducing downtime, and extending the lifespan of critical assets. By integrating proven technologies with sound engineering practices, we deliver dependable power solutions that support industrial growth, national development, and sustainable economic progress."
    ]
  },
  {
    slug: 'green-energy',
    categoryTitle: 'Power Sector Services',
    title: 'Green Energy',
    parentUrl: '/services/power',
    summary: 'We are committed to delivering innovative renewable energy solutions that promote environmental sustainability and long-term energy resilience.',
    fullContent: [
      "As the global energy landscape evolves, we remain committed to delivering innovative renewable energy solutions that promote environmental sustainability and long-term energy resilience. Our expertise includes solar photovoltaic systems, hybrid energy solutions, battery energy storage, energy efficiency programs, and other clean energy technologies tailored to residential, commercial, and industrial applications.",
      "We work closely with clients to design customized energy systems that reduce operating costs, lower carbon emissions, and improve energy independence. Through innovative engineering and sustainable practices, we help organizations transition toward cleaner, more efficient, and environmentally responsible sources of power."
    ]
  },
  // Thermal Energy Sub-services
  {
    slug: 'oem-parts-equipment',
    categoryTitle: 'Thermal Energy Services',
    title: 'OEM Parts & Equipment Supply',
    parentUrl: '/services/power/thermal-energy',
    summary: 'We supply original, manufacturer-certified OEM parts and equipment for thermal power plants to protect your long-term asset integrity.',
    fullContent: [
      "We supply original, manufacturer-certified OEM parts and equipment for thermal power plants, including gas turbines, steam turbines, generators, heat recovery systems, and associated plant equipment. Working directly with leading European OEM principals, we ensure our GENCO clients receive genuine components that meet manufacturer specifications — protecting plant warranties, performance guarantees, and long-term asset integrity."
    ]
  },
  {
    slug: 'plant-operations-maintenance',
    categoryTitle: 'Thermal Energy Services',
    title: 'Plant Operations & Maintenance',
    parentUrl: '/services/power/thermal-energy',
    summary: 'Comprehensive operations and maintenance services for thermal power generating facilities to minimise generation losses.',
    fullContent: [
      "Our experienced power sector engineers provide comprehensive operations and maintenance services for thermal power generating facilities. From scheduled preventive maintenance programmes to emergency corrective interventions, our teams are equipped to respond quickly and effectively — minimising generation losses and ensuring your plant operates at its rated capacity."
    ]
  },
  {
    slug: 'turbine-generator-services',
    categoryTitle: 'Thermal Energy Services',
    title: 'Turbine & Generator Services',
    parentUrl: '/services/power/thermal-energy',
    summary: 'Specialised inspection, overhaul, and repair services for gas turbines, steam turbines, and generators.',
    fullContent: [
      "We deliver specialised inspection, overhaul, and repair services for gas turbines, steam turbines, and generators. Our technicians are experienced with a wide range of OEM platforms and bring the precision and discipline required for working on high-value, safety-critical rotating machinery. Services include major and minor overhauls, hot gas path inspections, rotor balancing, and performance optimisation."
    ]
  },
  {
    slug: 'electrical-instrumentation',
    categoryTitle: 'Thermal Energy Services',
    title: 'Electrical & Instrumentation',
    parentUrl: '/services/power/thermal-energy',
    summary: 'E&I services across the full range of power plant systems, including switchgear, transformers, and control systems.',
    fullContent: [
      "Sevengate Group provides electrical and instrumentation (E&I) services across the full range of power plant systems, including switchgear, transformers, protection and control systems, DCS/SCADA, and field instrumentation. Our E&I teams ensure your plant's electrical and control infrastructure is properly maintained, calibrated, and performing to specification."
    ]
  },
  {
    slug: 'balance-of-plant',
    categoryTitle: 'Thermal Energy Services',
    title: 'Balance of Plant (BOP) Services',
    parentUrl: '/services/power/thermal-energy',
    summary: 'Maintenance and support services for the full balance of plant, ensuring every supporting system is properly maintained and reliable.',
    fullContent: [
      "Beyond the core generation equipment, we provide maintenance and support services for the full balance of plant, including cooling systems, fuel gas systems, water treatment, fire protection, HVAC, and auxiliary electrical systems. Our holistic approach ensures every system that supports power generation is properly maintained and reliable."
    ]
  },
  // Other Services
  {
    slug: 'lpg-gas-network',
    categoryTitle: 'Other Specialised Services',
    title: 'METERED LPG/COOKING GAS SUPPLY AND NETWORK',
    parentUrl: '/services/other-services',
    summary: 'We specialize in the design, installation, commissioning, operation, and maintenance of Liquefied Petroleum Gas (LPG) distribution networks.',
    fullContent: [
      "We specialize in the design, installation, commissioning, operation, and maintenance of Liquefied Petroleum Gas (LPG) distribution networks for residential estates, commercial developments, industrial facilities, and institutional clients. Our systems are designed to provide safe, efficient, and uninterrupted gas supply while complying with all relevant industry regulations and safety requirements.",
      "From centralized gas storage and reticulation systems to customer metering and maintenance services, we deliver turnkey LPG infrastructure that enhances energy efficiency and operational reliability. Our experienced professionals ensure every project is executed with precision, providing dependable energy solutions that meet the highest standards of safety and performance."
    ]
  },
  {
    slug: 'corrosion-control',
    categoryTitle: 'Other Specialised Services',
    title: 'Corrosion Control & Management',
    parentUrl: '/services/other-services',
    summary: 'Comprehensive corrosion control and asset integrity solutions designed to extend asset life and reduce maintenance costs.',
    fullContent: [
      "Protecting valuable assets from corrosion is essential to ensuring long-term operational reliability and cost efficiency. We provide comprehensive corrosion control and asset integrity solutions, including corrosion assessments, protective coating systems, cathodic protection, inspections, integrity monitoring, and preventive maintenance programs for industrial and infrastructure assets.",
      "Our solutions are designed to extend asset life, reduce maintenance costs, minimize operational downtime, and improve overall system performance. Using advanced technologies and internationally recognized standards, we help clients preserve critical infrastructure, enhance safety, and maximize the return on their investments in challenging operating environments."
    ]
  },
  {
    slug: 'industrial-gases',
    categoryTitle: 'Other Specialised Services',
    title: 'Industrial Gases',
    parentUrl: '/services/other-services',
    summary: 'Comprehensive industrial gas solutions that support critical operations across manufacturing, healthcare, and energy sectors.',
    fullContent: [
      "We provide comprehensive industrial gas solutions that support critical operations across manufacturing, healthcare, oil and gas, energy, food processing, and other industrial sectors. Our services include the production, storage, handling, transportation, and distribution of industrial gases while maintaining the highest standards of quality, reliability, and operational safety.",
      "Our engineering expertise enables us to design and implement efficient gas systems that improve productivity, reduce operational risks, and ensure uninterrupted supply. By combining technical excellence with strict compliance to international safety standards, we deliver solutions that meet the evolving needs of modern industries."
    ]
  },
  {
    slug: 'manufacturing-distribution',
    categoryTitle: 'Other Specialised Services',
    title: 'Manufacturing & Distribution',
    parentUrl: '/services/other-services',
    summary: 'High-quality industrial products, equipment, and engineered solutions that meet international standards and support diverse client needs.',
    fullContent: [
      "Our manufacturing and distribution operations are built on a commitment to quality, innovation, and operational excellence. We produce and supply high-quality industrial products, equipment, and engineered solutions that meet international standards and support the diverse needs of clients across multiple industries.",
      "Supported by a reliable logistics and supply chain network, we ensure timely delivery of products while maintaining consistent quality and customer satisfaction. Our integrated approach allows us to respond quickly to market demands, optimize efficiency, and create lasting value for our clients and partners."
    ]
  }
];

export const getServiceDetailBySlug = (slug: string): ServiceDetail | undefined => {
  return serviceDetails.find((s) => s.slug === slug);
};
