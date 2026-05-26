import { buildSearchParamsString } from "./_lib/buildSearchParamsString"

const API_BASE = 'http://localhost:3000/api/v1/messages'
const TOKEN = 'super-secret-doodle-token'

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)

    const searchParamsString = buildSearchParamsString(searchParams)

    const res = await fetch(`${API_BASE}${searchParamsString}`, {
        headers: {
            Authorization: `Bearer ${TOKEN}`,
        },
    })

    const data = await res.json()
    
    return Response.json(data, { status: res.status })
}