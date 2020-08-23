// will here create a basic class based component

import React, {Component} from 'react';
import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';
import coronaImage from './images/image (1).png';

import styles from './App.module.css';
import {fetchData} from './api';

class App extends Component{
    state={
      data:{},
      country: '',

    }

async componentDidMount (){
     const fetchedData = await fetchData();
     console.log(fetchedData);

     this.setState({data: fetchedData})
 }

 //we will pass this method as a prop to the <CountryPicker /> component below
 handleCountryChange = async( country ) => {

  const fetchedData = await fetchData(country);
   
  this.setState({data: fetchedData, country: country})
 }
    
  render(){
      return(
        <div className={styles.container}>
        <img className={styles.image} src={coronaImage} alt="COVID-19" />
          <Cards data={this.state.data} />
          <CountryPicker data = {this.state.data} handleCountryChange={this.handleCountryChange}/>
          <Chart data= {this.state.data} country={this.state.country} />
         </div>
      )
  }
}

export default App;