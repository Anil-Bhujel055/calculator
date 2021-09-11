import React, { useState }  from 'react'


const App = ({name}) => {

     const [calc,setCalc]= useState("");
     const [result,setResult]= useState("");

    const ops = ['+','-','*','/'];
    const updateCalc = value => {
        setCalc(calc+value);

        if (!ops.includes(value)){
            setResult(eval(calc+value));
        }
    }

    const clearLast = () =>{
        if (calc == ''){
            return;
        }
        const value = calc.slice(0,-1);
        setCalc(value);
    
    }
    
    return (
            <div className="app">
                <div className="calculator">
                    <div>
                        <h2>{name}</h2>
                     </div>

                    <div classname="display"> 
                        <span >{calc || '0'}</span> <br/>
                        <span>{result}</span>
                    </div>

                    <div className="operators">
               
                        <button onClick={() => updateCalc('+')}>+</button>
                        <button onClick={() => updateCalc('-')}>-</button>
                        <button onClick={() => updateCalc('*')}>*</button>
                        <button onClick={() => updateCalc('/')}>/</button><br/>
           
                    </div>


                    <div classname="digits">

                        <button onClick={() => updateCalc('0')}>0</button>
                        <button onClick={() => updateCalc('1')}>1</button>
                        <button onClick={() => updateCalc('2')}>2</button>
                        <button onClick={() => updateCalc('3')}>3</button><br/>
                        <button onClick={() => updateCalc('4')}>4</button>
                        <button onClick={() => updateCalc('5')}>5</button>
                        <button onClick={() => updateCalc('6')}>6</button>
                        <button onClick={() => updateCalc('7')}>7</button><br/>
                        <button onClick={() => updateCalc('8')}>8</button>
                        <button onClick={() => updateCalc('9')}>9</button>
                        <button onClick={clearLast}>clr</button>
                        

                    </div>
            
                 </div>
            </div>
          
        
    )
}

export default App
