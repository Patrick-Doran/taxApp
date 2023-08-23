import React, { useState } from "react";
function Tax(props){
    const [subTotal, setSubTotal] = useState(' ');
    const [finalTotal, setFinalTotal] = useState(' ');

    const taxTotal = ((finalTotal - subTotal) / subTotal) * 100;
    return(
        <div className="main-content">
            <h1>Itemization of Tax Items</h1>
            <h2>Initial Total Values</h2>
            <label>
                Enter the sub-total:
                <input name="subTotal" type='number' 
                value={subTotal}
                onChange={e => setSubTotal(e.target.value)}
                />
            </label>
            <label>
                Enter the final total:
                <input name="finalTotal" type='number' 
                value={finalTotal}
                onChange={e => setFinalTotal(e.target.value)}
                />
            </label>
            <p>Your tax is {taxTotal}</p>
            <h2>Itemization</h2>
            <label>
                Item 1:
                <input name="item1" type='number' />
            </label>
            <label>
                Item 2:
                <input name="item2" type='number' />
            </label>
            <button name="btn">Add More Items</button>
        </div>
    );
}

export default Tax;