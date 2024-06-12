import { FunctionComponent } from "react";
import styles from "./ReviewCard.module.css";

export type ReviewCardType = {
  className?: string;
  avatar?: string;
  johnnyCash?: string;
  june2023?: string;
  rating?: string;
  michellesPlaceWasSoGreatA?: string;
};

const ReviewCard: FunctionComponent<ReviewCardType> = ({
  className = "",
  avatar,
  johnnyCash,
  june2023,
  rating,
  michellesPlaceWasSoGreatA,
}) => {
  return (
    <div className={[styles.reviewcard, className].join(" ")}>
      <div className={styles.reviewCard}>
        <div className={styles.reviewer}>
          <img
            className={styles.avatarIcon}
            loading="lazy"
            alt=""
            src={avatar}
          />
          <div className={styles.nameDate}>
            <b className={styles.johnnyCash}>{johnnyCash}</b>
            <div className={styles.june2023}>{june2023}</div>
          </div>
        </div>
        <div className={styles.feedback}>
          <b className={styles.rating}>{rating}</b>
          <img className={styles.verifiedIcon} alt="" src="/vector-1.svg" />
        </div>
      </div>
      <div className={styles.michellesPlaceWas}>
        {michellesPlaceWasSoGreatA}
      </div>
    </div>
  );
};

export default ReviewCard;
