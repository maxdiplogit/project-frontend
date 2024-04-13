import { useState } from "react";


const SomeComponent = () => {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <>
            <input type="text" onChange={handleChange} />
            <button>{ value ? value : "Click Me" }</button>
        </>
    )
}


export default SomeComponent;