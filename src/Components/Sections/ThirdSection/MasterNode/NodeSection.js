import React from 'react';
import { Typography, makeStyles, withStyles, Box } from "@material-ui/core";
import Node from '../../../../assets/masternodes1.png';
import '../../../css/thirdSection.css';


const useStyles = makeStyles({
    HeadingComponent: {
        color: 'white',
        marginTop: '23%',
        width: '50%'

    },
    NodeSection:{
        marginTop: '10%',
        marginLeft: '5%',
        marginRight : '4%',
    }

   

  });



const NodeSection = () => {
    const classes = useStyles()
    return (
        <>
        <section className={classes.NodeSection}>
            <div className="buildSection">
            <img src={Node}/>

        <div className={classes.HeadingComponent}>
            <Typography variant="h2" component="h2">
            Masternodes
            </Typography>
            <br/>            <br/>

            <Typography variant="h6">
            Syscoin Masternodes were launched and implemented along with Syscoin 3.0 on May 1st 2018. 
            Based on Dash code, Syscoin enhanced the masternodes to offer high transactional throughput using Z-DAG, governance issuance and seniority.
               </Typography>
        </div>

    

        </div>
        </section>


        

        </>
    )
}

export default NodeSection
