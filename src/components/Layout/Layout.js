import React, { Component } from 'react';
import Aux from '../../hoc/Auxilary';
import styles from './Layout.module.css';

class Layout extends Component {    
    render() {
        return (
            <Aux>
                <h1 className={styles.Heading}>PIZZA ORDER APP</h1>
                <main>
                 {this.props.children}
             </main>           
         </Aux>
        )
    }
}
export default Layout;