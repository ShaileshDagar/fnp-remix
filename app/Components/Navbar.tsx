import { NavLink } from "@remix-run/react";

export default function NavBar() {
    return (
        <nav >
            <div id="category-1" className="dropdown">
                <NavLink to="/">Category 1</NavLink>
                <div className="dropdown-content">
                    <ul>
                        <NavLink to="/">Subcategory 1</NavLink>
                        <NavLink to="/">Subcategory 2</NavLink>
                        <NavLink to="/">Subcategory 3</NavLink>
                        <NavLink to="/">Subcategory 4</NavLink>
                    </ul>
                </div>
            </div>
            <div id="category-2" className="dropdown">
                <NavLink to="/">Category 2</NavLink>
                <div className="dropdown-content">
                    <ul>
                        <NavLink to="/">Subcategory 1</NavLink>
                        <NavLink to="/">Subcategory 2</NavLink>
                        <NavLink to="/">Subcategory 3</NavLink>
                        <NavLink to="/">Subcategory 4</NavLink>
                    </ul>
                </div>
            </div>
            <div id="category-3" className="dropdown">
                <NavLink to="/">Category 3</NavLink>
                <div className="dropdown-content">
                    <ul>
                        <NavLink to="/">Subcategory 1</NavLink>
                        <NavLink to="/">Subcategory 2</NavLink>
                        <NavLink to="/">Subcategory 3</NavLink>
                        <NavLink to="/">Subcategory 4</NavLink>
                    </ul>
                </div>
            </div>
            <div id="category-4" className="dropdown">
                <NavLink to="/">Category 4</NavLink>
                <div className="dropdown-content">
                    <ul>
                        <NavLink to="/">Subcategory 1</NavLink>
                        <NavLink to="/">Subcategory 2</NavLink>
                        <NavLink to="/">Subcategory 3</NavLink>
                        <NavLink to="/">Subcategory 4</NavLink>
                    </ul>
                </div>
            </div>
        </nav>
    )
}