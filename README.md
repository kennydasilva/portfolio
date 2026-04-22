# Kenny Mangue - Portfolio

Professional portfolio for a Full-Stack Developer with strong backend and DevOps focus.

## 🎯 Features

- **Dynamic Project System**: Easily add, update, and manage projects over time
- **Detailed Project Pages**: Comprehensive technical documentation for each project
- **Project Filtering**: Filter by category (Backend, Full-Stack, DevOps) and status
- **Dark Mode**: Professionally designed dark theme with optional light mode
- **Responsive Design**: Mobile-first approach with smooth animations
- **Engineering-Focused**: Showcases architecture, deployment, and problem-solving

## 🚀 Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI
- **Animations**: Framer Motion (motion)
- **Icons**: Lucide React

## 📁 Project Structure

```
src/
├── app/
│   ├── components/          # React components
│   │   ├── Header.tsx       # Navigation header
│   │   ├── Hero.tsx         # Hero section
│   │   ├── About.tsx        # About section
│   │   ├── TechStack.tsx    # Tech stack grid
│   │   ├── ProjectCard.tsx  # Project preview card
│   │   ├── ProjectDetails.tsx # Detailed project view
│   │   ├── ProjectFilter.tsx  # Project filter component
│   │   ├── Experience.tsx   # Experience timeline
│   │   ├── Contact.tsx      # Contact section
│   │   └── ui/              # Reusable UI components
│   ├── data/
│   │   └── projects.ts      # ⭐ PROJECT DATA (add new projects here)
│   └── App.tsx              # Main application
└── styles/
    └── theme.css            # Custom theme colors
```

## ➕ How to Add a New Project

### Step 1: Open the projects data file

Navigate to `src/app/data/projects.ts`

### Step 2: Add your project to the `projects` array

```typescript
{
  id: 'unique-project-id',
  title: 'Your Project Title',
  shortDescription: 'Brief description (2-3 lines) for the project card',
  fullDescription: 'Detailed description of the system, its purpose, and key characteristics',
  problem: 'What problem does this project solve?',
  
  // Tech stack (categorized)
  techStack: {
    backend: ['Spring Boot', 'Django'],
    frontend: ['React', 'Angular'],
    devops: ['Docker', 'AWS', 'CI/CD'],
    database: ['PostgreSQL', 'Redis']
  },
  
  // Key features (list)
  features: [
    'Feature 1: Description',
    'Feature 2: Description',
    'Feature 3: Description'
  ],
  
  // Architecture details
  architecture: {
    structure: 'e.g., Layered architecture (Controller → Service → Repository)',
    apiDesign: 'e.g., RESTful API with JWT authentication',
    databaseDesign: 'e.g., Normalized schema with entities: User, Order, Product'
  },
  
  // Deployment (optional)
  deployment: {
    infrastructure: 'e.g., AWS EC2 with RDS PostgreSQL',
    containerization: 'e.g., Docker multi-stage builds',
    cicd: 'e.g., GitHub Actions pipeline',
    server: 'e.g., Nginx reverse proxy'
  },
  
  // Challenges & Solutions (array of objects)
  challenges: [
    {
      challenge: 'What was the problem?',
      solution: 'How did you solve it?',
      result: 'What was the outcome?'
    }
  ],
  
  // Future improvements (list)
  futureImprovements: [
    'Planned feature 1',
    'Planned feature 2'
  ],
  
  // Project evolution (optional timeline)
  evolution: [
    { version: 'v1.0', description: 'Initial release with basic features' },
    { version: 'v2.0', description: 'Added authentication and deployment' }
  ],
  
  // Status badge
  status: 'In Progress' | 'Completed' | 'Production',
  
  // Images (array of URLs)
  images: [],
  
  // Links (optional)
  githubUrl: 'https://github.com/username/repo',
  liveUrl: 'https://live-demo.com'
}
```

### Step 3: Save the file

The project will automatically appear in the portfolio with full filtering support.

## 🎨 Customization

### Update Personal Information

1. **Contact Info**: Edit `src/app/components/Contact.tsx`
2. **Hero Section**: Edit `src/app/components/Hero.tsx`
3. **About Section**: Edit `src/app/components/About.tsx`
4. **Experience Timeline**: Edit `src/app/components/Experience.tsx`

### Update Tech Stack

Edit the `techCategories` array in `src/app/components/TechStack.tsx`

### Change Colors

Edit `src/styles/theme.css`:
- Primary color: `#0A192F` (Deep Navy)
- Accent color: `#64FFDA` (Cyan/Teal)

## 📸 Adding Project Images

To add screenshots or diagrams to a project:

1. Place images in `public/projects/[project-id]/`
2. Update the `images` array in your project data:

```typescript
images: [
  '/projects/your-project-id/screenshot1.png',
  '/projects/your-project-id/architecture-diagram.png'
]
```

## 🔧 Development

```bash
# Install dependencies
pnpm install

# Start development server
# (Server is already running in Figma Make environment)

# Build for production
pnpm build
```

## 📋 Project Status Guide

- **In Progress**: Currently being developed
- **Completed**: Finished development, may not be deployed
- **Production**: Live and actively maintained

## 🎯 Portfolio Philosophy

This portfolio is designed to showcase **engineering depth**, not just UI skills:

- **Architecture over aesthetics**: Focus on system design and technical decisions
- **Problem-solving**: Highlight challenges faced and solutions implemented
- **Real-world impact**: Show production deployments and measurable results
- **Continuous evolution**: Track project improvements over time

## 📝 Tips for Writing Project Descriptions

### Good Examples:

✅ "Implemented Redis caching layer reducing API response time by 70%"
✅ "Designed multi-tier VPC architecture passing security audit"
✅ "Built state machine pattern for complex workflow management"

### Avoid:

❌ "Made a nice website"
❌ "Built a system"
❌ "Used Spring Boot"

**Focus on**: What you built, why it matters, how you solved problems, and the impact.

## 🚀 Deployment

This portfolio can be deployed to:
- Vercel
- Netlify
- AWS S3 + CloudFront
- GitHub Pages
- Any static hosting service

## 📞 Contact

- **Email**: kenny.mangue@example.com
- **GitHub**: [github.com/kennymangue](https://github.com/kennymangue)
- **LinkedIn**: [linkedin.com/in/kennymangue](https://linkedin.com/in/kennymangue)

---

Built with React, TypeScript, and Tailwind CSS by Kenny Mangue
