import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");
    const [isSpeaking, setIsSpeaking] = useState(false);

    const handleUpConvert = () => {
        // console.log("Button was clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }

    const onChangeText = (event) => {
        // console.log("On change");
        setText(event.target.value);
    }

    const handleLowConvert = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    function toSentenceCase(text) {
        return text.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g, (c) => c.toUpperCase());
    }

    const handleSentenceConvert = () => {
        let newText = toSentenceCase(text);
        setText(newText);
    }

    const handleClearConvert = () => {
        let newText = '';
        setText(newText);
    }

    const handleCopyText = ()=>{
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleRemoveExtraSpaces = () => {
        let newText = text.split(/\s+/).join(" ").trim(); // Removes extra spaces
        setText(newText);
    };

    const handleTextToSpeech = () => {
        if (!text) return;
        const speech = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(speech);

        setIsSpeaking(true);

        speech.onend = () => {
            setIsSpeaking(false);
        };
    };

    return (
        <>
            <div className='container' style={{color: props.mode === 'light'?'black':'white'}}>
                <h1 className='mt-3'>{props.heading}</h1>
                {isSpeaking && (
                    <div className="sound-icon">
                        <img src="https://cdn-icons-png.flaticon.com/512/8275/8275009.png" alt="Sound Icon" style={{ width: "40px" }} />
                    </div>
                )}
                <div className="mb-3" >
                    <textarea className="form-control" id="myBox" rows="8" value={text} onChange={onChangeText} style={{backgroundColor: props.mode === 'light'?'white':'grey',
                    color: props.mode === 'light'?'black':'white'}} ></textarea>
                    <button className="btn btn-primary my-3 mx-2" onClick={handleUpConvert} >Convert to Uppercases</button>
                    <button className="btn btn-success my-3 mx-2" onClick={handleLowConvert} >Convert to Lowercases</button>
                    <button className="btn btn-secondary my-3 mx-2" onClick={handleSentenceConvert} >Convert to Sentence case</button>
                    <button className="btn btn-info my-3 mx-2" onClick={handleRemoveExtraSpaces}>Remove Extra Spaces</button>
                    <button className="btn btn-success my-3 mx-2" onClick={handleCopyText} >Copy Text</button>
                    <button className="btn btn-danger my-3 mx-2" onClick={handleClearConvert} >Clear Text</button>
                    <button className="btn btn-warning my-3 mx-2" onClick={handleTextToSpeech}>Convert to Speech</button>
                </div>

            </div>
            <div className="container" style={{color: props.mode === 'light'?'black':'white'}}>
                <h2>Text Summary</h2>
                <p>Total words - <b>{text.split(" ").length}</b> & Total characters - <b>{text.length}</b></p>
                <p>You can read the whole text in <b>{0.008 * text.split(" ").length}</b> minutes</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something in the textbox to preview here"}</p>
            </div>
        </>
    )
}
