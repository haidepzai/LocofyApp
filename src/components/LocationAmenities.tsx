import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import AmenitiesSection from "./AmenitiesSection";
import styles from "./LocationAmenities.module.css";

export type LocationAmenitiesType = {
  className?: string;
};

const LocationAmenities: FunctionComponent<LocationAmenitiesType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.locationAmenities, className].join(" ")}>
      <div className={styles.amenitiesParent}>
        <h3 className={styles.amenities}>Amenities</h3>
        <div className={styles.amenitiesList}>
          <div className={styles.amenityItems}>
            <AmenitiesSection
              mdilake="/mdilake.svg"
              lakeside="Lakeside"
              tablertoolsKitchen2="/tablertoolskitchen2.svg"
              kitchen="Kitchen"
              materialSymbolsnestCamIqO="/materialsymbolsnestcamiqoutdooroutline.svg"
              securityCamerasOnProperty="Security cameras on property"
              ionwifi="/ionwifi.svg"
              wifi="Wifi"
            />
            <AmenitiesSection
              mdilake="/phcar.svg"
              lakeside="Free parking"
              tablertoolsKitchen2="/cilshower.svg"
              kitchen="Outdoor shower"
              materialSymbolsnestCamIqO="/materialsymbolswatervocoutlinerounded.svg"
              securityCamerasOnProperty="Hot water"
              ionwifi="/covidpersonalhygienehandliquidsoap.svg"
              wifi="Shampoo"
              propFlex="0.6055"
              propMinHeight="20px"
              propWidth="unset"
              propDisplay="unset"
              propAlignSelf="unset"
            />
            <AmenitiesSection
              mdilake="/phfireextinguisher.svg"
              lakeside="Fire Extinguisher"
              tablertoolsKitchen2="/streamlinefoodkitchenwarerefrigeratorfridgecookappliancescookingnutritionfreezerappliancefood.svg"
              kitchen="Freezer"
              materialSymbolsnestCamIqO="/materialsymbolscoffeemakeroutline.svg"
              securityCamerasOnProperty="Coffee Maker"
              ionwifi="/mdistove.svg"
              wifi="Glass stove"
              propFlex="0.6307"
              propMinHeight="20px"
              propWidth="unset"
              propDisplay="unset"
              propAlignSelf="unset"
            />
          </div>
          <Button
            className={styles.searchFlightsButton}
            disableElevation
            variant="outlined"
            sx={{
              textTransform: "none",
              color: "#171e1d",
              fontSize: "16",
              borderColor: "#171e1d",
              borderRadius: "6px",
              "&:hover": { borderColor: "#171e1d" },
              width: 185,
              height: 48,
            }}
          >
            Show all amenities
          </Button>
        </div>
      </div>
      <div className={styles.map}>
        <div className={styles.mapContainer}>
          <div className={styles.mapContent}>
            <div className={styles.locationDetails}>
              <h3 className={styles.whereYoullBe}>Where you’ll be</h3>
              <div className={styles.address}>
                <img
                  className={styles.locationIcon}
                  alt=""
                  src="/vector-3.svg"
                />
                <div className={styles.theBridlePath}>The Bridle Path</div>
              </div>
            </div>
            <div className={styles.weather}>
              <div className={styles.weatherInfo}>
                <img
                  className={styles.suncloudIcon}
                  loading="lazy"
                  alt=""
                  src="/suncloud.svg"
                />
                <div className={styles.weatherInfo1}>
                  <b className={styles.temperature}>20°C</b>
                  <div className={styles.weatherDetail}>Broken clouds</div>
                </div>
              </div>
              <div className={styles.frameParent}>
                <div className={styles.sunParent}>
                  <img className={styles.sunIcon} alt="" src="/sun.svg" />
                  <div className={styles.cWrapper}>
                    <b className={styles.c}>23°C</b>
                  </div>
                </div>
                <div className={styles.sunGroup}>
                  <div className={styles.sun}>Sun</div>
                  <div className={styles.aug}>27 Aug</div>
                </div>
              </div>
              <div className={styles.frameGroup}>
                <div className={styles.suncloudParent}>
                  <img
                    className={styles.suncloudIcon1}
                    alt=""
                    src="/suncloud-1.svg"
                  />
                  <div className={styles.cContainer}>
                    <b className={styles.c1}>22°C</b>
                  </div>
                </div>
                <div className={styles.monParent}>
                  <div className={styles.mon}>Mon</div>
                  <div className={styles.aug1}>28 Aug</div>
                </div>
              </div>
              <div className={styles.frameContainer}>
                <div className={styles.sunContainer}>
                  <img className={styles.sunIcon1} alt="" src="/sun.svg" />
                  <div className={styles.cFrame}>
                    <b className={styles.c2}>23°C</b>
                  </div>
                </div>
                <div className={styles.tueParent}>
                  <div className={styles.tue}>Tue</div>
                  <div className={styles.aug2}>29 Aug</div>
                </div>
              </div>
              <div className={styles.frameDiv}>
                <div className={styles.suncloudGroup}>
                  <img
                    className={styles.suncloudIcon2}
                    alt=""
                    src="/suncloud-1.svg"
                  />
                  <div className={styles.cWrapper1}>
                    <b className={styles.c3}>20°C</b>
                  </div>
                </div>
                <div className={styles.wedParent}>
                  <div className={styles.wed}>Wed</div>
                  <div className={styles.aug3}>30 Aug</div>
                </div>
              </div>
              <div className={styles.frameParent1}>
                <div className={styles.suncloudContainer}>
                  <img
                    className={styles.suncloudIcon3}
                    alt=""
                    src="/suncloud-1.svg"
                  />
                  <div className={styles.cWrapper2}>
                    <b className={styles.c4}>19°C</b>
                  </div>
                </div>
                <div className={styles.thuParent}>
                  <div className={styles.thu}>Thu</div>
                  <div className={styles.aug4}>31 Aug</div>
                </div>
              </div>
              <div className={styles.frameParent2}>
                <div className={styles.sunParent1}>
                  <img className={styles.sunIcon2} alt="" src="/sun.svg" />
                  <div className={styles.cWrapper3}>
                    <b className={styles.c5}>24°C</b>
                  </div>
                </div>
                <div className={styles.friParent}>
                  <div className={styles.fri}>Fri</div>
                  <div className={styles.sep}>1 Sep</div>
                </div>
              </div>
            </div>
          </div>
          <img className={styles.mapIcon} alt="" src="/map1@2x.png" />
          <img
            className={styles.mapContainerChild}
            loading="lazy"
            alt=""
            src="/frame-92.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default LocationAmenities;
