import React from 'react';

const CustomTextArea = ({ id, title, value, onChange = null }) => (
  <div>
    <div className="textwrapper">
      <label htmlFor={id}>{title}</label>
      <textarea id={id} value={value} onChange={onChange} />
    </div>
  </div>
);

export default CustomTextArea;
