import React from "react";

interface IPicker {
    selectedCategory: string,
    categoriesList: Array<any>,
    onChange: (name:string) => void
}

function Picker({selectedCategory, categoriesList, onChange}: IPicker){
    debugger;
    return(
        <select value={selectedCategory} onChange={e => onChange(e.target.value)}>
            {
                categoriesList && categoriesList.length &&
                categoriesList.map((category, index) => {
                    return(
                        <option key={index} value={category.name}>{category.name}</option>
                    );
                })
            }
        </select>
    );
}

export default Picker;