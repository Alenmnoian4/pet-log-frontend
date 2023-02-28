// YOUR DEPLOYED API BASE URL
const URL = "https://pet-log-backend.onrender.com"

//indexLoader => get all petlogs for index route
export const indexLoader = async () => {
    const response = await fetch(URL + "/petlogs/")
    const petlogs = await response.json()
    return petlogs
}

//showLoader => get a single petlog for Show route
export const showLoader = async ({params}) => {
    const response = await fetch(URL + `/petlogs/${params.id}/`)
    const petlog = await response.json()
    return petlog
}