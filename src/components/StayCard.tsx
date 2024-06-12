import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./StayCard.module.css";

export type StayCardType = {
  className?: string;
  brightwoodsEstate?: string;
  bridlepathOntarioCanada?: string;

  /** Style props */
  propBackgroundImage?: CSSProperties["backgroundImage"];
};

const StayCard: FunctionComponent<StayCardType> = ({
  className = "",
  brightwoodsEstate,
  bridlepathOntarioCanada,
  propBackgroundImage,
}) => {
  const favoriteStyle: CSSProperties = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  return (
    <div className={[styles.staycard, className].join(" ")}>
      <div className={styles.favorite} style={favoriteStyle}>
        <div className={styles.vectorParent}>
          <img className={styles.vectorIcon} alt="" src="/superhost-icon.svg" />
          <div className={styles.superhost}>Superhost</div>
        </div>
        <div className={styles.wrapperHeartIcon}>
          <img className={styles.heartIcon} alt="" src="/hearticon-1.svg" />
        </div>
      </div>
      <div className={styles.stayDetails}>
        <div className={styles.stayInfo}>
          <div className={styles.stayNameLocation}>
            <b className={styles.brightwoodsEstate}>{brightwoodsEstate}</b>
            <div className={styles.bridlepathOntarioCanada}>
              {bridlepathOntarioCanada}
            </div>
          </div>
          <div className={styles.stayRating}>
            <b className={styles.ratingValue}>4.8</b>
            <img className={styles.verifiedIcon} alt="" src="/star-icon.svg" />
          </div>
        </div>
        <div className={styles.stayPrice}>
          <div className={styles.priceDetails}>
            <b className={styles.price}>$502</b>
            <div className={styles.night}>/night</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StayCard;
