import React, { Fragment, Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BurgerControls from '../../components/Burger/BuildControls/BuildControls';

class BurgerBuilder extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {...};
  // }

  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    }
  }

  render () {
      return (
        <Fragment>
          <Burger ingredients={this.state.ingredients}/>
          <BurgerControls />
        </Fragment>
      );
  }
}

export default BurgerBuilder;
