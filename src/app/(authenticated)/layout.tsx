import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { authOptions } from "@/lib/auth"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { LayoutDashboard, FolderKanban, CheckSquare, Users, ChevronRight } from "lucide-react"

export default async function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)

  if (!session?.user) {
    redirect("/login")
  }

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <div className="w-64 border-r bg-card p-4">
        <div className="mb-8">
          <Link href="/" className="text-2xl font-bold">
            ProFlow
          </Link>
        </div>
        <nav className="space-y-2">
          <Link
            href="/dashboard"
            className="flex items-center space-x-2 px-2 py-1.5 rounded-lg hover:bg-accent hover:text-accent-foreground"
          >
            <LayoutDashboard className="h-4 w-4" />
            <span>Dashboard</span>
            <ChevronRight className="ml-auto h-4 w-4 opacity-0 group-hover:opacity-100" />
          </Link>
          <Link
            href="/projects"
            className="flex items-center space-x-2 px-2 py-1.5 rounded-lg hover:bg-accent hover:text-accent-foreground"
          >
            <FolderKanban className="h-4 w-4" />
            <span>Projects</span>
            <ChevronRight className="ml-auto h-4 w-4 opacity-0 group-hover:opacity-100" />
          </Link>
          <Link
            href="/tasks"
            className="flex items-center space-x-2 px-2 py-1.5 rounded-lg hover:bg-accent hover:text-accent-foreground"
          >
            <CheckSquare className="h-4 w-4" />
            <span>Tasks</span>
            <ChevronRight className="ml-auto h-4 w-4 opacity-0 group-hover:opacity-100" />
          </Link>
          <Link
            href="/team"
            className="flex items-center space-x-2 px-2 py-1.5 rounded-lg hover:bg-accent hover:text-accent-foreground"
          >
            <Users className="h-4 w-4" />
            <span>Team</span>
            <ChevronRight className="ml-auto h-4 w-4 opacity-0 group-hover:opacity-100" />
          </Link>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1">
        <header className="h-14 border-b px-4 flex items-center justify-between bg-background">
          <div>
            {/* Search bar could go here */}
          </div>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <span className="text-sm">{session.user.email}</span>
            <Button
              variant="ghost"
              size="sm"
              asChild
            >
              <Link href="/api/auth/signout">
                Sign out
              </Link>
            </Button>
          </div>
        </header>
        <main className="p-4">
          {children}
        </main>
      </div>
    </div>
  )
}
