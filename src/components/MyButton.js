import { useContext } from "react";
import { CalcContext } from "../context/CalcContext";

const getStyleName = btn => {
    const className = {
        '=' : 'equals',
        'x' : 'opt',
        '+' : 'opt',
        '-' : 'opt',
        '/' : 'opt',

    }
    return className[btn];
}

const MyButton = ({value}) => {
    const { calc ,setCalc } = useContext(CalcContext);
        console.log(setCalc);
    
    //User Click  comma
    const commaClick =  () =>{
        setCalc({
            ...calc,
            num : !calc.num.toString().includes('.') ? calc.num + value : calc.num
        })
    }
    //User Click C
    const resetClick = () =>{
        setCalc({
          sign: '',
          num: 0,
          res: 0,  
        })
    } 
    //User Click number
    const hadleClickButton = () => {
        const numberString = value.toString()

        let numberValue;
        if(numberString === '0' && calc.num === 0) {
            numberValue = "0"
        } else {
            numberValue = Number(calc.num + numberString)
        }
        

        setCalc({
            ...calc,
            num: numberValue
        })
    }
    const signClick = () => {
        setCalc({
            sign : value,
            res  : !calc.res && calc.num ? calc.num : calc.res, 
            num  : 0
        })
    } 
    const equalsClick = () => {
        if(calc.res && calc.num) {
            const math = (a ,b , sign) => {
                const result = {
                    '+': (a, b) => a + b,
                    '-': (a, b) => a - b,
                    'x': (a, b) => a * b,
                    '/': (a, b) => a / b,
                }
                return result[sign](a, b);
            }
            setCalc({
                res: math(calc.res, calc.num, calc.sign),
                sign: '',
                num: 0
              })
        }
    }
    const persenClick = () => {
        setCalc({
          num: (calc.num / 100),
          res: (calc.res / 100),
          sign: ''
        })
      }
      const invertClick = () => {
        setCalc({
          num: calc.num ? calc.num * -1 : 0,
          res: calc.res ? calc.res * -1 : 0,
          sign: ''
        })
      }
    
    const hadleBtnClick = () =>  {
        const results = {
            '.' : commaClick,
            'C' : resetClick,
            '/' : signClick,
            'x' : signClick,
            '-' : signClick,
            '+' : signClick,
            '=' : equalsClick,
            '%' : persenClick,
            '+-': invertClick,

        }
        if (results[value]) {
            return results[value]()
        } else {
            hadleClickButton()
        }
    }
    return(
        <button onClick={hadleBtnClick} className={`${getStyleName(value)} myButton`}>{(value)}</button>
    )
}


export default MyButton;