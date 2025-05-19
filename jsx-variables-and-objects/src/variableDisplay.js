import React from 'react';

function VariableDisplay() {
    // Create your variables here
    let stringVar = "Welcome to React";
    let numberVar = 42;
    let booleanVar = true;
    let arrayVar = ["React", "JSX", "Variables"];
    let objectVar = { name: "John", age: 30, role: "Developer" };

    // Add your conditional statement here
    if (Math.random() > 0.5) {
        stringVar = "Welcome to advanced React";
    }

    return (
    <div>
        <h1>{stringVar}</h1>
        <h1>{numberVar}</h1>
        {/*boolean variable here*/}
        <ul>
            {arrayVar.map((item) => <li>{item}</li>)}
        </ul>
        <br></br>
        <ul>
            <li>{objectVar.name}</li>
            <li>{objectVar.age}</li>
            <li>{objectVar.role}</li>
        </ul>
        <h1>{booleanVar.toString()}</h1>
    </div>
    );
}

export default VariableDisplay;