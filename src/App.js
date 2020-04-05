import React, { useState } from 'react';
import './App.css';
//import { Switch, Route } from 'react-router-dom';
//import HomePage from './components/HomePage/HomePage';
import NavBar from './components/NavBar/NavBar';
import HomePage from './components/HomePage/HomePage';
//import DetailPage from './components/DetailPage/DetailPage';

// Problem-1 --> haber linkine gidip geri gelince, site tekrar default degerlere gidiyor

function App(props) {

  // bunlarin hepsini App.js 'i render yapmak icin yaptik

  const [stateCategory, updateStateCategory] = useState(null) // gelen category'leri alt componente atabilmek icin state yaptik 
 
  const [stateCountry, updateStateCountry] = useState(null) // gelen country'leri alt componente atabilmek icin state yaptik

  const [stateSearch, updateStateSearch] = useState(null) // gelen search'leri alt componente atabilmek icin state yaptik


  const categoriesHandler = (category, country) => { // data dan kastimiz navbar dan gelen categoriler
    console.log(category)
    console.log(country)
    updateStateCategory(category)
    updateStateCountry(country)

    console.log(stateCategory)
    console.log(stateCountry)
  }

  // const countriesHandler = (country) => {
  //   updateStateCountry(country)
  // }

  const searchHandler = (search) => {
    //console.log(search)
    updateStateSearch(search)
  }

  //click2= {countriesHandler}
  return (
    <div>

      <NavBar click= {categoriesHandler} click3={searchHandler}/>

      <HomePage category={stateCategory} country={stateCountry} search={stateSearch}/>

      {/*
      <Switch>
        <Route exact path="/" component={ () => <HomePage category={stateCategory} country={stateCountry} search={stateSearch}/> } /> {/* route'lu componente bu sekilde props gonderiyoruz 
        <Route path="/news-detail" component={DetailPage} />
         <Route path="/portfolio" component={PortfolioPage} />
        <Route component={Page404} />  /}
      </Switch>
      */}

    </div>
  );
}

export default App;
