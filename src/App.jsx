import {useState} from "react";

function App(){
  const [num , setNum] = useState(0);
  const [sum , setSum] = useState(0);

  const CalculateSum = () => {
    let n = Math.abs(num);
    let total = 0;

    while(n > 0){
      total += n % 10;
      n = Math.floor(n / 10);
    }

    setSum(total);
  };

  return(
    <div>
      <h2>Sum of Digits</h2>
      <input type="number"  value={num} onChange={(e) => setNum(Number(e.target.value))} placeholder="Enter a number" ></input>
      <button onClick={CalculateSum}>Calculate Sum</button>

      <p>Sum of digits : {sum}</p>
    </div>
  );

}

export default App