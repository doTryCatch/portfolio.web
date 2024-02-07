// MarkdownReader.js
import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown'; 


const MarkdownReader = ({ filePath }) => {
  const [markdownContent, setMarkdownContent] = useState('');

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        const response = await fetch(filePath);
        const text = await response.text();
     
        setMarkdownContent(text);
      } catch (error) {
        console.error('Error fetching Markdown file:', error);
      }
    };

    fetchMarkdown();
  }, [filePath]);

  return (
    <div className="markdown-container space-y-4">
      <ReactMarkdown>{markdownContent}</ReactMarkdown>
    </div>
  );
};

export default MarkdownReader;
