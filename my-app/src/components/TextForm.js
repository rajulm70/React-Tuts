// import React, { useState } from 'react';
// import axios from 'axios';

// export default function TextForm(props) {
//     const [text, setText] = useState("");
//     const [summary, setSummary] = useState("");
//     const [isSpeaking, setIsSpeaking] = useState(false);

//     const handleUpConvert = () => {
//         let newText = text.toUpperCase();
//         setText(newText);
//     };

//     const onChangeText = (event) => {
//         setText(event.target.value);
//     };

//     const handleLowConvert = () => {
//         let newText = text.toLowerCase();
//         setText(newText);
//     };

//     const handleSentenceConvert = () => {
//         let newText = toSentenceCase(text);
//         setText(newText);
//     };

//     const handleClearConvert = () => {
//         let newText = '';
//         setText(newText);
//     };

//     const handleCopyText = () => {
//         let text = document.getElementById('myBox');
//         text.select();
//         navigator.clipboard.writeText(text.value);
//     };

//     const handleRemoveExtraSpaces = () => {
//         let newText = text.split(/\s+/).join(" ").trim();
//         setText(newText);
//     };

//     const handleTextToSpeech = () => {
//         if (!text) return;
//         const speech = new SpeechSynthesisUtterance(text);
//         window.speechSynthesis.speak(speech);

//         setIsSpeaking(true);

//         speech.onend = () => {
//             setIsSpeaking(false);
//         };
//     };

//     const handleSummarizeText = async () => {
//         try {
//             const response = await axios.post('http://localhost:3001/summarize-text', { text });
//             setSummary(response.data.summary); // Set the summary returned from the backend
//         } catch (error) {
//             console.error("Error summarizing text:", error);
//         }
//     };

//     return (
//         <>
//             <div className='container' style={{color: props.mode === 'light'?'black':'white'}}>
//                 <h1 className='mt-3'>{props.heading}</h1>
//                 {isSpeaking && (
//                     <div className="sound-icon">
//                         <img src="https://cdn-icons-png.flaticon.com/512/8275/8275009.png" alt="Sound Icon" style={{ width: "40px" }} />
//                     </div>
//                 )}
//                 <div className="mb-3" >
//                     <textarea className="form-control" id="myBox" rows="8" value={text} onChange={onChangeText} style={{backgroundColor: props.mode === 'light'?'white':'grey',
//                     color: props.mode === 'light'?'black':'white'}} ></textarea>
//                     <button className="btn btn-primary my-3 mx-2" onClick={handleUpConvert}>Convert to Uppercases</button>
//                     <button className="btn btn-success my-3 mx-2" onClick={handleLowConvert}>Convert to Lowercases</button>
//                     <button className="btn btn-secondary my-3 mx-2" onClick={handleSentenceConvert}>Convert to Sentence case</button>
//                     <button className="btn btn-info my-3 mx-2" onClick={handleRemoveExtraSpaces}>Remove Extra Spaces</button>
//                     <button className="btn btn-success my-3 mx-2" onClick={handleCopyText}>Copy Text</button>
//                     <button className="btn btn-danger my-3 mx-2" onClick={handleClearConvert}>Clear Text</button>
//                     <button className="btn btn-warning my-3 mx-2" onClick={handleTextToSpeech}>Convert to Speech</button>
//                     <button className="btn btn-primary my-3 mx-2" onClick={handleSummarizeText}>Summarize Text</button>
//                 </div>

//                 {summary && (
//                     <div className="container">
//                         <h2>Summary</h2>
//                         <p>{summary}</p>
//                     </div>
//                 )}

//             </div>
//             <div className="container" style={{color: props.mode === 'light'?'black':'white'}}>
//                 <h2>Text Summary</h2>
//                 <p>Total words - <b>{text.split(" ").length}</b> & Total characters - <b>{text.length}</b></p>
//                 <p>You can read the whole text in <b>{0.008 * text.split(" ").length}</b> minutes</p>
//                 <h2>Preview</h2>
//                 <p>{text.length > 0 ? text : "Enter something in the textbox to preview here"}</p>
//             </div>
//         </>
//     );
// }


import React, { useState } from 'react';
import axios from 'axios';

const toSentenceCase = (text) => {
    return text
        .toLowerCase() // Convert to lowercase first
        .split('. ') // Split by sentence
        .map(sentence => sentence.charAt(0).toUpperCase() + sentence.slice(1)) // Capitalize first letter
        .join('. '); // Join back into a single string
};

export default function TextForm(props) {
    const [text, setText] = useState("");
    const [isSpeaking, setIsSpeaking] = useState(false);

    const handleUpConvert = () => {
        let newText = text.toUpperCase();
        setText(newText);
    };

    const onChangeText = (event) => {
        setText(event.target.value);
    };

    const handleLowConvert = () => {
        let newText = text.toLowerCase();
        setText(newText);
    };

    const handleSentenceConvert = () => {
        let newText = toSentenceCase(text);
        setText(newText);
    };

    const handleClearConvert = () => {
        let newText = '';
        setText(newText);
    };

    const handleCopyText = () => {
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
    };

    const handleRemoveExtraSpaces = () => {
        let newText = text.split(/\s+/).join(" ").trim();
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

    const handleSummarizeText = async () => {
        try {
            const response = await axios.post('http://localhost:3001/summarize-text', { text });
            setText(response.data.summary); // Set the summarized text in the textarea
        } catch (error) {
            console.error("Error summarizing text:", error);
        }
    };

    return (
        <>
            <div className='container' style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h1 className='mt-3'>{props.heading}</h1>
                {isSpeaking && (
                    <div className="sound-icon">
                        <img src="https://cdn-icons-png.flaticon.com/512/8275/8275009.png" alt="Sound Icon" style={{ width: "40px" }} />
                    </div>
                )}
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        id="myBox"
                        rows="8"
                        value={text}
                        onChange={onChangeText}
                        style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey', color: props.mode === 'light' ? 'black' : 'white' }}
                    ></textarea>
                    <button className="btn btn-primary my-3 mx-2" onClick={handleUpConvert}>Convert to Uppercases</button>
                    <button className="btn btn-success my-3 mx-2" onClick={handleLowConvert}>Convert to Lowercases</button>
                    <button className="btn btn-secondary my-3 mx-2" onClick={handleSentenceConvert}>Convert to Sentence case</button>
                    <button className="btn btn-info my-3 mx-2" onClick={handleRemoveExtraSpaces}>Remove Extra Spaces</button>
                    <button className="btn btn-success my-3 mx-2" onClick={handleCopyText}>Copy Text</button>
                    <button className="btn btn-danger my-3 mx-2" onClick={handleClearConvert}>Clear Text</button>
                    <button className="btn btn-warning my-3 mx-2" onClick={handleTextToSpeech}>Convert to Speech</button>
                    <button className="btn btn-success my-3 mx-2" onClick={handleSummarizeText}>Summarize Text</button>
                </div>
            </div>
            <div className="container" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h2>Text Summary</h2>
                <p>Total words - <b>{text.split(" ").length}</b> & Total characters - <b>{text.length}</b></p>
                <p>You can read the whole text in <b>{0.008 * text.split(" ").length}</b> minutes</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something in the textbox to preview here"}</p>
            </div>
        </>
    );
}
