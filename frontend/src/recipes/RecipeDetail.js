import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";


function RecipeDetail(){
  const { id } = useParams();
  // const [company, setCompany] = useState(null);


  // useEffect(() => {
  //   async function search(){
  //     setCompany(await JoblyApi.getCompany(id));
  //   }
  //   search();
  // }, [id]);

  return (
    <div> 
      recipe detail here
      {/* { <div>
            <h3>{recipe.name}</h3> */}
            {/* {recipe.jobs.map(j => <p> <b>{j.title}</b>
            <p>Salary: {j.salary}</p>  <p>Equity: {j.equity}</p> */}
          </div>

      // }
    // </div>
  );
}

export default RecipeDetail;