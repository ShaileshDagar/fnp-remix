import { NavLink, Form, useLoaderData } from "@remix-run/react";
import { client } from "~/pocketbase";

// export async function loader() {
//   return client.authStore.isValid
// }

export default function Header(props: {cartItemsCount: number, isUserValid: boolean}) {
    return (
      <header id="site-header">
        <TopTape isUserValid={props.isUserValid}/>
        <Search cartItemsCount={props.cartItemsCount}/>
      </header>
    )
}

function TopTape(props: {isUserValid: boolean}) {
  // const isUserValid = useLoaderData<typeof loader>()
  return (
    <div id="top-tape">
      <label htmlFor="currency-selector">Currency{"  "}</label>
      <select id="currency-selector">
        <option value="USD">USD</option>
        <option value="INR">INR</option>
        <option value="CAD">CAD</option>
      </select>
      <NavLink to="/">Corporate Gifts</NavLink>
      <NavLink to="/">Weddings</NavLink>
      {!props.isUserValid && <NavLink to="login">Login</NavLink>}       {/*Conditionally render when not logged in*/}
      {!props.isUserValid &&<NavLink to="signup">Sign Up</NavLink>}    {/*Conditionally render when not logged in*/}
      {props.isUserValid && <Form method="post"><button type="submit">Logout</button></Form>}
      <nav className="dropdown">
        <span>More</span>
        <div className="dropdown-content">
          <ul>
            <NavLink to="/" title="Link to Home Page">Link 1</NavLink>
            <NavLink to="/" title="Link to Home Page">Link 2</NavLink>
            <NavLink to="/" title="Link to Home Page">Link 3</NavLink>
          </ul>
        </div>
      </nav>
    </div>
  )
}

function Search(props: {cartItemsCount: number}) {
  // const cartItemsCount = useLoaderData<typeof loader>()
    return (
      <div id="search">
        <img id="logo" src="../logo.jpg" alt="fnp logo"/>
        <Form method="POST">
          <input role="searchbox" type="text" name="search" placeholder="Search products..."/>
          <button type="submit">Submit</button>
        </Form>
        <div className="dropdown-container">
          <span >Enter Delivery Pincode</span>
          <Form method="POST" className="dropdown-content" id="pincode">
            <input type="number" name="pincode" placeholder="Enter Delilvery Pincode" defaultValue="110086"/>
            <button type="submit">Go</button>
          </Form>
        </div>
        <div id="user" className="dropdown-container-2">
          <img src="../../user.png" />
          <ul className="dropdown-content">
              <NavLink to="/orders">Orders</NavLink>
          </ul>
        </div>
        <NavLink to="/cart"><img src="../cart1.png"/></NavLink>
        <h1>{props.cartItemsCount}</h1>
      </div>
    )
}