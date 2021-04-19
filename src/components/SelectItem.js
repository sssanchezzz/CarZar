import React from 'react';

const SelectItem = (props) => {
    const { title } = props;
    return (
        <div className='select-item'>
            <h4>{title}</h4>

            <select className='search-select'>
                <option></option>
                <option>1</option>

                {/* {createSelectItems(arr)} */}
            </select>
        </div>
    );
};

const createSelectItems = (arr) => {
    let items = [];
    for (let i = 0; i < arr.length; i++) {
        items.push(
            <option key={i} value={arr[i]}>
                {arr[i]}
            </option>
        );
        //here I will be creating my options dynamically based on
        //what props are currently passed to the parent component
    }
    return items;
};
export default SelectItem;
