import React from "react";
import RadioGroup from "./RadioGroup";

const App = () => (
    <RadioGroup>
        <h5>Value: {this.state.value}</h5>
        <RadioGroup.Option value={"First"} label={"1st"} />
        <RadioGroup.Option value={"Second"} />
        <RadioGroup.Option value={"Third"} />
    </RadioGroup>
);


export default App;
