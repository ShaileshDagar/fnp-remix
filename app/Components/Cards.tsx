import { NavLink } from "@remix-run/react"

export default function Cards(props: {categories: {name: string, url: string, imageUrl: string}[]}) {
    const categoriesList = props.categories.map(category => <Card name={category.name} url={category.url} imageUrl={category.imageUrl}/>)
    return (
        <nav>{categoriesList}</nav>
    )
}

function Card(props : {name: string, url: string, imageUrl: string}) {
    return (
        <div className="category-card">
            <NavLink to={props.url}>
                {/* <img src={props.imageUrl} alt="Category Image" onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "../../category-placeholder-image.jpg"
                }}/> */}
                <img src="../../category-placeholder-image.jpg" alt="placeholder image" />
                <p>{props.name}</p>
            </NavLink>
        </div>
    )
}