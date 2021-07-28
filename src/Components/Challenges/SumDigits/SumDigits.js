import { useState } from 'react';

const SumDigits = () => {

    const [state, setState] = useState({
        input: '',
        result: ''
    });
    
    const sumDigitsFunction = (number) => {
        if (Math.sign(number) === 1) {
          const numberArray = number.toString().split('');
          let total = 0;
          const newNumbers = numberArray.map(num => parseInt(num));
          newNumbers.map(num => total += num);
          return total;
        } else if (Math.sign(number) === -1) {
          const newNum = -number;
          const numberArray = newNum.toString().split('');
          let total = 0;
          const newNumbers = numberArray.map(num => parseInt(num));
          newNumbers.map(num => total += num);
          return total;
        }
    };

    const handleChange = e => {
        setState(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }
    
    const handleSubmit = e => {
        e.preventDefault();
        const challengeResult = shortestWordFunction(state.input);
        setState(prevState => ({
            input: prevState.input,
            result: challengeResult
        }))
    }


    return (
        <div></div>
    )
}

export default SumDigits;