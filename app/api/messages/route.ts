import { buildSearchParamsString } from "./_lib/buildSearchParamsString"

const API_BASE = process.env.API_BASE ?? 'http://localhost:3000'
const TOKEN = process.env.API_TOKEN

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)

    const searchParamsString = buildSearchParamsString(searchParams)

    const res = await fetch(`${API_BASE}/api/v1/messages${searchParamsString}`, {
        headers: {
            Authorization: `Bearer ${TOKEN}`,
        },
    })

    const data = await res.json()
    return Response.json(data, { status: res.status })
}

export async function POST(request: Request) {
    const body = await request.json()

    const res = await fetch(`${API_BASE}/api/v1/messages`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${TOKEN}`,
        },
        body: JSON.stringify(body),
    })

    const data = await res.json()
    return Response.json(data, { status: res.status })
}