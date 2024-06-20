import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
const data = [
    [{ name: 'John' }, { name: 'Jane' }],
    [{ name: 'Bob' }]
];

const names = data.flatMap(arr => arr.map(obj => obj.name));
console.log(names); // Output: ['John', 'Jane', 'Bob']
const MarkdownEditor = () => {
    const [markdown, setMarkdown] = useState('type markdown here');

    const handleMarkdownChange = (event) => {
        setMarkdown(event.target.value);
    };



    const reversedSentence = markdown.split(' ').reverse().join(' ');
    const capitalizedSentence = reversedSentence.charAt(0).toUpperCase() + reversedSentence.slice(1);
    console.log(capitalizedSentence);


    return (
        <div>
            <textarea value={markdown} onChange={handleMarkdownChange} />
            <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
    );
};



export default MarkdownEditor;
const reversedSentence = markdown.split(' ').reverse().join(' ');
const capitalizedSentence = reversedSentence.charAt(0).toUpperCase() + reversedSentence.slice(1);
console.log(capitalizedSentence);