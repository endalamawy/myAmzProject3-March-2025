import { Carousel as RespCarousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from './Carousel.module.css';
import images from '../Carousel/img/data';

export default function Carousel(props) {
  // default props can be overridden by parent
  const {
    autoPlay = true,
    infiniteLoop = true,
    showIndicators = true,
    showThumbs = false,
    interval = 3000,
    showStatus = false,
    emulateTouch = true,
    stopOnHover = true
  } = props;

  return (
    <div className={styles.carouselWrap}>
      <RespCarousel
        autoPlay={autoPlay}
        infiniteLoop={infiniteLoop}
        showIndicators={showIndicators}
        showThumbs={showThumbs}
        interval={interval}
        showStatus={showStatus}
        emulateTouch={emulateTouch}
        stopOnHover={stopOnHover}
        swipeable={true}
        useKeyboardArrows={true}
        dynamicHeight={false}
        ariaLabel="Image carousel"
      >
        {images.map((img) => (
          <div key={img.id} className={styles.slide}>
            <img src={img.src} alt={img.alt} className={styles.image} />
            {/* optional caption */}
            {/* <p className="legend">{img.alt}</p> */}
          </div>
        ))}
      </RespCarousel>
    </div>
  );
}
