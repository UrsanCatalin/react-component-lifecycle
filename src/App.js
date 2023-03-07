import HookExample from "./components/useEffectExample";
import Timer from "./components/timer";
import { useState } from "react";
//react hooks rules
/*
1.Hooks pot fi executate(chemate) doar in componente tip function.
2.Hooks nu pot fi executate(chemate) in blockuri de tip if, for, while.
3.Hooks trebuie sa fie declarate obligatoriu cu "useXxxx".
*/

function App() {
  const [showTimer, setShowTimer] = useState(false);

  return (
    <div>
      <button onClick={() => setShowTimer(!showTimer)}>show timer</button>
      <HookExample />
      {showTimer ? <Timer /> : null /*conditional rendering*/}
    </div>
  );
}

export default App;
