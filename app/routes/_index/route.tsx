import { json, type MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Cards from "~/Components/Cards";
import NavBar from "~/Components/Navbar";
import Slider from "~/Components/Slider";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
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
  return json({categories: categories})
}

export default function Index() {
  const loaderData = useLoaderData<typeof loader>()
  const numberOfCategories = loaderData.categories.length
  return (
    <div>
      <NavBar numberofCategories={numberOfCategories}/>
      <Slider />
      <Cards categories={loaderData.categories}/>
    </div>
  );
}
