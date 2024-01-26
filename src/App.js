import Wrapper from "./components/Wrapper";
import Screen from "./components/Screen";
import ButtonBox from "./components/ButtonBox";
import MyButton from "./components/MyButton";
import CalcProvider from "./context/CalcContext";

const btnValues = [
  ["C","+-","%","/"],
  [7,8,9 ,"x"],
  [4,5,6 ,"-"],
  [1,2,3 ,"+"],
  [0, ".", "="],
];

function App() {
  return (
    <CalcProvider>
      <Wrapper>
        <Screen />
        <ButtonBox>
          {btnValues.flat().map((btn , i) => (
            <MyButton 
             value={btn}
             key={i}
            />  
          ))}
        </ButtonBox>  
       
      </Wrapper>
    </CalcProvider>
  );
}

export default App;