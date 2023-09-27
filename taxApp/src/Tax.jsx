import React, { useState } from "react";
function Tax(){
    const [subTotal, setSubTotal] = useState(' ');
    const [finalTotal, setFinalTotal] = useState(' ');
    const [items, setItems] = useState({
        item1: '',
        item2: '',
        item3: '',
        item4: '',
    })

    // Value of tax as decimal
    const taxTotal = ((finalTotal - subTotal) / subTotal);
    const itemFinal1 = (items.item1 * taxTotal) + items.item1 * 1;
    const itemFinal2 = (items.item2 * taxTotal) + items.item2 * 1;
    const itemFinal3 = (items.item3 * taxTotal) + items.item3 * 1;
    const itemFinal4 = (items.item4 * taxTotal) + items.item4 * 1;
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
                <p>Your tax is {taxTotal * 100}%</p>
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
                <label>
                    Item 3:
                    <input name="item3" type='number' 
                    value={items.item3}
                    onChange={e => setItems({
                        ...items,
                        item3: e.target.value,
                    })}
                    />
                </label>
                <p>Amount with tax: {itemFinal3}</p>
                <label>
                    Item 4:
                    <input name="item4" type='number' 
                    value={items.item4}
                    onChange={e => setItems({
                        ...items,
                        item4: e.target.value,
                    })}
                    />
                </label>
                <p>Amount with tax: {itemFinal4}</p>
                <h3>Total of taxed items: {parseFloat(itemFinal1) + parseFloat(itemFinal2) + parseFloat(itemFinal3) + parseFloat(itemFinal4)}</h3>
                <p>Difference of {(parseFloat(itemFinal1) + parseFloat(itemFinal2) + parseFloat(itemFinal3) + parseFloat(itemFinal4) - finalTotal)}</p>
            </div>
        </div>
    );
}

export default Tax;