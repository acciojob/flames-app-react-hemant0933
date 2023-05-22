import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {

    

    render() {
        const [first,setFirstName] = useState('');
        const [second,setSecondName] = useState('');
        const [answer,setAnswer] = useState('');
        


        const handleFirstName = (e) => {
            setFirstName(e.target.value);
        }
        const handleSecondName = (e) => {
            setSecondName(e.target.value);
        }
        const CalculateAnswer = () => {
            if (first.trim() === '' || second.trim() === '') {
                setAnswer('Please enter the name');
                return;
            }
           let remainingName1 = first;
           let remainingName2 = second;

           for(let i=0; i<first.length; i++){
            let s = first.charAt(i)
            if(remainingName2.includes(s)){
                remainingName1 = remainingName1.replace(s,'');
                remainingName2 = remainingName2.replace(s,'');
            }
           }

           const remainingLength = remainingName1.length + remainingName2.length;
           const RelationshipValue = remainingLength % 6;

           switch(RelationshipValue){
            case 1:
                setAnswer('Friends');
                break;
            case 2:
                setAnswer('Love');
                break;
            case 3:
                setAnswer('Affection');
                break;
            case 4:
                setAnswer('Marriage');
                break;
            case 5:
                setAnswer('Enemy');
                break;
            case 0:
                setAnswer('Siblings');
                break;
            default:
                setAnswer("Please Enter valid input");
                break;    
           }
        }

        const ClearState = () => {
            setFirstName('');
            setSecondName('');
            setAnswer('');
        }
        return(
            <div id="main">
              <input type="text" data-testid="input1" value={first} onChange={(e)=> handleFirstName(e)} />
              <input type="text" data-testid="input2" value={second} onChange={(e)=> handleSecondName(e)} />
              <button data-testid="calculate_relationship" onClick={CalculateAnswer}>Calculate Relationship Future</button>
              <button data-testid="clear" onClick={ClearState}>Clear</button><br/>
              <h3 data-testid="answer" >{answer}</h3>
            </div>
        )
    }
}


export default App;
