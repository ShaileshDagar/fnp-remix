import { Outlet, redirect, useLoaderData } from "@remix-run/react"
import { client } from "~/pocketbase"

export async function loader() {
    const isUserValid = client.authStore.isValid
    if(!isUserValid)
        throw redirect("/login?message=You must Log in first")
    //get orders of the signed in user from the database
    return null    
}
export default function orders() {
    const loaderData = useLoaderData<typeof loader>()
    return <div>
        //display order list
        <Outlet />
    </div>
}