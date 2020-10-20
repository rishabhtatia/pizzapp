import React from 'react';
import ListComponent from './ListComponent/ListComponent';
import styles from './ListComponents.module.css';

const listComponents = (props) => {
    let pizzaList = props.pizzaList
    .map((item) => {
            return (             
            <ListComponent name={item.name} content={item.content} pricingText={item.pricingText}/>            
            )
    })  
    
    return (
        <div className={styles.pizzaContainer}>
        {pizzaList}
        </div>
    )
}

export default listComponents;