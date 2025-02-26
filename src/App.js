import React, { useState } from "react";

function App() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [sum, setSum] = useState(0);

    const handleSum = () => {
        setSum(Number(num1) + Number(num2));
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Sum Calculator</h1>
            <input
                type="number"
                placeholder="Enter first number"
                onChange={(e) => setNum1(e.target.value)}
            />
            <input
                type="number"
                placeholder="Enter second number"
                onChange={(e) => setNum2(e.target.value)}
            />
            <button onClick={handleSum}>Calculate Sum</button>
            <h2>Result: {sum}</h2>
        </div>
    );
}

export default App;
