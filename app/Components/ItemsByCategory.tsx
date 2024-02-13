import { ActionFunctionArgs } from "@remix-run/node";
import { Form } from "@remix-run/react";

export default function ItemsByCategory(props: {category: string, items: {id: string, name: string, image: string, category: string, price: number}[]}){
    const itemList = props.items.map(item => <Item key={item.id} item={item}/>)
    return (
        <ul>
            {itemList}
        </ul>
    )
}

function Item(props: {item: {id: string, name: string, image: string, category: string, price: number}}){
    return (
        <div>
            {/* <img src={props.item.image} alt="Category Image" onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "../../category-placeholder-image.jpg"
            }}/> */}
            <img src="../../category-placeholder-image.jpg" alt="placeholder image" />
            <p>{props.item.name}</p>
            <p>{props.item.price}</p>
            <Form method="POST">
                <button type="submit" name="_item" value={props.item.id}>Add to Cart</button>
            </Form>
        </div>
    )
}