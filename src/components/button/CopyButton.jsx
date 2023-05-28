import React, { useState } from 'react';
import "./CopyButton.css"

function CopyButton({ text }) {
    const [copied, setCopied] = useState(false);

    function handleClick() {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 1500);
    }

    return (
        <button onClick={handleClick} className='copy-button'>
            {copied ? 'Copied!' : 'Copy'}
        </button>
    );
}

export default CopyButton;