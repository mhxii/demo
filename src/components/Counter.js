import React from "react";

function Counter() {
    const [count,setCount ]=React.useState(0);
    const [discount,setDiscount ]=React.useState(0);
    return(
        <div>
            <button onClick={()=>setCount(count+1)}>
            <i class="fas fa-thumbs-up"></i> {count}
            </button>
            <button onClick={()=>setDiscount(discount+1)}>
            <i class="fas fa-thumbs-down"></i> {discount+1}
            </button>
        </div>

    );
}

export default Counter;