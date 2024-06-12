import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./AmenitiesSection.module.css";

export type AmenitiesSectionType = {
  className?: string;
  mdilake?: string;
  lakeside?: string;
  tablertoolsKitchen2?: string;
  kitchen?: string;
  materialSymbolsnestCamIqO?: string;
  securityCamerasOnProperty?: string;
  ionwifi?: string;
  wifi?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
  propMinHeight?: CSSProperties["minHeight"];
  propWidth?: CSSProperties["width"];
  propDisplay?: CSSProperties["display"];
  propAlignSelf?: CSSProperties["alignSelf"];
};

const AmenitiesSection: FunctionComponent<AmenitiesSectionType> = ({
  className = "",
  mdilake,
  lakeside,
  tablertoolsKitchen2,
  kitchen,
  materialSymbolsnestCamIqO,
  securityCamerasOnProperty,
  ionwifi,
  wifi,
  propFlex,
  propMinHeight,
  propWidth,
  propDisplay,
  propAlignSelf,
}) => {
  const amenitiesSection1Style: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  const mdilakeIconStyle: CSSProperties = useMemo(() => {
    return {
      minHeight: propMinHeight,
    };
  }, [propMinHeight]);

  const kitchenStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      display: propDisplay,
    };
  }, [propWidth, propDisplay]);

  const amenityIconsStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  return (
    <div
      className={[styles.amenitiessection1, className].join(" ")}
      style={amenitiesSection1Style}
    >
      <div className={styles.amenityIcons}>
        <img
          className={styles.mdilakeIcon}
          loading="lazy"
          alt=""
          src={mdilake}
          style={mdilakeIconStyle}
        />
        <div className={styles.lakeside}>{lakeside}</div>
      </div>
      <div className={styles.amenityIcons1}>
        <img
          className={styles.tablertoolsKitchen2Icon}
          loading="lazy"
          alt=""
          src={tablertoolsKitchen2}
        />
        <div className={styles.kitchen} style={kitchenStyle}>
          {kitchen}
        </div>
      </div>
      <div className={styles.amenityIcons2} style={amenityIconsStyle}>
        <img
          className={styles.materialSymbolsnestCamIqOIcon}
          loading="lazy"
          alt=""
          src={materialSymbolsnestCamIqO}
        />
        <div className={styles.securityCamerasOn}>
          {securityCamerasOnProperty}
        </div>
      </div>
      <div className={styles.amenityIcons3}>
        <img
          className={styles.ionwifiIcon}
          loading="lazy"
          alt=""
          src={ionwifi}
        />
        <div className={styles.wifi}>{wifi}</div>
      </div>
    </div>
  );
};

export default AmenitiesSection;
