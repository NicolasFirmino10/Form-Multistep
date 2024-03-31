import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";

import PropTypes from 'prop-types';
import './ReviewForm.css'

const ReviewForm = ({data, updateFiledHandler}) => {
  return (
    <div className="review-form">
      <div className="form-control score-container">
        
        <label className="radio-container">
          <input 
          type="radio"
          name="review"
          value="unsatisfied" 
          required 
          checked={data.review === "unsatisfied"}
          onChange={(e) => {updateFiledHandler("review", e.target.value);}} 
            />
          <BsFillEmojiFrownFill />
          <p>Insatisfeito</p>
        </label>

        <label className="radio-container">
          <input
          type="radio"
          name="review"
          value="neutral"
          required 
          checked={data.review === "neutral"}
          onChange={(e) => {updateFiledHandler("review", e.target.value);}} />
          <BsFillEmojiNeutralFill />
          <p>Poderia ser melhor</p>
        </label>

        <label className="radio-container">
          <input
            type="radio"
            name="review"
            value="satisfied"
            required 
            checked={data.review === "satisfied"}
            onChange={(e) => {updateFiledHandler("review", e.target.value);}} />
          <BsFillEmojiSmileFill />
          <p>Satisfeito</p>
        </label>

        <label className="radio-container">
          <input type="radio" name="review" value="very_satisfied" required 
          checked={data.review === "very_satisfied"}
          onChange={(e) => {updateFiledHandler("review", e.target.value);}}/>
          <BsFillEmojiHeartEyesFill />
          <p>Muito satisfeito</p>
        </label>

      </div>
      <div className="form-control">
        <label htmlFor="comment">Comentário:</label>
        <textarea name="comment" id="comment" placeholder="Conte como foi sua experiência com o produto:"
         value={data.comment || ""}
         onChange={(e) => {
           updateFiledHandler("comment", e.target.value);
         }}
        ></textarea>
      </div>
    </div>
  );
};

ReviewForm.propTypes = {
  data: PropTypes.shape ({
    review: PropTypes.string,
    comment: PropTypes.string
  }),
  updateFiledHandler: PropTypes.func.isRequired 
}

export default ReviewForm;
