import React, { useState, useEffect } from 'react';
import './App.css';
import CustomTextArea from './components/CustomTextArea';
import { convert } from './utils';

function App() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  useEffect(() => {
    setOutput(convert(input));
  }, [input]);

  return (
    <div className="App">
      <CustomTextArea id="input" title="Input" value={input} onChange={event => setInput(event.target.value)} />
      <CustomTextArea id="output" title="Output" value={output} />
    </div>
  );
}

export default App;
