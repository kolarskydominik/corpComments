export default function FeedbackForm() {
  return (
    <>
      <form className="form ">
        <textarea
          id="feedback-textarea"
          placeholder="blabla"
          spellCheck={false}
        ></textarea>
        <label htmlFor="feedback-textarea">
          Enter your feedback here, remember to #hashtag to company
        </label>
        <div>
          <p className="u-italic">150</p>
          <button>
            <span>Submit</span>
          </button>
        </div>
      </form>
    </>
  );
}