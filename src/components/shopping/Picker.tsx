import React from "react";

interface IPicker {
    selectedCategory: string,
    categoriesList: Array<any>,
    onChange: (name:string) => void
}

// function Picker({selectedCategory, categoriesList, onChange}: IPicker){
function Picker(){
    return(
        // <select value={selectedCategory} onChange={e => onChange(e.target.value)}>
        //     {
        //         categoriesList && categoriesList.length &&
        //         categoriesList.map((category, index) => {
        //             return(
        //                 <option key={index} value={category.name}>{category.name}</option>
        //             );
        //         })
        //     }
        // </select>

        <div className="row">
            <div className="col-md-12">
                <div className="filter__menu__container">
                    <div className="product__menu">
                        <button data-filter="*"  className="is-checked">All</button>
                        <button data-filter=".cat--1">T-Shirt</button>
                        <button data-filter=".cat--2">Bags</button>
                        <button data-filter=".cat--3">Decoration</button>
                        <button data-filter=".cat--4">Accessories</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Picker;