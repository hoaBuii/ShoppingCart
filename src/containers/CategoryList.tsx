import { connect } from "react-redux";
import React from "react";
import { toggleCategory } from "../actions";
import Picker from "../components/shopping/Picker";

const mapStateToProps = (state:any) => ({
    categoriesList: state.categoryList,
    selectedCategory: state.selectedCategory
})

const mapDisptachToProps = (dispatch:any) => ({
    onChange: (name:string) => dispatch(toggleCategory(name))
})

export default connect(
    mapStateToProps,
    mapDisptachToProps
)(Picker);