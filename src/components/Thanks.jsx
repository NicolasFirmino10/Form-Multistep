import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";

import PropTypes from 'prop-types';

import "./Thanks.css";

const emojiData = {
  unsatisfied: <BsFillEmojiFrownFill />,
  neutral: <BsFillEmojiNeutralFill />,
  satisfied: <BsFillEmojiSmileFill />,
  very_satisfied: <BsFillEmojiHeartEyesFill />,
};


const Thanks = ({data}) => {
  return (
    <div className="thanks-container">
        <h2>Falta pouco...</h2>
        <p>A sua opinião é muito importante!</p>
        <p>Para concluir sua avaliação clique no botão Enviar.</p>
        <h3>Aqui está o resumo da sua avaliação: {data.name}</h3>
        <p className="review-data">
          <span>Satisfação com o produto: {emojiData[data.review]}</span>
        </p>
        <p className="review-data">
        <span>Comentário:</span>
        {data.comment}
        </p>
    </div>
  )
}

Thanks.propTypes = {
  data: PropTypes.shape ({
    name: PropTypes.string,
    comment: PropTypes.string,
    review: PropTypes.oneOf(['unsatisfied', 'neutral', 'satisfied', 'very_satisfied']).isRequired
  }),
}
export default Thanks