import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card , Grid , CardActionArea, CardActions, CardContent,
  CardMedia  , Typography} from '@material-ui/core';
import Service1 from '../../../../assets/service/SERVICE IMAGE 2.png';
import Service2 from '../../../../assets/service/SERVICE IMAGE4.png';
import Service3 from '../../../../assets/service/SERVICE IMAGE7.png';
import Service4 from '../../../../assets/service/SERVICE IMAGE11.png';
import useWebAnimations from "@wellyshen/use-web-animations";

import '../../../css/secondSection.css'

const useStyles = makeStyles({
    root: {
    //   maxWidth: 345,
    backgroundColor : '#00000000',
    marginBottom: '10%',
    width: '350px',


    },

    root1: {
      backgroundColor : '#00000000',
      width: '350px',
      marginBottom: '10%',


    },
    cardContainer:{
        display : 'flex',

    },

  });
  
const CardSection = () => {
    const classes = useStyles();

    const heading1 = useWebAnimations({
      keyframes: {
        transform: "translateY(20px)",
      },
      timing: {
        duration: 1500, // Run for 1000ms
        iterations: 2, // Repeat once
        direction: "alternate", // Run the animation forwards and then backwards
        easing: "ease-in-out", // Use a fancy timing function
      },

    })
    return (
        < >
        <section >
        <div className='AllCards' >
        <Grid  className={classes.cardContainer}>
        <div className="card1">

        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          image={Service1}
          title="Contemplative Reptile"
        />
        <CardContent className="cardContent">
          <Typography gutterBottom variant="h4" component="h2">
          High Transaction Throughput
          </Typography>
          <Typography variant="body2" component="h6">
          Syscoin's unique Z-DAG technology means the network can handle a transaction throughput of 
          60158 Syscoin Platform Token transactions per second (TPS), while remaining decentralised and secure.
          </Typography>
        </CardContent>
      </CardActionArea>

    </Card> 
      </div>

      <div className="card2">
    <Card className={classes.root1}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          image={Service2}
          title="Contemplative Reptile"
        />
        <CardContent className="cardContent">
          <Typography gutterBottom variant="h4" component="h2">
          Interoperability
          </Typography>
          <Typography variant="body2" component="h6">
          Build bridges between blockchains with Syscoin Bridge,
           interoperability with other chains has never been easier.

          </Typography>
        </CardContent>
      </CardActionArea>
 
    </Card> 
    </div>
      {/* down grid */}
     </Grid>

     <Grid className={classes.cardContainer}>
     <div className="card1">

        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          image={Service3}
          title="Contemplative Reptile"
        />
        <CardContent  className="cardContent">
          <Typography gutterBottom variant="h4" component="h2">
          High Security
          </Typography>
          <Typography variant="body2" component="h6">
          Syscoin is merge-mined with 
          Bitcoin which provides Syscoin with an incredibly robust and secure network.
          </Typography>
        </CardContent>
      </CardActionArea>

    </Card> 
</div>

<div className="card2">

    <Card className={classes.root1}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          image={Service4}
          title="Contemplative Reptile"
        />
        <CardContent className="cardContent">
          <Typography gutterBottom variant="h4" component="h2">
          Low Fees

          </Typography>
          <Typography variant="body2" component="h6">
          The fees to transact Syscoin Platform Tokens or Assets are very low, making them 
          suited for a wide range of use cases such as point-of-sale transactions.
          </Typography>
        </CardContent>
      </CardActionArea>
  
    </Card> 
      </div>
     </Grid>

        </div>
        </section>
        </>
    )
}

export default CardSection
