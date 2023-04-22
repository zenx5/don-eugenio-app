import { NextResponse } from "next/server"

export async function GET(request: Request) {
    const url = `${process.env.WORDPRESS_API}/clients`
    const response = await fetch(url)
    const users = await response.json()

    return NextResponse.json(users)
}