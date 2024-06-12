import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.listingContentParent, className].join(" ")}>
      <div className={styles.listingContent}>
        <img
          className={styles.placeholderIcon}
          loading="lazy"
          alt=""
          src="/frame-9@2x.png"
        />
        <div className={styles.imageCarousel}>
          <img
            className={styles.carouselItemsIcon}
            loading="lazy"
            alt=""
            src="/frame-46@2x.png"
          />
          <img
            className={styles.carouselItemsIcon1}
            loading="lazy"
            alt=""
            src="/frame-47@2x.png"
          />
          <img
            className={styles.carouselItemsIcon2}
            loading="lazy"
            alt=""
            src="/frame-48@2x.png"
          />
          <img
            className={styles.carouselItemsIcon3}
            loading="lazy"
            alt=""
            src="/frame-49@2x.png"
          />
          <div className={styles.carouselItems}>
            <img
              className={styles.carouselImageIcon}
              alt=""
              src="/carousel-image@2x.png"
            />
            <img
              className={styles.carouselControlIcon}
              loading="lazy"
              alt=""
              src="/vector.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.listingInfo}>
        <div className={styles.listingDetails}>
          <div className={styles.listingHeader}>
            <div className={styles.listingTitle}>
              <div className={styles.title}>
                <h2 className={styles.brightwoodsCabin}>Brightwoods Cabin</h2>
                <div className={styles.bridlepathOntarioCanada}>
                  Bridlepath, Ontario, Canada
                </div>
              </div>
              <img
                className={styles.heartIcon}
                loading="lazy"
                alt=""
                src="/hearticon.svg"
              />
            </div>
            <div className={styles.rating}>
              <div className={styles.stars}>
                <b className={styles.starCount}>5.0</b>
                <img className={styles.starIcon} alt="" src="/vector-1.svg" />
              </div>
              <div className={styles.reviewCount}>
                <u className={styles.reviews}>200 Reviews</u>
              </div>
            </div>
          </div>
          <div
            className={styles.welcomeToOur}
          >{`Welcome to our cozy cabin retreat nestled in the heart of Bridlepath, Ontario! Surrounded by lush landscapes and tranquil trails, this charming getaway offers the perfect blend of rustic elegance and modern comfort. `}</div>
        </div>
        <div className={styles.booking}>
          <div className={styles.price}>
            <div className={styles.priceDetails}>
              <b className={styles.priceValue}>$658</b>
              <div className={styles.nightlyPrice}>
                <div className={styles.night}>/night</div>
              </div>
            </div>
            <div className={styles.trending}>
              <div className={styles.trendingDetails}>
                <div className={styles.icontrend}>
                  <div className={styles.iconParent}>
                    <img className={styles.icon} alt="" src="/icon.svg" />
                    <div className={styles.trendBackground} />
                  </div>
                </div>
                <div className={styles.trendLabel}>
                  <div className={styles.bestTimeTo}>Best time to Book</div>
                </div>
              </div>
            </div>
          </div>
          <Button
            className={styles.searchFlightsButton}
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "16",
              background: "#00c29f",
              borderRadius: "6px",
              "&:hover": { background: "#00c29f" },
              height: 58,
            }}
          >
            Book this home
          </Button>
        </div>
        <div className={styles.host}>
          <div className={styles.hostedBy}>Hosted by:</div>
          <div className={styles.hostDetails}>
            <img
              className={styles.profilePictureIcon}
              loading="lazy"
              alt=""
              src="/ellipse-2@2x.png"
            />
            <div className={styles.hostInfo}>
              <b className={styles.michelleWard}>Michelle Ward</b>
              <div className={styles.joinedInMay}>Joined in May 2021</div>
            </div>
            <button className={styles.superhostBadge}>
              <img className={styles.badgeIcon} alt="" src="/vector-2.svg" />
              <div className={styles.superhost}>Superhost</div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
