import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["nezuko", "dragon ball"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    console.log(newCategory)
    setCategories([newCategory, ...categories]);
  }

  console.log(categories);

  return (
    <>
      <h1>GifExpertApp</h1>

      {/* input */}
      <AddCategory 
        // setCategories={setCategories}
        onNewCategory={(event) => onAddCategory(event)}
      />

      {/* listadode gif  */}
      <ol>
        {categories.map((caregory) => {
          return <li key={caregory}>{caregory}</li>;
        })}
      </ol>
    </>
  );
};
