import React from 'react'

export default function About(props) {

    return (
        <>
            <div className='container my-3' style={{color: props.mode === 'light'?'black':'white'}}>
                <h1>About TextMaster</h1>
                <div className="accordion" id="accordionExample" style={{color: props.mode === 'light'?'black':'white'}}>
                    <div className="accordion-item" style={{color: props.mode === 'light'?'black':'white'}}>
                        <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{backgroundColor: props.mode === 'light'?'white':'#343434 ',
                    color: props.mode === 'light'?'black':'white'}}>
                                Easy Text Manipulation
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={{backgroundColor: props.mode === 'light'?'white':'#343434',
                    color: props.mode === 'light'?'black':'white'}}>
                                <strong>TextUtils</strong> is a versatile web-based tool designed to help users easily manipulate text in a variety of ways. Whether you need to convert text to uppercase, lowercase, or clear it completely, TextUtils provides an intuitive platform for handling your text-based tasks quickly and efficiently.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"style={{backgroundColor: props.mode === 'light'?'white':'#343434',
                    color: props.mode === 'light'?'black':'white'}}>
                                User-Friendly and Fast
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={{backgroundColor: props.mode === 'light'?'white':'#343434',
                    color: props.mode === 'light'?'black':'white'}}>
                                TextUtils focuses on providing a clean and user-friendly interface, ensuring that users can easily interact with the app's features. The platform is lightweight, allowing it to process text transformations in real-time without delays, even with larger text inputs.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{backgroundColor: props.mode === 'light'?'white':'#343434',
                    color: props.mode === 'light'?'black':'white'}}>
                                Future Enhancements
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={{backgroundColor: props.mode === 'light'?'white':'#343434',
                    color: props.mode === 'light'?'black':'white'}}>
                                We plan to introduce more advanced features such as **text-to-speech**, **removing extra spaces**, and **word count analytics**. TextUtils aims to continually grow and evolve, providing a complete suite of text utilities that can help users streamline their writing and editing processes.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
