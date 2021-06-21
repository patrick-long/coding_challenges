import { useState, useEffect } from "react";

const NumberofMilliseconds = () => {
    return (
        <div className="challenge-container">
            <h2 className="challenge-title">Reverse a string</h2>
            <p className="challenge-description">Input a string to reverse</p>
            <form className="challenge-form" onSubmit={handleSubmit}>
                <input type="text" value={state.input} onChange={handleChange} name="input" id="reverse-string" className="form-control challenge-input" placeholder="Input string here"
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

export default NumberofMilliseconds;