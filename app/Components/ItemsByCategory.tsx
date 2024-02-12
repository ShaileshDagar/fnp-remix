import { ActionFunctionArgs } from "@remix-run/node";

export async function action({request}: ActionFunctionArgs) {
    const itemId = (await request.formData()).get("item")
    //Add the corresponding item to user's cart
    return null
}

export default function ItemsByCategory(props: {category: string, items: {id: string, name: string, imageUrl: string, category: string, price: number}[]}){
    //Map list of items to an item
    const itemList = props.items.map(item => <Item item={item}/>)
    return (
        <ul>
            {itemList}
        </ul>
    )
}

function Item(props: {item: {id: string, name: string, imageUrl: string, category: string, price: number}}){
    return (
        <div>
            <img src={props.item.imageUrl} alt="Category Image" onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "../../category-placeholder-image.jpg"
            }}/>
            <p>{props.item.name}</p>
            <p>{props.item.price}</p>
            <button type="submit" name="item" value={props.item.id}>Add to Cart</button>
        </div>
    )
}