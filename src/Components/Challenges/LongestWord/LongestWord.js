import { useState } from 'react'; 

const LongestWord = () => {

    const [state, setState] = useState({
        input: '',
        result: ''
    });

    const longestWordFunction = str => {
        const strArray = str.split(' ');
        let longestCount = 0;
        for (let i = 0; i < strArray.length; i++) {
            strArray[i] > longestCount ? longestCount = strArray[i] : longestCount;
        };
    };


    return (
        <div></div>
    );
};

export default LongestWord;