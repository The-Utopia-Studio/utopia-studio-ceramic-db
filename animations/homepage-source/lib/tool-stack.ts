export type StudioTool = {
  name: string
  logo: string
  description: string
  category: string
  format?: 'wordmark' | 'symbol' | 'stacked'
}

// Tools used by the Studio. These are display entries, not vendor links.
export const STUDIO_TOOL_STACK: StudioTool[] = [
  { name: 'ChatGPT', logo: '/images/chatgpt.svg', category: 'Research & AI', description: 'Research, analysis, and everyday problem-solving.' },
  { name: 'Claude', logo: '/images/claude-wordmark.svg', category: 'Research & AI', description: 'Long-form reasoning and AI-assisted building.' },
  { name: 'Cursor', logo: '/images/cursor.svg', category: 'Development', description: 'AI-assisted editing across the codebase.' },
  { name: 'Factory', logo: '/images/factory.svg', category: 'Development', description: 'Droid agents for planning, building, and testing software.' },
  { name: '8090 Software Factory', logo: '/images/8090.svg', category: 'Development', description: 'Turn requirements into blueprints and build tasks.' },
  { name: 'Greptile', logo: '/images/greptile.svg', category: 'Code review', description: 'AI code review with context from the whole repository.' },
  { name: 'Linear', logo: '/images/linear.svg', category: 'Product planning', description: 'Product priorities, projects, and issue tracking.', format: 'symbol' },
  { name: 'Next.js', logo: '/images/nextjs-mark.png', category: 'Product engineering', description: 'Web interfaces and full-stack applications.', format: 'stacked' },
  { name: 'Convex', logo: '/images/convex logo.png', category: 'Product engineering', description: 'Realtime data and backend services.' },
  { name: 'Stripe', logo: '/images/stripe logo.svg.png', category: 'Payments', description: 'Payments, subscriptions, and billing.' },
  { name: 'Vercel', logo: '/images/vercel.svg', category: 'Deployment', description: 'Web hosting and preview deployments.' },
  { name: 'Railway', logo: '/images/railway.svg', category: 'Deployment', description: 'Application and database deployment.', format: 'symbol' },
  { name: 'Sentry', logo: '/images/sentry.svg', category: 'Observability', description: 'Error tracking and performance monitoring.', format: 'symbol' },
  { name: 'PostHog', logo: '/images/posthog.svg', category: 'Product analytics', description: 'Analytics, session replay, and experiments.', format: 'symbol' },
  { name: 'NVIDIA', logo: '/images/nvidia.svg', category: 'Compute', description: 'GPU compute for AI workloads.' },
  { name: 'AMD', logo: '/images/amd.svg', category: 'Compute', description: 'Compute for demanding workloads.' },
]
