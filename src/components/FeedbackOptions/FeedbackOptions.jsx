import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const items = options.map(option => {
    let newOption = option[0].toUpperCase() + option.slice(1);
    return (
      <li key={option}>
        <button
          className={css.btn}
          onClick={() => onLeaveFeedback(option)}
          type="button"
        >
          {newOption}
        </button>
      </li>
    );
  });
  return <ul className={css.list}>{items}</ul>;
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
