import React, { Component } from 'react'
import ShoppingCartComponent from './ShoppingCartComponent'
import {connect} from 'react-redux'

import {deleteProductLineFromCart} from '../reducers/cart'


const MapStateToProps = (state) => {
	const cart = state.cart
	return {
		productLines: cart.productLines,
		totalCost: cart.totalCost
	}
}

const MapDispatchToProps = (dispatch) => {
	return {
		deleteProduct: (productLineId) => {
			dispatch(deleteProductLineFromCart(productLineId))
		}
	}
}


class ShoppingCartContainer extends Component {

	constructor(props) {
		super(props)
this.clickHandler = this.clickHandler.bind(this)
this.setTotalCost = this.setTotalCost.bind(this)
}


clickHandler (productLineId) {
	event.preventDefault()
	this.props.deleteProduct(productLineId)
}

setTotalCost () {
	return this.props.productLines.length.reduce((a, b) => a.totalCost + b.totalCost)
}

	render() {
		if (this.props.productLines.length) {

			return (
				<div>
					<ShoppingCartComponent {...this.props} onClick={this.clickHandler}  />
					<p>Order Total Cost: $</p>
					<input type="submit" value="CHECKOUT" />
				</div>
			)
		} else {
			return (
				<div>
				<h1>Your Cart Is Empty!</h1>
				</div>
				)
		}
	}


}


export default connect(MapStateToProps, MapDispatchToProps)(ShoppingCartContainer)

