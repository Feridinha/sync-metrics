import database from "./database"
import axios from "axios"

interface Response {
    data: {
        name: string
        profile_image: string
        display_name: string
        id: string
        stats: {
            videos: number
            users: number
        }
    }[]
}

const fetchLogs = async () => {
    console.log("Fetching", Date.now())
    const response = await axios
        .get<Response>(`https://syncc.feridinha.com/rooms`)
        .catch(console.error)

    if (!response) return

    const rooms = response.data.data

    const models = rooms.map((room) => ({
        channel: room.name,
        channel_id: room.id,
        users: room.stats.users,
        videos: room.stats.videos,
    }))

    await database.log
        .createMany({ data: models })
        .catch((err) => console.log("Query error:", err))
}

fetchLogs()
setInterval(fetchLogs, 30 * 1000)
