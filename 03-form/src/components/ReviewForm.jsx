import { useState } from "react";

const ReviewForm = () => {
  const [rate, setRate] = useState("5");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Number(rate) < 1 && comment.length < 10) {
      alert("Your comment is too short");
      return;
    }
    console.log("Form Submitted");
    setComment("");
    setRate("5");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h1>feedbackForm</h1>
          <div className="field">
            <label>Rate: {Number(rate)}* "📗" </label>
            <input
              value={rate}
              type="range"
              max="5"
              min="0"
              onChange={(e) => setRate(e.target.value)}
            ></input>
          </div>
          <div className="comment">
            <labe>Comment</labe>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
          </div>
          <button>Submit</button>
        </fieldset>
      </form>
    </div>
  );
};
export default ReviewForm;
