import React, { useState, useEffect } from "react";
// import SearchForm from "../common/SearchForm";
// import RecipeApi from "../api/api";
import RecipeCard from "./RecipeCard";


function RecipeList() {
console.debug("RecipeList");

  // const [companies, setCompanies] = useState(null);

  // useEffect(function getCompaniesOnMount() {
  //   console.debug("RecipeList useEffect getCompaniesOnMount");
  //   search();
  // }, []);

  /** Triggered by search form submit; reloads companies. */
  // async function search(name) {
  //   let companies = await JoblyApi.getCompanies(name);
  //   setCompanies(companies);
  // }

  // if (!companies) return <LoadingSpinner />;

  return (
    <div>
      {/* {recipes.map(r=>(
        <RecipeCard key={...r} />
      ))} */}
      
      {/* <div className="CompanyList col-md-8 offset-md-2">
        <SearchForm searchFor={search} />
        {companies.length
            ? (
                <div className="CompanyList-list">
                  {companies.map(c => (
                      <CompanyCard
                          key={c.handle}
                          handle={c.handle}
                          name={c.name}
                          description={c.description}
                          logoUrl={c.logoUrl}
                      />
                  ))}
                </div>
            ) : (
                <p className="lead">Sorry, no results were found!</p> */}
            {/* )} */}
      </div>
  );
}

export default RecipeList;
