import { useState } from 'react';
import { MAX_CHARS } from './lib/constans';

export default function FeedbackForm() {
  const [text, setText] = useState('');
  const charCount = MAX_CHARS - text.length;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    if (newText.length > MAX_CHARS) return;
    setText(newText);
  };

  return (
    <>
      <form className="form">
        <textarea
          value={text}
          id="feedback-textarea"
          placeholder="blabla"
          spellCheck={false}
          onChange={handleChange}
        ></textarea>
        <label htmlFor="feedback-textarea">
          Enter your feedback here, remember to #hashtag to company
        </label>
        <div>
          <p className="u-italic">{charCount}</p>
          <button>
            <span>Submit</span>
          </button>
        </div>
      </form>
    </>
  );
}
