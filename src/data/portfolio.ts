export const personal = {
  name: 'Yousef Akmal',
  title: 'Software QA/QC Engineer',
  secondary: 'ISTQB Certified | Manual Testing | API Testing | Test Automation',
  location: 'Giza, Egypt',
  email: 'yousefakmal81@gmail.com',
  phoneDisplay: '+20 100 600 7241',
  phoneHref: '+201006007241',
  linkedin: 'https://www.linkedin.com/in/yousefakmal',
  github: 'https://github.com/yousefakmal',
  cv: '/assets/Yousef_Akmal_CV.pdf',
  summary: 'Results-driven QA/QC Engineer and Software Tester delivering structured, end-to-end quality assurance across web, mobile, API, and ERP systems. I turn requirements into clear test coverage, actionable defect reports, and confident release decisions.',
  longSummary: 'I am an ISTQB-certified Software QA/QC Engineer focused on dependable software and evidence-led release decisions. Across web, mobile, and medical ERP systems, I have designed and executed functional, regression, smoke, integration, UAT, exploratory, and end-to-end testing. My work combines analytical manual QA, API validation, SQL-based backend checks, performance testing, and foundational automation practice—always with clear documentation and disciplined defect lifecycle management.',
}

export const stats = [
  { value: '6+', label: 'QA projects' },
  { value: '350+', label: 'test cases' },
  { value: '35+', label: 'defects identified' },
]

export const experiences = [
  {
    role: 'Software QC Tester', company: 'Mediconsult Egypt', period: 'Jun 2026 - Present', current: true,
    bullets: ['Manual and automated testing for web and mobile applications across multiple functional modules.', 'Functional, regression, smoke, and exploratory test design and execution.', 'REST API validation in Postman, including authentication, responses, and HTTP status codes.', 'Selenium WebDriver and Cucumber automation scripts; JIRA defect tracking within Agile Scrum teams.'],
  },
  {
    role: 'Software Testing Track - Scholarship Trainee', company: 'DigiLians - Ministry of Communications & Military Technical College Egypt', period: 'Jan 2026 - Jun 2026', recognition: 'Top Achiever',
    bullets: ['Designed and executed 100+ functional, regression, smoke, exploratory, and end-to-end test cases.', 'Validated APIs with Postman, databases with SQL, and performance with JMeter and Locust.', 'Built foundational automation practice with Selenium, TestNG, Cucumber, Maven, POM, and REST Assured.', 'Applied ISTQB and risk-based QA practices in Agile release cycles; gained basic CI/CD exposure.'],
  },
  {
    role: 'Private Instructor - Programming & Computer Science', company: 'Freelance, Egypt', period: 'Nov 2024 - Present', current: true,
    bullets: ['Teach programming fundamentals and software logic concepts, strengthening analytical thinking, debugging, and problem-solving.'],
  },
]

export const skillGroups = [
  { title: 'Manual QA', level: 'Practical', items: ['Functional', 'Regression', 'Smoke', 'Exploratory', 'E2E', 'UAT', 'Mobile'] },
  { title: 'API & integration', level: 'Practical', items: ['Postman', 'Newman', 'REST APIs', 'REST Assured'] },
  { title: 'Automation', level: 'Basic exposure', items: ['Selenium WebDriver', 'TestNG', 'Cucumber', 'Page Object Model', 'Maven'] },
  { title: 'Performance', level: 'Practical', items: ['Apache JMeter', 'Locust', 'Load analysis'] },
  { title: 'Database', level: 'Practical', items: ['SQL', 'Backend validation', 'Data verification'] },
  { title: 'CI/CD', level: 'Basic exposure', items: ['Jenkins', 'GitHub Actions'] },
  { title: 'Development', level: 'Working knowledge', items: ['Java', 'Python', 'C++', 'Git'] },
  { title: 'QA practice', level: 'Practical', items: ['JIRA', 'Chrome DevTools', 'Agile Scrum', 'STLC', 'SDLC', 'Risk-based testing'] },
]

export const projects = [
  { title: 'Medical ERP System', subtitle: 'Full testing cycle', metric: '70+ test cases', featured: true, summary: 'End-to-end QA across patient records, billing, inventory, and scheduling.', approaches: ['Functional', 'Regression', 'Integration', 'UAT', 'Database validation'], details: ['Led the end-to-end QA cycle against business and clinical workflow requirements.', 'Designed and executed 70+ test cases and tracked defects through resolution.', 'Verified data integrity across integrated ERP modules.'], tools: ['SQL', 'Structured bug reports'] },
  { title: 'TEBK Web Application', subtitle: 'QA & development participation', metric: '80+ cases · 20+ defects', featured: true, summary: 'DigiLians graduation project covering multi-module web quality.', approaches: ['Functional', 'Regression', 'Smoke', 'E2E'], details: ['Participated in both development and QA/QC.', 'Conducted 80+ test cases across multiple modules.', 'Documented 20+ defects and verified fixes over multiple release iterations.'], tools: ['Web QA', 'Defect lifecycle'] },
  { title: 'Help Desk System', subtitle: 'Testing activities', metric: '60+ cases · 15+ defects', summary: 'Workflow, user-scenario, and backend data validation.', approaches: ['Functional', 'System validation', 'Database validation'], details: ['Designed and executed 60+ test cases.', 'Identified and documented 15+ defects with severity and priority.', 'Validated data integrity with SQL across 5+ core tables.'], tools: ['SQL', 'Bug reporting'] },
  { title: 'Web-Based Electronic Store', subtitle: 'End-to-end testing', metric: '100+ scenarios', featured: true, summary: 'Coverage of critical commerce journeys from authentication to checkout.', approaches: ['Exploratory', 'Usability', 'Regression', 'E2E'], details: ['Validated 8+ critical workflows including cart, product operations, and checkout.', 'Executed 100+ scenarios against business requirements.', 'Confirmed zero critical defects remained open before sign-off.'], tools: ['Web QA', 'Requirements validation'] },
  { title: 'LambdaTest & Swag Labs', subtitle: 'Manual & automation testing', metric: '50+ scenarios', summary: 'Manual and foundational automation coverage of four core modules.', approaches: ['Manual', 'UI automation', 'Reusable test design'], details: ['Covered login, inventory, product management, and checkout.', 'Developed reusable automation scripts using Selenium, TestNG, Cucumber, Maven, and POM.'], tools: ['Selenium', 'TestNG', 'Cucumber', 'Maven', 'POM'] },
  { title: 'Trello API Testing', subtitle: 'API quality validation', metric: '40+ API cases', summary: 'CRUD, authentication, schema, response, and status-code validation.', approaches: ['API testing', 'Schema validation', 'Automated response checks'], details: ['Executed 40+ test cases covering full CRUD operations.', 'Validated authentication and 10+ HTTP status-code scenarios.', 'Performed schema validation and automated response verification.'], tools: ['Postman', 'REST Assured'] },
]

export const training = [
  'ISTQB Certified Tester Foundation Level (CTFL v4) - Certificate 260729018',
  'Completion Certificate - Egyptian Ministry of Communications and Information Technology (MCIT)',
  'Completion Certificate - Egyptian Military Technical College (MTC)',
  'Mobile Testing Fundamentals using Appium',
  'CI/CD Fundamentals for QA using Jenkins and GitHub Actions (Basic Exposure)',
  'AI-Driven QA and Risk-Based Validation Fundamentals',
]
