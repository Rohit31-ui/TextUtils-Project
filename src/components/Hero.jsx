import React, { useState } from 'react';

const Hero = (props) => {
  const [text, setText] = useState('Enter your text here');

  const handleChange = (event) => {
    setText(event.target.value);
    props.showAlert("")
  };

  const handleUppClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to uppercase",'success')
  };

  const handleLowClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to lowercase","warning")
  };

  const handleCopy = () => {
    let textArea = document.getElementById('myBox');
    textArea.select();
    textArea.setSelectionRange(0, 9999); // For mobile devices
    navigator.clipboard.writeText(textArea.value);
    props.showAlert("Text copied to clipboard",'secondary')
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/).join(' ');
    setText(newText.trim());
    props.showAlert("Extraspaces are removed ",'warning')
  };


  const handleClearClick = () => {
    setText('');
    props.showAlert("Text cleared ",'success')

  };

  
  const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;

  return (
    <div className="container h-full"          
     style={{
     
      color: props.mode === 'dark' ? 'white' : 'black',
    }}>
      <div className="mb-3 my-3 h-full">
        <label htmlFor="myBox" className="form-label text-2xl font-bold">
          Enter your text here
        </label>
        <textarea
          className="form-control"
          value={text}
          id="myBox"

          onChange={handleChange}
          rows="8"
        ></textarea>
      </div>
      <button className="btn mx-2 btn-primary" onClick={handleUppClick}>
        Convert to Uppercase
      </button>
      <button className="btn mx-2 btn-primary" onClick={handleLowClick}>
        Convert to Lowercase
      </button>
      <button className="btn mx-2 btn-primary" onClick={handleClearClick}>
        Clear Text
      </button>
      <button className="btn mx-2 btn-primary" onClick={handleCopy}>
        Copy Text
      </button>
      <button className="btn mx-2 btn-primary" onClick={handleExtraSpaces}>
        Remove Extra Spaces
      </button>

      <div className="container my-5" style={{
            backgroundColor: props.mode === 'dark' ? '#042743' : 'white',
            color: props.mode === 'dark' ? 'white' : 'black',
          }}>
        <h1 className="font-bold text-2xl">Text Summary</h1>
        <p>Words: {wordCount}, Characters: {text.length}</p>
        <p>Reading Time: {0.008 * wordCount} minutes</p>

        <h2 className="font-semibold text-xl">Preview</h2>
       <p>{text.length > 0 ? text : 'Enter something int the textbox to preview here'}</p>

        
      </div>
    </div>
  );
};

export default Hero;
