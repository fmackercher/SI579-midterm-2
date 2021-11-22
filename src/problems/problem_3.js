import { useRef, useState } from 'react';
export const description =
    'Modify the code in `src/problem_3.js` so that the greeting message updates as the user types into the `<input />`\
 element, the greeting message updates. For example, if the user types `"Jane"` then the greeting\
 message should say `"Hello, Jane!"`. The updates should happen **as** the user types into the `<input />` element.';

export function Problem() {
    const [userWrote, setUserWrote] = useState('');
    const [output, setOutput] = useState(null);
    const inputRef = useRef();

    function onClick() {
        const userWrote = inputRef.current.value;
        setOutput(`Hello, ${userWrote}!`);

    }
    return <>
        <label htmlFor="name_input">Enter your name: </label><input id="name_input" ref={inputRef} onChange={onClick} />
        <div>{output}</div>
    </>;
}
