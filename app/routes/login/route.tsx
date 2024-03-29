import { ActionFunctionArgs, MetaFunction } from "@remix-run/node";
import { Form, redirect, useSearchParams } from "@remix-run/react";
import { client, login, oAuthLogin } from "~/pocketbase";

export const meta: MetaFunction = () => {
    return [
      { title: "Sign In" },
      { name: "description", content: "Sign in as Existing User" },
    ];
};
  
export async function action({request}: ActionFunctionArgs) {
    const formData = await request.formData()
    const _action = formData.get("_action")
    if(_action === "normal"){
        const email = formData.get("email")
        const password = formData.get("password")
        await login(email, password)
    }
    else
        await oAuthLogin()
    return redirect("/")
}

export function loader() {
    const isUserValid = client.authStore.isValid
    if(isUserValid)
        throw redirect("/")
    return null
  }

export default function Login() {
    const searchParams = useSearchParams()
    return <main>
        <div className="signup-box">
            <h1>Sign In</h1>
            {searchParams && <p>{searchParams[0].get("message")}</p>}
            <Form method="post" className="signup-form">
                <input
                    autoComplete="email"
                    type="email"
                    placeholder="Email"
                    name="email"/>
                <input
                    type="password"
                    placeholder="Password"
                    name="password"/>
                <button type="submit" name="_action" value="normal">Sign in</button>
                <button type="submit" name="_action" value="oauth">Sign in with Google</button>
            </Form>
        </div>
    </main>
}