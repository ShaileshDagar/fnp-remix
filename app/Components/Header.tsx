import { NavLink, Form } from "@remix-run/react";

export default function Header() {
    return (
      <header>
        <TopTape />
        <Search />
      </header>
    )
}

function TopTape() {
    return (
      <div id="top-tape">
        <label htmlFor="currency-selector">Currencies:{" "}</label>
        <select id="currency-selector">
          <option value="USD">USD</option>
          <option value="INR">INR</option>
          <option value="CAD">CAD</option>
        </select>
        <NavLink to="/">| Corporate Gifts</NavLink>
        <NavLink to="/">| Weddings</NavLink>
        <nav className="dropdown">
          <span>More</span>
          <div className="dropdown-content">
            <ul>
              <li><a href="/" title="Link to Home Page">Link 1</a></li>
              <li><a href="/" title="Link to Home Page">Link 2</a></li>
              <li><a href="/" title="Link to Home Page">Link 3</a></li>
            </ul>
          </div>
        </nav>
      </div>
    )
}

function Search() {
    return (
      <div id="search" style={{display: "inline"}}>
        <img src="../logo.jpg" alt="fnp logo"/>
        <Form method="POST">
          <input type="text" name="search" placeholder="Search products..."/>
          <button type="submit">Submit</button>
        </Form>
        <div className="dropdown">
          <span style={{display: "block"}}>Enter Delivery Pincode</span>
          <Form method="POST" className="dropdown-content">
            <input type="number" name="pincode" placeholder="Enter Delilvery Pincode" defaultValue="110086"/>
            <button type="submit">Go</button>
          </Form>
        </div>
        <NavLink to="/cart"><img src="../cart1.png"/></NavLink>
        <div id="user" className="dropdown">
          <span><img src="../../user.png" /></span>
          <ul className="dropdown-content">
              <NavLink to="/orders">Orders</NavLink>
          </ul>
        </div>
      </div>
    )
}