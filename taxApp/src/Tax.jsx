import React, { useState } from "react";
function Tax(props){
    const [subTotal, setSubTotal] = useState(' ');
    const [finalTotal, setFinalTotal] = useState(' ');

    const taxTotal = ((finalTotal - subTotal) / subTotal) * 100;
    return(
        <div className="main-content">
            <h1>Itemization of Tax Items</h1>
            <label>
                Enter the sub-total:
                <input name="subTotal" type='number' 
                value={subTotal}
                onChange={e => setSubTotal(e.target.value)}
                />
            </label>
            <br></br>
            <label>
                Enter the final total:
                <input name="finalTotal" type='number' 
                value={finalTotal}
                onChange={e => setFinalTotal(e.target.value)}
                />
            </label>
            <p>Your tax is {taxTotal}</p>

            
        </div>
    );
}

export default Tax;