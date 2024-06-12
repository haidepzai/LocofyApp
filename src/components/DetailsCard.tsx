import { FunctionComponent } from "react";
import styles from "./DetailsCard.module.css";

export type DetailsCardType = {
  className?: string;
  frame65?: string;
  dedicatedWorkspace?: string;
  aPrivateRoomEquippedWithW?: string;
};

const DetailsCard: FunctionComponent<DetailsCardType> = ({
  className = "",
  frame65,
  dedicatedWorkspace,
  aPrivateRoomEquippedWithW,
}) => {
  return (
    <div className={[styles.detailscard, className].join(" ")}>
      <img
        className={styles.detailscardChild}
        loading="lazy"
        alt=""
        src={frame65}
      />
      <div className={styles.detailsCardItems}>
        <b className={styles.dedicatedWorkspace}>{dedicatedWorkspace}</b>
        <div className={styles.aPrivateRoom}>{aPrivateRoomEquippedWithW}</div>
      </div>
    </div>
  );
};

export default DetailsCard;
