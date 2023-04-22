import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest, {params}:any) {
    const { id } = params
    const url = `${process.env.WORDPRESS_API}/clients/${id}`
    const response = await fetch(url)
    const user = await response.json()

    return NextResponse.json(user)
}

export async function PUT(request: NextRequest, { params }:any) {
    const data = await request.json()
    const { id } = params

    const url = `${process.env.WORDPRESS_API}/clients/${id}`
    const response = await fetch(url, {
        method:'put',
        body:JSON.stringify(data)
    })
    const client = await response.json()

    return NextResponse.json(client)
}