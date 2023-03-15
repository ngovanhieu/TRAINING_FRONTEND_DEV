import CalculatorTitle from './caculatorTitle';
import OutputScreen from './outputScreen.js';
import Button from './button.js';
import { useState } from 'react';

function Calculator3 () {
   const [state,setState] = useState({ question: '',
   answer: ''})
    const handleClick = (event) => {
        const value = event.target.value;
        switch (value) {
            case '=': {
                if (state.question!=='')
                {
                    var ans='';
                    try
                    {
                        ans = eval(state.question);
                    }
                    catch(err)
                    {
                        setState({...state, answer: "Math Error"});
                    }
                    if (ans===undefined)
                        setState({...state, answer: "Math Error"});
                    else
                        setState({ answer: ans , question: state.question});
                    break;
                }
            }
            case 'Clear': {
                setState({ question: '', answer: '' });
                break;
            }

            case 'Delete': {
                var str = state.question;
                str = str.substr(0,str.length-1);
                setState({...state, question: str});
                break;
            }

            default: {
                setState({...state, question: state.question += value})
                break;
            }
        }
    }

    return (  
    <div className="frame">
        <CalculatorTitle title="Calculator"/>
        <div className="mainCalc">
            <OutputScreen question={state.question} answer={state.answer}/>
            <div className="button-row">
                <Button className="btnaction" label={'Clear'} handleClick = {handleClick}/>
                <Button className="btnaction" label={'Delete'} handleClick={handleClick}/>
                <Button className="btnaction" label={'/'} handleClick={handleClick}/>
            </div>
            <div className="button-row">
                <Button label={'8'} handleClick={handleClick}/>
                <Button label={'9'} handleClick={handleClick}/>
                <Button className="btnaction" label={'+'} handleClick={handleClick}/>
            </div>
            <div className="button-row">
                <Button label={'6'} handleClick={handleClick}/>
                <Button label={'7'} handleClick={handleClick}/>
                <Button className="btnaction" label={'*'} handleClick={handleClick}/>
            </div>
            <div className="button-row">
                <Button label={'4'} handleClick={handleClick}/>
                <Button label={'5'} handleClick={handleClick}/>
                <Button className="btnaction" label={'-'} handleClick={handleClick}/>
            </div>
            <div className="button-row">
                <Button label={'2'} handleClick={handleClick}/>
                <Button label={'3'} handleClick={handleClick}/>
                <Button className="btnaction" label={'.'} handleClick={handleClick}/>
            </div>
            <div className="button-row">
                <Button label={'0'} handleClick={handleClick}/>
                <Button label={'1'} handleClick={handleClick}/>
                <Button className="btnaction" label={'='} handleClick={handleClick}/>
            </div>
        </div>
    </div>
);
}

export default Calculator3;