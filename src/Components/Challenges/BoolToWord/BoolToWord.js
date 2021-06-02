import styles from './BoolToWord.module.css';

const BoolToWord = () => {
    return (
        <div className={styles.BoolToWord}>
            <h2 className="challenge-title">BoolToWord</h2>
            <form className="challenge-form">
                <input type="text" name="challenge-input" id="bool-to-word" />
                <button type="submit" className="btn btn-success">Submit</button>
            </form>
        </div>
    )
}

export default BoolToWord;