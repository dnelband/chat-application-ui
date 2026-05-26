const API_BASE = 'http://localhost:3000/api/v1'
const TOKEN = 'super-secret-doodle-token'

export async function GET() {

    const res = await fetch(`${API_BASE}/messages`, {
        headers: {
            Authorization: `Bearer ${TOKEN}`,
        },
    })

    const data = await res.json()
    
    return Response.json(data, { status: res.status })
}