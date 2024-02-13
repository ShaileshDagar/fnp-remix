import { json, redirect } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"
import { client, getCartItems } from "~/pocketbase"

export async function loader() {
    const isUserValid = client.authStore.isValid
    if(!isUserValid)
        throw redirect("/login?message=You must Log in first")
    return json({cartItems: await getCartItems()})
}

export default function Cart() {
    const loaderData = useLoaderData<typeof loader>() as unknown as {cartItems: {category: String, id: string, image: string, name: string, price: number}[]}
    let listOfItems = null
    if(loaderData.cartItems.length > 0)
        listOfItems = loaderData.cartItems?.map(item => <Item key={item.id} item={item}/>)
    return (
        <>{listOfItems ? listOfItems : <h2>No items in your cart!</h2>}</>
    )
}

function Item(props : {item: {category: String, id: string, image: string, name: string, price: number}}){
    return (
        <div className="cart-item">
            <img src={props.item.image} />
            <p>{props.item.name}</p>
            <p>{props.item.price}</p>
        </div>
    )
}