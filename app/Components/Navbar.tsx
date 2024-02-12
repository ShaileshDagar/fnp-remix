import { NavLink } from "@remix-run/react";

export default function NavBar(props: {numberofCategories: number}) {
    const num_category = props.numberofCategories;
    const valuesArray = Array.from({ length: num_category }, (_, index) => index + 1);
    return (
        <nav >
            {valuesArray.map((value) => <Category num={value}/>)}
        </nav>
    )
}

function Category(props: {num: number}) {
    return (
        <div className="dropdown">
            <NavLink to="/">Category {props.num}</NavLink>
            <div className="dropdown-content">
                <ul>
                    <NavLink to="/">Subcategory 1</NavLink>
                    <NavLink to="/">Subcategory 2</NavLink>
                    <NavLink to="/">Subcategory 3</NavLink>
                    <NavLink to="/">Subcategory 4</NavLink>
                </ul>
            </div>
        </div>
    )
}