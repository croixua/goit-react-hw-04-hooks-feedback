import s from './FeedbackOptions.module.css';

export default function FeedbackOptions({ onBtnClick }) {
  return (
    <div className={s.wrapper}>
      <button type="button" className={s.btn} onClick={onBtnClick}>
        Good
      </button>
      <button type="button" className={s.btn} onClick={onBtnClick}>
        Neutral
      </button>
      <button type="button" className={s.btn} onClick={onBtnClick}>
        Bad
      </button>
    </div>
  );
}
