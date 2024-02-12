import { LoaderFunctionArgs } from "@remix-run/node";

export async function loader({params}: LoaderFunctionArgs) {
    const orderId = params.orderId
    console.log(orderId)
    return null
}

export default function order() {
    return <div>Order details goes here</div>
}