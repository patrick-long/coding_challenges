import {useState} from 'react'; 

const AlternateCapitalization = () => {

    const alternateCapitalizationFunction = (s) => {
        const splitString = s.split('');
        const result1 = [];
        const result2 = [];
        for (let i = 0; i < s.length; i++) {
          if (i % 2 == 0) {
            const capitalized = splitString[i].toUpperCase();
            result1.push(capitalized);
          } else {
            result1.push(splitString[i])
          }
        }
        
        
        for (let i = 0; i < s.length; i++) {
          if (i % 2 == 1) {
            const capitalized = splitString[i].toUpperCase();
            result2.push(capitalized);
          } else {
            result2.push(splitString[i])
          }
        }
        
        return [result1.join(''), result2.join('')];
      };


    return (
        <div></div>
    )
}

export default AlternateCapitalization;