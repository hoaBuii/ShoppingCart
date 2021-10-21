import React from "react";

interface IPicker {
    selectedCategory: string,
    categoriesList: Array<any>,
    onChange: (name:string) => void
}

function Picker({selectedCategory, categoriesList, onChange}: IPicker){
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
                        {/* <button data-filter="*"  className="is-checked">All</button>
                        <button data-filter=".cat--1">T-Shirt</button>
                        <button data-filter=".cat--2">Polo-Shirt</button>
                        <button data-filter=".cat--3">Kaki-Pants</button>
                        <button data-filter=".cat--4">Jeans-Pants</button> */}
                        <button style={{cursor: "pointer"}} className={selectedCategory === 'All' ? "is-checked" : ""} onClick={e => onChange("All")}>All</button>
                        <button style={{cursor: "pointer"}} className={selectedCategory === 'T-Shirt' ? "is-checked" : ""} onClick={e => onChange("T-Shirt")}>T-Shirt</button>
                        <button style={{cursor: "pointer"}} className={selectedCategory === 'Polo-Shirt' ? "is-checked" : ""} onClick={e => onChange("Polo-Shirt")}>Polo-Shirt</button>
                        <button style={{cursor: "pointer"}} className={selectedCategory === 'Kaki-Pants' ? "is-checked" : ""} onClick={e => onChange("Kaki-Pants")}>Kaki-Pants</button>
                        <button style={{cursor: "pointer"}} className={selectedCategory === 'Jeans-Pants' ? "is-checked" : ""} onClick={e => onChange("Jeans-Pants")}>Jeans-Pants</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Picker;