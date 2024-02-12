import { redirect } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"
import { client } from "~/pocketbase"

export async function loader() {
    const isUserValid = client.authStore.isValid
    if(!isUserValid)
        throw redirect("/login?message=You must Log in first")
    //To-Do: Get user's cart from the database
    return null
}

export default function Cart() {
    const loaderData = useLoaderData<typeof loader>()
    return <>Cart goes here!</>
}