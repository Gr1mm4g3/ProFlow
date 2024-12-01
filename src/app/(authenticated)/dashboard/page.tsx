import { Metadata } from "next"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

export const metadata: Metadata = {
  title: "Dashboard - ProFlow",
  description: "Your project overview",
}

export default async function DashboardPage() {
  const session = await getServerSession(authOptions)
  
  const [projects, tasks] = await Promise.all([
    prisma.project.findMany({
      where: {
        userId: session?.user?.id as string
      },
      take: 5,
      orderBy: {
        updatedAt: 'desc'
      }
    }),
    prisma.task.findMany({
      where: {
        userId: session?.user?.id as string
      },
      take: 5,
      orderBy: {
        updatedAt: 'desc'
      },
      include: {
        project: true
      }
    })
  ])

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      
      <div className="grid gap-6 md:grid-cols-2">
        {/* Recent Projects */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Recent Projects</h2>
          <div className="space-y-4">
            {projects.map((project) => (
              <div
                key={project.id}
                className="p-4 rounded-lg border bg-card"
              >
                <h3 className="font-medium">{project.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Tasks */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Recent Tasks</h2>
          <div className="space-y-4">
            {tasks.map((task) => (
              <div
                key={task.id}
                className="p-4 rounded-lg border bg-card"
              >
                <h3 className="font-medium">{task.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {task.project.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
