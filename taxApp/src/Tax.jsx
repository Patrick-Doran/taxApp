import React, { useState } from "react";
function Tax(){
    const [subTotal, setSubTotal] = useState(' ');
    const [finalTotal, setFinalTotal] = useState(' ');
    const [items, setItems] = useState({
        item1: '',
        item2: '',
    })

    // Value of tax as decimal
    const taxTotal = ((finalTotal - subTotal) / subTotal);
    const itemFinal1 = (items.item1 * taxTotal) + items.item1 * 1;
    const itemFinal2 = (items.item2 * taxTotal) + items.item2 * 1;
    return(
        <div className="main-content">
            <div className="tax-content">
                <h1>Itemization of Tax Items</h1>
                <h2>Initial Total Values</h2>
                {/* Enter a sub total and a final total, the equation will value out the tax */}
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
                <p>Your tax is {taxTotal * 100}</p>
            </div>
            {/* Take the taxTotal value and calculate the value with each item plus tax
                Automatically add up items to total value to compare to invoice */}
            <div className="item-content">
                <h2>Itemization</h2>
                <label>
                    Item 1:
                    <input name="item1" type='number' 
                    value={items.item1}
                    onChange={e => setItems({
                        ...items,
                        item1: e.target.value,
                    })}
                    />
                </label>
                <p>Amount with tax: {itemFinal1}</p>
                <label>
                    Item 2:
                    <input name="item2" type='number' 
                    value={items.item2}
                    onChange={e => setItems({
                        ...items,
                        item2: e.target.value,
                    })}
                    />
                </label>
                <p>Amount with tax: {itemFinal2}</p>
                <h3>Total of taxed items: {parseFloat(itemFinal1) + parseFloat(itemFinal2)}</h3>
            </div>
        </div>
    );
}

export default Tax;