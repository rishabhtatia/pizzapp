import React, { Component } from 'react';
import ListComponents from '../../components/ListComponents/ListComponents';
import Aux from '../../hoc/Auxilary';
import Modal from '../../components/UI/Modal/Modal';
class PizzaBuilder extends Component {

    state = {
        pizzaList : [{
            name:"Margherita",
            content:"A hugely popular margherita,with a deliciously tangy single cheese topping",
            price: 400,
            discountPercent: 10,
            pricingText:"400 RS (10% of on MRP)"
        },
    {
        name:"Chicken Golden Delight",
        content:"Mmm! Barbeque chicken with a topping of golden corn loaded with extra cheese. Worth its weight in gold!",
        price:300,
        discountPercent:10,
        pricingText: "Price:: 300 RS (10% of on MRP)"
    }],
    addToCart:true
     }
     

    render () {
    
    return (
        <Aux>
            <h1 style={{textAlign:"center"}}>Pizza Builder Component</h1>
            <Modal show={this.state.addToCart}></Modal>
            <ListComponents pizzaList={this.state.pizzaList}/>
        </Aux>
    )
}

}

export default PizzaBuilder;