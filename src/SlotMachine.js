import React, {useState} from "react";

function SlotMachine(){
    const [result, setResult] = useState(['🍒', '🍋', '🍉']);

    const spin = () => {
      const symbols = ['🍒', '🍋', '🍉', '🍇', '🍎'];
      const newResult = [
        symbols[Math.floor(Math.random() * symbols.length)],
        symbols[Math.floor(Math.random() * symbols.length)],
        symbols[Math.floor(Math.random() * symbols.length)]
      ];
      setResult(newResult);
    };
    return (
        <div>
          <h2>Slot Machine</h2>
          <div>{result.join(' | ')}</div>
          <button onClick={spin}>Spin</button>
        </div>
      );
}

export default SlotMachine;