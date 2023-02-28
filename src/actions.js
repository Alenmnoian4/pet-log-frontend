import { redirect } from "react-router-dom"

// YOUR DEPLOYED API BASE URL
const URL = "https://pet-log-backend.onrender.com"

//createAction => create a petlog from form submissions to `/create`
export const createAction = async ({request}) => {
    // get form data
    const formData = await request.formData()

    // construct request body
    const newPetlog = {
        pet: formData.get("pet"),
        date: formData.get("date"),
        weight: formData.get("weight"),
        appointments: formData.get("appointments"),
        notes: formData.get("notes")
    }

    // send request to backend
    await fetch(URL + "/petlogs/", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newPetlog)
    })

    // redirect back to index page
    return redirect("/")
}

//updateAction => update a todo from form submissions to `/update/:id`
export const updateAction = async ({request, params}) => {
    // get form data
    const formData = await request.formData()

    // get petlog id
    const id = params.id

    // construct request body
    const updatedPetlog = {
        pet: formData.get("pet"),
        date: formData.get("date"),
        weight: formData.get("weight"),
        appointments: formData.get("appointments"),
        notes: formData.get("notes")
    }

    // send request to backend
    await fetch(URL + `/petlogs/${id}/`, {
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedPetlog)
    })

    // redirect back to show page page
    return redirect(`/post/${id}`)
}

//deleteAction => delete a petlog from form submissions to `/delete/:id`
export const deleteAction = async ({params}) => {
    // get petlog id
    const id = params.id

    // send request to backend
    await fetch(URL + `/petlogs/${id}/`, {
        method: "delete",
    })

    // redirect back to show page page
    return redirect("/")
}