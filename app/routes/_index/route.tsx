import { json, type MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Cards from "~/Components/Cards";
import ItemsByCategory from "~/Components/ItemsByCategory";
import NavBar from "~/Components/Navbar";
import Slider from "~/Components/Slider";

export const meta: MetaFunction = () => {
  return [
    { title: "FnP Index" },
    { name: "description", content: "Welcome to FnP!" },
  ];
};

export async function loader(){
  //To-Do: get all the categories from db
  const categories = [
      {name: "Category 1", url: "url", imageUrl: "url"}, 
      {name: "Category 2", url: "url", imageUrl: "url"}, 
      {name: "Category 3", url: "url", imageUrl: "url"}, 
      {name: "Category 4", url: "url", imageUrl: "url"}
  ]
  //To-DO: get 5 items for each category and return it. 
  return json({categories: categories})
}

export default function Index() {
  const loaderData = useLoaderData<typeof loader>()
  const numberOfCategories = loaderData.categories.length
  const items = [
    {
      id: "hello1",
      name: "Item 1",
      price: 45,
      imageUrl: "../../../category-placeholder-image.jpg",
      category: "Category-1"
    },
    {
      id: "hello2",
      name: "Item 1",
      price: 45,
      imageUrl: "../../../category-placeholder-image.jpg",
      category: "Category-1"
    },
    {
      id: "hello3",
      name: "Item 1",
      price: 45,
      imageUrl: "../../../category-placeholder-image.jpg",
      category: "Category-1"
    },
    {
      id: "hello",
      name: "Item 1",
      price: 45,
      imageUrl: "../../../category-placeholder-image.jpg",
      category: "Category-1"
    }
  ]
  return (
    <div>
      <NavBar numberofCategories={numberOfCategories}/>
      <Slider />
      <Cards categories={loaderData.categories}/>
      <ItemsByCategory category="Category 1" items={items}/>
    </div>
  );
}
