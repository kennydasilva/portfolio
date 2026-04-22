export type ProjectStatus = 'In Progress' | 'Completed' | 'Production';

export interface Challenge {
  challenge: string;
  solution: string;
  result: string;
}

export interface ProjectVersion {
  version: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  problem: string;
  techStack: {
    backend?: string[];
    frontend?: string[];
    devops?: string[];
    database?: string[];
    [key: string]: string[] | undefined;
  };
  features: string[];
  architecture: {
    structure: string;
    apiDesign: string;
    databaseDesign: string;
  };
  deployment?: {
    infrastructure?: string;
    containerization?: string;
    cicd?: string;
    server?: string;
  };
  challenges: Challenge[];
  futureImprovements: string[];
  evolution?: ProjectVersion[];
  status: ProjectStatus;
  images: string[];
  frontendUrl?: string;
  backendUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'sgdit',
    title: 'Traffic Violation Reporting System (SGDIT)',
    shortDescription: 'Digital workflow system for reporting and managing traffic violations with role-based validation',
    fullDescription: 'Automated digital platform with structured workflow enabling citizens to report traffic violations, administrators to validate submissions, and traffic police to process and resolve cases efficiently.',
    problem: 'Manual and inefficient traffic violation reporting process, lack of transparency, and accountability in violation management.',
    techStack: {
      backend: ['Django', 'Python'],
      frontend: ['React', 'TypeScript'],
      database: ['PostgreSQL'],
      devops: ['Docker', 'CI/CD Pipeline'],
      IA: ['computing Vision', 'YOLOv8 and OpenCV for image processing']
    },
    features: [
      'Citizen reporting portal with image upload',
      'Admin validation and review workflow',
      'Traffic Police processing dashboard',
      'Status tracking (Submitted → Under Review → Validated → Resolved)',
      'Real-time notification system',
      'PDF report generation',
      'Role-based access control (RBAC)',
      'Audit trail for all actions'
    ],
    architecture: {
      structure: 'Layered architecture (Controller → Service → Repository)',
      apiDesign: 'RESTful API with JWT authentication and role-based authorization',
      databaseDesign: 'Normalized schema with entities: User, Violation, Status, Attachment'
    },
    deployment: {
      infrastructure: 'AWS EC2 with RDS PostgreSQL',
      containerization: 'Docker multi-stage builds',
      cicd: 'GitHub Actions pipeline',
      server: 'Nginx reverse proxy + Spring Boot'
    },
    challenges: [
      {
        challenge: 'Managing complex role-based workflows with state transitions',
        solution: 'Implemented state machine pattern for violation status management',
        result: 'Clean, maintainable workflow logic with proper validation at each state'
      },
      {
        challenge: 'Ensuring data integrity across multiple user roles',
        solution: 'Database-level constraints combined with service-layer validation',
        result: 'Zero data inconsistencies in production testing'
      },
      {
        challenge: 'Handling file uploads for violation evidence',
        solution: 'Implemented AWS S3 integration with presigned URLs',
        result: 'Secure, scalable image storage with optimized upload performance'
      }
    ],
    futureImprovements: [
      'Real-time notifications using WebSocket',
      'Mobile app for citizen reporting',
      'AI-based violation detection from images',
      'Analytics dashboard for traffic patterns',
      'Multi-language support'
    ],
    evolution: [
      { version: 'v1.0', description: 'Basic CRUD operations and user authentication' },
      { version: 'v1.5', description: 'Role-based workflow with status management' },
      { version: 'v2.0', description: 'File upload, PDF generation, and notifications' },
      { version: 'v2.5', description: 'AWS deployment with Docker and CI/CD (Current)' }
    ],
    status: 'In Progress',
    images: [],
    frontendUrl: 'https://github.com/kennydasilva/SBDIT_Frontend_TS.git',
    backendUrl: 'https://github.com/kennydasilva/SGDIT_Backend.git'
  },
  {
    id: 'billing-system',
    title: 'Billing Management System',
    shortDescription: 'Full-stack billing system with invoice generation and payment tracking',
    fullDescription: 'Enterprise-grade billing management platform built with Spring Boot and React, featuring comprehensive invoice management, payment tracking, and financial reporting capabilities.',
    problem: 'Manual billing processes leading to errors, delayed invoicing, and poor payment tracking.',
    techStack: {
      backend: ['Spring Boot', 'Java', 'JPA/Hibernate'],
      frontend: ['React', 'TypeScript', 'Material-UI'],
      database: ['PostgreSQL'],
      devops: ['Docker', 'Docker Compose']
    },
    features: [
      'Invoice creation and management',
      'Automated invoice numbering',
      'Payment tracking and reconciliation',
      'Client management',
      'PDF invoice generation',
      'Payment history and reports',
      'Multi-currency support',
      'Tax calculation engine'
    ],
    architecture: {
      structure: 'MVC pattern with service layer separation',
      apiDesign: 'RESTful API with Spring Data JPA repositories',
      databaseDesign: 'Relational model: Client, Invoice, InvoiceItem, Payment'
    },
    deployment: {
      containerization: 'Docker Compose for local development',
      server: 'Embedded Tomcat server'
    },
    challenges: [
      {
        challenge: 'Complex invoice calculations with taxes and discounts',
        solution: 'Implemented calculation engine with chain of responsibility pattern',
        result: '100% accurate calculations with audit trail'
      },
      {
        challenge: 'Preventing concurrent invoice modifications',
        solution: 'Optimistic locking with JPA @Version annotation',
        result: 'Zero data conflicts in multi-user environment'
      }
    ],
    futureImprovements: [
      'Integration with payment gateways',
      'Recurring billing automation',
      'Advanced financial analytics',
      'Email invoice delivery'
    ],
    status: 'Completed',
    images: [],
    frontendUrl: 'https://github.com/Faustinojoao/bill-system-frontend',
    backendUrl: 'https://github.com/Faustinojoao/bill-system-backend',
   
  },
  {
    id: 'sales-api',
    title: 'Sales Management API',
    shortDescription: 'Scalable REST API with advanced querying, caching, and comprehensive documentation',
    fullDescription: 'High-performance Django REST API for sales management featuring advanced pagination, filtering, Redis caching layer, and complete Swagger documentation.',
    problem: 'Inefficient sales data management with slow queries and lack of API documentation.',
    techStack: {
      backend: ['Django', 'Django REST Framework', 'Python'],
      database: ['PostgreSQL', 'Redis'],
      devops: ['Docker', 'GitHub Actions', 'Gunicorn', 'Nginx']
    },
    features: [
      'Advanced pagination (cursor and offset)',
      'Dynamic filtering and sorting',
      'Full-text search capabilities',
      'Redis caching layer',
      'Swagger/OpenAPI documentation',
      'JWT authentication',
      'Rate limiting',
      'Comprehensive test coverage'
    ],
    architecture: {
      structure: 'Django MVT with DRF ViewSets and Serializers',
      apiDesign: 'RESTful with versioned endpoints and HATEOAS principles',
      databaseDesign: 'Optimized indexes for common query patterns'
    },
    deployment: {
      infrastructure: 'AWS EC2 with Elasticache for Redis',
      containerization: 'Docker with multi-stage builds',
      cicd: 'GitHub Actions for automated testing and deployment',
      server: 'Gunicorn WSGI server behind Nginx'
    },
    challenges: [
      {
        challenge: 'API response times degrading with large datasets',
        solution: 'Implemented Redis caching with strategic cache invalidation',
        result: '70% reduction in average response time'
      },
      {
        challenge: 'Complex filtering requirements across related models',
        solution: 'Django-filter integration with custom filter backends',
        result: 'Flexible, performant filtering without N+1 queries'
      },
      {
        challenge: 'Maintaining API documentation accuracy',
        solution: 'Auto-generated Swagger docs from DRF serializers',
        result: 'Always up-to-date documentation synced with code'
      }
    ],
    futureImprovements: [
      'GraphQL endpoint for complex queries',
      'Real-time updates with Django Channels',
      'Machine learning-based sales forecasting',
      'Bulk operations API'
    ],
    evolution: [
      { version: 'v1.0', description: 'Basic CRUD endpoints with authentication' },
      { version: 'v1.5', description: 'Pagination, filtering, and sorting' },
      { version: 'v2.0', description: 'Redis caching and performance optimization' },
      { version: 'v2.5', description: 'CI/CD pipeline and production deployment' }
    ],
    status: 'Production',
    images: [],
    githubUrl: 'https://github.com/kennydasilva/alx-project-nexus',
    liveUrl: 'https://api.sales-system.example.com'
  },
  {
    id: 'aws-deployment',
    title: 'AWS Production Deployment',
    shortDescription: 'Full production infrastructure on AWS with multi-tier architecture',
    fullDescription: 'Complete production-ready deployment on AWS demonstrating infrastructure design, security best practices, and scalability patterns.',
    problem: 'Need for scalable, secure, and highly available production infrastructure.',
    techStack: {
      backend: ['Spring Boot', 'Java'],
      database: ['Amazon RDS (PostgreSQL)'],
      devops: ['AWS EC2', 'S3', 'VPC', 'Security Groups', 'Nginx', 'Gunicorn']
    },
    features: [
      'Multi-tier VPC architecture',
      'Auto-scaling EC2 instances',
      'RDS with automated backups',
      'S3 for static assets and file storage',
      'CloudWatch monitoring and alerts',
      'Security groups and network ACLs',
      'SSL/TLS encryption',
      'Automated deployment scripts'
    ],
    architecture: {
      structure: 'Three-tier: Presentation → Application → Data',
      apiDesign: 'RESTful backend with load balancing',
      databaseDesign: 'RDS PostgreSQL with read replicas'
    },
    deployment: {
      infrastructure: 'VPC with public/private subnets, NAT Gateway, Internet Gateway',
      containerization: 'Docker containers on EC2',
      server: 'Nginx as reverse proxy and load balancer'
    },
    challenges: [
      {
        challenge: 'Designing secure network architecture',
        solution: 'Multi-subnet VPC with security groups and NACLs',
        result: 'Zero security incidents, passed security audit'
      },
      {
        challenge: 'Managing database connections efficiently',
        solution: 'Connection pooling with HikariCP and RDS proxy',
        result: 'Stable performance under high load'
      },
      {
        challenge: 'Cost optimization while maintaining performance',
        solution: 'Right-sized instances with auto-scaling policies',
        result: '40% cost reduction without performance impact'
      }
    ],
    futureImprovements: [
      'Kubernetes migration for container orchestration',
      'Multi-region deployment for disaster recovery',
      'CloudFront CDN integration',
      'Infrastructure as Code with Terraform'
    ],
    status: 'Completed',
    images: [],
    githubUrl: 'http://13.53.122.57:8080/swagger-ui/index.html#/'
  }
];





