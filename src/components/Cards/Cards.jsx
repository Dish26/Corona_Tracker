/* import React from 'react';
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';

const Cards = ({ data : {confirmed , recovered, deaths, lastUpdate }}) => {
    if(!confirmed ){
        return ( <h3>Loading...! </h3>);
    }
    return(
      <div className={styles.container}>
      <Grid container spacing = {3} justify ="center">
        <Grid item component = {Card} xs ={12} md ={3} className={cx(styles.card, styles.infected)}>
          <CardContent> 
            <Typography color ='textSecondary' gutterBottom> Infected </Typography>
            <Typography variant = "h5"> {confirmed.value}
            <CountUp  start={0} end={confirmed.value} duration={2.5}  />
            </Typography>
            <Typography color="textSecondary"> { new Date (lastUpdate).toDateString()} </Typography>
            <Typography varaint ="body2"> No of total Covid-19 confirmed cases </Typography>
          </CardContent>
        </Grid>
        <Grid item component = {Card} xs ={12} md ={3} className={cx(styles.card, styles.recovered)}>
        <CardContent> 
          <Typography color ='textSecondary' gutterBottom> Recovered </Typography>
          <Typography variant = "h5"> {recovered.value}
          <CountUp  start={0} end={confirmed.value} duration={2.5}  />
           </Typography>
          <Typography color="textSecondary"> { new Date (lastUpdate).toDateString()} </Typography>
          <Typography varaint ="body2"> No of recovered Covid-19 confirmed</Typography>
        </CardContent>
      </Grid>
      <Grid item component = {Card} xs ={12} md ={3} className={cx(styles.card, styles.deaths)}>
      <CardContent> 
        <Typography color ='textSecondary' gutterBottom> Deaths </Typography>
        <Typography variant = "h5"> {deaths.value}
        <CountUp  start={0} end={confirmed.value} duration={2.5}  />
         </Typography>
        <Typography color="textSecondary"> { new Date (lastUpdate).toDateString()}</Typography>
        <Typography varaint ="body2"> No of deaths from Covid-19</Typography>
      </CardContent>
    </Grid>
       </Grid>
      <h1>Cards</h1>
      </div>
    )
}

export default Cards;  */
import React from 'react';
import { Grid } from '@material-ui/core';
import CardComponent from './Card/Card';

import styles from './Cards.module.css';

const Info = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return 'Loading...';
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <CardComponent
          className={styles.infected}
          cardTitle="Infected"
          value={confirmed.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Number of active cases from COVID-19."
        />
        <CardComponent
          className={styles.recovered}
          cardTitle="Recovered"
          value={recovered.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Number of recoveries from COVID-19."
        />
        <CardComponent
          className={styles.deaths}
          cardTitle="Deaths"
          value={deaths.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Number of deaths caused by COVID-19."
        />
      </Grid>
    </div>
  );
};
export default Info;
