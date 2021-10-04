import { connect } from "react-redux";
import {buyCart } from "../actions";
import Cart from "../components/Cart";

const mapStateToProps = (state:any) => ({
    cartList: state.cartList
})

const mapDisptachToProps = (dispatch:any) => ({
    onBuyCart: () => dispatch(buyCart())
})

export default connect(
    mapStateToProps,
    mapDisptachToProps
)(Cart);