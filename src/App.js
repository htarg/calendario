import React, { useState, useEffect } from 'react';
import { ToastsContainer, ToastsContainerPosition, ToastsStore } from 'react-toasts';

import './App.css';
import CustomTextArea from './components/CustomTextArea';
import { convert, copyTextByElementAndRefocus } from './utils';

const INPUT_ELEMENT_ID = 'input';
const OUTPUT_ELEMENT_ID = 'output';

function App() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  useEffect(() => {
    if (input.length) {
      setOutput(convert(input));
    }
  }, [input]);

  useEffect(() => {
    let timeout;
    copyTextByElementAndRefocus(OUTPUT_ELEMENT_ID);
    if (output.length) {
      timeout = setTimeout(() => {
        ToastsStore.success('Listo! El output fue copiado al portapapeles');
      }, 1000);
    }
    return () => clearTimeout(timeout);
  }, [output]);

  return (
    <div className="App">
      <CustomTextArea
        id={INPUT_ELEMENT_ID}
        title="Input"
        value={input}
        onChange={event => setInput(event.target.value)}
      />
      <CustomTextArea id={OUTPUT_ELEMENT_ID} title="Output" value={output} />
      <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.TOP_CENTER} lightBackground />
    </div>
  );
}

export default App;
