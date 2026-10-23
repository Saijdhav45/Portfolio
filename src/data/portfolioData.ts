export interface Project {
  id: string;
  title: string;
  subtitle: string;
  summary: string;
  problem: string;
  status: 'Completed' | 'In Progress' | 'Prototype';
  tags: string[];
  features: string[];
  architecture: string;
  githubUrl?: string;
  liveUrl?: string;
  isFeatured: boolean;
  type: 'backend' | 'microservices' | 'fullstack' | 'ai';
  highlights: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    focus?: string;
  }[];
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  description: string;
  deliverables: string[];
  iconName: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  activities: string[];
}

export interface PortfolioConfig {
  personal: {
    name: string;
    role: string;
    headline: string;
    bio: string;
    location: string;
    email: string;
    github: string;
    linkedin: string;
    resumeUrl: string;
    isAvailableForFreelance: boolean;
    availabilityStatusText: string;
  };
  navigation: {
    label: string;
    href: string;
  }[];
  skills: Record<string, SkillCategory>;
  projects: Project[];
  services: ServiceItem[];
  process: ProcessStep[];
}

export const portfolioData: PortfolioConfig = {
  personal: {
    name: "Sainath Jadhav",
    role: "Java Backend Developer | Spring Boot & Microservices | AI Integration",
    headline: "Building Reliable Backends. Creating Intelligent Applications.",
    bio: "I am a Java backend and full-stack engineer specializing in robust REST APIs, high-availability microservices with Spring Cloud, and seamless Google Gemini AI integrations. I bridge enterprise architectural patterns with modern developer velocity to build dependable software.",
    location: "India (Open to Global Remote / Freelance)",
    email: "saijadhav2k25@gmail.com", // [CONFIGURABLE: Replace with your primary email]
    github: "https://github.com/Saijdhav45",
    linkedin: "https://www.linkedin.com/in/sainath45", // [CONFIGURABLE: Replace with your LinkedIn profile]
    resumeUrl: "/resume.pdf", // [CONFIGURABLE: Place your resume in /public/resume.pdf]
    isAvailableForFreelance: true, // Controls the "Available for work / projects" status badge
    availabilityStatusText: "Available for Freelance & Select Roles",
  },

  navigation: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Services", href: "#services" },
    { label: "Workflow", href: "#workflow" },
    { label: "Contact", href: "#contact" },
  ],

  skills: {
    backend: {
      title: "Backend Core & Enterprise Java",
      description: "Robust, typesafe, and enterprise-grade server-side development.",
      skills: [
        { name: "Java 21", focus: "Virtual threads, records, pattern matching" },
        { name: "Spring Boot 3", focus: "Clean architecture, auto-configuration" },
        { name: "REST APIs", focus: "API contracts, error specs, validation" },
        { name: "Spring Security & JWT", focus: "Stateless auth, RBAC, OAuth2" },
        { name: "Spring Data JPA & Hibernate", focus: "Optimized queries, ORM mapping" },
        { name: "WebClient & Async I/O", focus: "Non-blocking HTTP communications" },
      ],
    },
    microservices: {
      title: "Distributed Architecture & Cloud",
      description: "Decoupled services engineered for resilience, discovery, and scale.",
      skills: [
        { name: "Microservices Architecture", focus: "Domain-driven boundary separation" },
        { name: "Spring Cloud", focus: "Distributed configuration, service lifecycle" },
        { name: "Eureka Service Discovery", focus: "Dynamic registry & heartbeat checks" },
        { name: "Spring Cloud API Gateway", focus: "Centralized routing, rate limiting" },
        { name: "OpenFeign Clients", focus: "Declarative inter-service communication" },
        { name: "Resilience4j", focus: "Circuit breaker, fallback, retry policies" },
      ],
    },
    ai: {
      title: "AI & LLM Integration",
      description: "Infusing modern generative AI and structured intelligence into backend pipelines.",
      skills: [
        { name: "Google Gemini API", focus: "Flash & Pro models, multimodal prompts" },
        { name: "Prompt Engineering", focus: "Context anchoring, few-shot conditioning" },
        { name: "Structured JSON Output", focus: "Schema enforcement, parsing guarantees" },
        { name: "Resilient AI Clients", focus: "Backoff strategies, graceful fallbacks" },
        { name: "AI Workflow Automation", focus: "Email assistants, summarization agents" },
      ],
    },
    database: {
      title: "Databases & Storage",
      description: "Reliable transactional data storage, indexing, and schema design.",
      skills: [
        { name: "MySQL", focus: "Relational modeling, indexing, ACID transactions" },
        { name: "Schema Migrations", focus: "DDL versioning, clean entity mapping" },
        { name: "MongoDB", focus: "Document storage for specialized microservices" },
      ],
    },
    frontend: {
      title: "Modern Frontend",
      description: "High-performance client interfaces that integrate seamlessly with backend APIs.",
      skills: [
        { name: "React 19 / 18", focus: "Hooks, state management, modular components" },
        { name: "TypeScript", focus: "Strict typing matching backend DTO schemas" },
        { name: "Tailwind CSS", focus: "Utility-first design systems, responsiveness" },
        { name: "Axios & Fetch API", focus: "Interceptors, unified error handling" },
        { name: "Chrome Extensions", focus: "Content scripts, background service workers" },
      ],
    },
    devops: {
      title: "DevOps & Tooling",
      description: "Containerization, reproducible environments, and source control.",
      skills: [
        { name: "Docker & Containerization", focus: "Multi-stage builds, lean images" },
        { name: "Docker Compose", focus: "Local multi-service orchestration" },
        { name: "Git & GitHub", focus: "Feature branches, code reviews, semantic commits" },
        { name: "Postman & Swagger/OpenAPI", focus: "Interactive documentation, API testing" },
      ],
    },
  },

  projects: [
    {
      id: "smart-food-ordering",
      title: "Smart Food Ordering Microservices",
      subtitle: "Enterprise Distributed E-Commerce Architecture",
      summary: "A high-concurrency food ordering backend inspired by platforms like Swiggy and DoorDash, engineered with independent Spring Boot microservices, unified Spring Cloud Gateway routing, and transactional MySQL persistence.",
      problem: "Monolithic ordering systems face bottleneck issues during peak traffic surges, where order processing, restaurant menus, and payment notification failures take down the entire platform.",
      status: "Completed",
      isFeatured: true,
      type: "microservices",
      tags: ["Java 21", "Spring Boot", "Spring Cloud", "Eureka", "API Gateway", "Resilience4j", "MySQL", "Docker"],
      highlights: [
        "Distributed microservices: Auth Service, Restaurant Service, Order/Cart Service, Payment Service, and Notification Service.",
        "Centralized Spring Cloud Gateway with route filters, rate limiting, and JWT validation.",
        "Eureka discovery server managing dynamic node discovery and load balancing via OpenFeign.",
        "Circuit breakers, rate limits, and fallback routines implemented via Resilience4j to prevent cascade failures.",
        "Transactional safety with MySQL and full container orchestration via Docker Compose.",
      ],
      features: [
        "JWT Stateless Authentication & Role-Based Access Control (Admin, Restaurant, Customer)",
        "Dynamic restaurant inventory & menu pricing management",
        "Resilient order state machine: PLACED -> CONFIRMED -> PREPARING -> DELIVERED",
        "Simulated payment gateway webhook workflow with refund reconciliation logic",
        "Docker Compose setup provisioning all microservices and databases locally with one command",
      ],
      architecture: "Client -> Spring Cloud API Gateway -> Eureka Discovery -> [Auth, Order, Restaurant, Payment Microservices] -> MySQL DB Cluster",
      githubUrl: "https://github.com/Saijdhav45/Smart-Food-Ordering-Microservices", // [UPDATE WITH SPECIFIC REPO WHEN PUSHED]
    },
    {
      id: "email-writer-ai",
      title: "AI-Powered Email Assistant",
      subtitle: "Full-Stack Chrome Extension & Spring Boot LLM Service",
      summary: "An intelligent productivity tool that integrates directly into email-writing workflows (e.g. Gmail), leveraging Spring Boot, Google Gemini API, and a React-powered interface to compose contextual, tone-adjusted professional responses in seconds.",
      problem: "Professionals spend over 30% of their workday drafting and responding to routine emails, struggling with tone formulation and context-switching between separate LLM web interfaces.",
      status: "Completed",
      isFeatured: true,
      type: "ai",
      tags: ["Java 21", "Spring Boot", "Google Gemini API", "React", "TypeScript", "Chrome Extension", "Tailwind CSS"],
      highlights: [
        "Dedicated Spring Boot micro-backend acting as an AI orchestration gateway with prompt conditioning.",
        "Native integration with Google Gemini Flash models for sub-second text completions.",
        "React-based Chrome extension injecting context buttons into webmail compose areas seamlessly.",
        "Tone selection (Professional, Casual, Concise, Urgent) with structured JSON responses.",
        "Strict client-side and server-side validation preventing prompt injection or empty payloads.",
      ],
      features: [
        "One-click contextual reply generation based on received email threads",
        "Adjustable tone and output length sliders",
        "Non-blocking WebClient architecture ensuring high backend throughput",
        "Robust error boundaries and fallback handlers when upstream AI rate limits are reached",
      ],
      architecture: "Chrome Extension (React UI) -> Spring Boot Web API -> Prompt Orchestration Layer -> Google Gemini API",
      githubUrl: "https://github.com/Saijdhav45/Email-Writer-AI",
    },
    {
      id: "ai-chat-api",
      title: "AI Chat & Prompt Service",
      subtitle: "Secure & Resilient Gemini LLM REST Microservice",
      summary: "A production-grade Spring Boot API providing structured LLM completions, prompt sanitization, conversational context retention, and fault-tolerant upstream integration with Google's Gemini models.",
      problem: "Direct client-side LLM calls expose API keys, lack enterprise logging, cannot enforce standard corporate safety policies, and fail abruptly during upstream service disruptions.",
      status: "Completed",
      isFeatured: true,
      type: "backend",
      tags: ["Java 21", "Spring Boot", "Google Gemini API", "Spring Security", "WebClient", "Resilience4j", "Docker"],
      highlights: [
        "Secure server-to-server Gemini orchestration masking credentials from client applications.",
        "Custom Spring interceptors logging prompt latencies, token consumption, and error statuses.",
        "Resilience4j retry and circuit breaker wrapping all Google GenAI HTTP endpoints.",
        "Enforced JSON schema responses utilizing Gemini structured outputs for deterministic downstream parsing.",
        "Clean Swagger / OpenAPI documentation for interactive developer testing.",
      ],
      features: [
        "Input sanitization and prompt injection mitigation filters",
        "Configurable temperature, top-k, and system instruction parameters per endpoint",
        "Structured error responses mapping upstream Gemini status codes to standard HTTP problems",
        "Pre-configured Docker container ready for cloud deployment on AWS ECS or Render",
      ],
      architecture: "Client Application -> Spring Security Auth -> Input Sanitizer -> Gemini Client Service (Resilience4j) -> Google Gemini API",
      githubUrl: "https://github.com/Saijdhav45/AI-Chat-API",
    },
  ],

  services: [
    {
      id: "backend-api",
      title: "Backend API Development",
      shortDesc: "High-performance, secure RESTful APIs built with modern Java 21 and Spring Boot 3.",
      description: "I build robust, production-ready server backends designed for reliability, strict data integrity, and seamless integration with frontends and mobile clients.",
      deliverables: [
        "Clean REST API contracts with complete validation & standardized error codes",
        "Spring Security with JWT authentication, RBAC, and password hashing",
        "Optimized MySQL / JPA relational models with indexing and clean migrations",
        "Interactive Swagger / OpenAPI 3.0 documentation",
      ],
      iconName: "Server",
    },
    {
      id: "microservices",
      title: "Microservices Architecture",
      shortDesc: "Scalable, decoupled microservices built with Spring Cloud and containerized with Docker.",
      description: "Transform monolithic applications or engineer new distributed systems with service discovery, API gateways, fault tolerance, and clear domain boundaries.",
      deliverables: [
        "Spring Cloud Gateway setup with routing, CORS, and centralized auth",
        "Eureka discovery service and inter-service communication via OpenFeign",
        "Resilience4j circuit breakers, timeouts, and fallback patterns",
        "Docker Compose environments for effortless multi-service local testing",
      ],
      iconName: "Network",
    },
    {
      id: "fullstack",
      title: "Full-Stack Web Applications",
      shortDesc: "End-to-end web apps pairing React TypeScript frontends with Spring Boot backends.",
      description: "From concept to deployment, I deliver responsive user interfaces backed by solid server logic, ensuring cohesive data typing from database to browser.",
      deliverables: [
        "Modern React 19/18 SPA development with Tailwind CSS & Lucide icons",
        "Strict TypeScript schemas aligned with backend Java DTOs",
        "State management, form validations, and asynchronous API integration",
        "Responsive, mobile-friendly layouts tested across all viewports",
      ],
      iconName: "Layout",
    },
    {
      id: "ai-integration",
      title: "AI & LLM Integration",
      shortDesc: "Harness Google Gemini API to build intelligent features into existing software.",
      description: "Integrate generative AI capabilities such as contextual assistants, automated email generation, intelligent data parsing, and smart chat into your business applications.",
      deliverables: [
        "Secure server-side orchestration keeping AI API keys protected",
        "Custom prompt design and few-shot calibration for predictable outputs",
        "Structured JSON output enforcement for automated application workflows",
        "Resilience, rate-limit management, and caching layers for LLM queries",
      ],
      iconName: "Cpu",
    },
    {
      id: "dockerization",
      title: "Deployment & Dockerization",
      shortDesc: "Containerization, cloud configuration, and production readiness.",
      description: "Ensure your applications run predictably in every environment with multi-stage Docker builds, environment configuration, and cloud deployment guides.",
      deliverables: [
        "Lean multi-stage Dockerfiles for Spring Boot and React applications",
        "Docker Compose orchestration for multi-container stacks (App + DB + Redis)",
        "Vercel and Render deployment configuration with SSL setup",
        "Clean .env management and security review prior to release",
      ],
      iconName: "Container",
    },
  ],

  process: [
    {
      step: "01",
      title: "Discovery & Requirements",
      description: "We discuss your product vision, target audience, core business goals, and technical prerequisites to establish clear, unambiguous project scope.",
      activities: [
        "Review functional requirements & user stories",
        "Identify system constraints, APIs, and data models",
        "Agree on deliverables, tech stack, and milestones",
      ],
    },
    {
      step: "02",
      title: "Architecture & Architecture Plan",
      description: "I map out the database schemas, API contracts, domain models, and service boundaries before writing application code.",
      activities: [
        "Design REST API endpoints & DTO structures",
        "Define MySQL entity relationship diagrams (ERD)",
        "Plan security policies, auth flows, and error strategies",
      ],
    },
    {
      step: "03",
      title: "Iterative Implementation & Testing",
      description: "Development takes place in structured stages with clean code, frequent commits, continuous testing, and transparent progress updates.",
      activities: [
        "Implement core backend logic, JPA repositories, and services",
        "Build frontend interfaces and establish contract alignment",
        "Run functional verification, Postman tests, and error checks",
      ],
    },
    {
      step: "04",
      title: "Containerization & Deployment",
      description: "The application is prepared for production release with Docker, environment variables, documentation, and handover.",
      activities: [
        "Package into lightweight Docker images & Compose files",
        "Deploy to platforms such as Vercel (frontend) & Render (backend)",
        "Provide clear setup documentation & post-launch support",
      ],
    },
  ],
};
