import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"

export async function GET() {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    const projects = await prisma.project.findMany({
      where: {
        userId: session.user.id as string
      },
      include: {
        tasks: true,
        team: true
      }
    })

    return NextResponse.json(projects)
  } catch (error) {
    console.error("[PROJECTS_GET]", error)
    return new NextResponse("Internal Error", { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    const json = await request.json()
    const { name, description, teamId } = json

    if (!name) {
      return new NextResponse("Name is required", { status: 400 })
    }

    if (!teamId) {
      return new NextResponse("Team ID is required", { status: 400 })
    }

    const project = await prisma.project.create({
      data: {
        name,
        description,
        teamId,
        userId: session.user.id as string,
      }
    })

    return NextResponse.json(project)
  } catch (error) {
    console.error("[PROJECTS_POST]", error)
    return new NextResponse("Internal Error", { status: 500 })
  }
}
