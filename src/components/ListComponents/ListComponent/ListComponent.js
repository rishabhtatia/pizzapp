import React from 'react';
import styles from './ListComponent.module.css';
const images = require.context("../../../assests/images", true);

const listComponent = (props) => {   
        
    return (
        <div className={styles.ListComponent}>
            <img src={images(`./${props.name.replaceAll(" ","_")}.jpg`)} alt ={props.name}/>
            <h2 className={styles.Name}>{props.name}</h2>
            <p className={styles.Content}>{props.content}</p>
            <p className={styles.PricingText}>Price:: {props.pricingText}</p>
            <button type="button" className={styles.AddToCartButton}>ADD TO CART</button>
        </div>
        )
}

export default listComponent;