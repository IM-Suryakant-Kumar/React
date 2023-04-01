import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Crousel() {
   return (
      <div className="crousel-container">
         <Carousel
            autoPlay={true}
            infiniteLoop={true}
            showArrows={false}
            showThumbs={false}
            showStatus={false}
            useKeyboardArrows={false}
            showIndicators={false}
            stopOnHover={true}
            animationHandler="fade"
            swipeable={false}
            interval={3000}
            transitionTime={2000}
            className="crousel-wrapper"
         >
            <div>
               <img src="ss1.png" />
            </div>
            <div>
               <img src="ss2.png" />
            </div>
            <div>
               <img src="ss3.png" />
            </div>
            <div>
               <img src="phone.png" />
            </div>
         </Carousel>
      </div>
   );
}

export default Crousel;
