import {useState} from 'react'; 

const AlternateCapitalization = () => {

  const [state, setState] = useState({
    input: '',
    result: ''
  });

  const alternateCapitalizationFunction = (s) => {
    const splitString = s.split('');
    const result1 = [];
    const result2 = [];
    for (let i = 0; i < s.length; i++) {
      if (i % 2 === 0) {
        const capitalized = splitString[i].toUpperCase();
        result1.push(capitalized);
      } else {
        result1.push(splitString[i])
      }
    }
      
    for (let i = 0; i < s.length; i++) {
      if (i % 2 === 1) {
        const capitalized = splitString[i].toUpperCase();
        result2.push(capitalized);
      } else {
        result2.push(splitString[i])
      }
    }
      
    return `${result1.join('')}, ${result2.join('')}`
  };

  const handleChange = e => {
    setState(prevState => ({
        ...prevState,
        [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = e => {
    e.preventDefault();
    const challengeResult = alternateCapitalizationFunction(state.input);
    setState(prevState => ({
        input: prevState.input,
        result: challengeResult
    }))
  }


  return (
    <div className="challenge-container">
        <h2 className="challenge-title">Alternating Capitalization</h2>
        <p className="challenge-description">Input a string to turn it into two strings with alternating capitalization</p>
        <form 
            className="challenge-form" 
            onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={state.input} 
                onChange={handleChange} 
                name="input" 
                className="form-control challenge-input" 
                placeholder="Input string here"
            />
            <button type="submit" className="btn btn-success">
                Result
            </button>
        </form>
        <p id="challenge-result">
            {state.result}
        </p>
    </div>
  )
}

export default AlternateCapitalization;