import { instanceLogged } from "@/shared/api/axios"

export const getParticipants = async (id: string) => {
    try{
        const getEvent = await instanceLogged.get(`events/${id}/`)
        // console.log('data', getEvent.data)
        return getEvent.data
    } catch (e) {
        console.log(e)
        return e
    }
}
