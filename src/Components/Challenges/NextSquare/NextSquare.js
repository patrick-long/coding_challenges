import { useState } from 'react'; 

const NextSquare = () => {

    const [state, setState] = useState({
        input: '',
        result: ''
    });

    const findNextSquare = sq => {
        if (Math.sqrt(sq) % 1 === 0) {
            return ( Math.sqrt(sq) + 1 ) * ( Math.sqrt(sq) + 1);
        } else {
            return -1;
        };
      };


    return (
        <div></div>
    );
};

export default NextSqaure;