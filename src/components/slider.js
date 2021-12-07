import SimpleImageSlider from "react-simple-image-slider";
import image11 from "./img/banner.jpg"
import image12 from './img/banner-1.jpg'
import image13 from './img/banner-2.jpg'
import { useMediaQuery } from "react-responsive";
const images = [
  {url :image11},
  {url :image12},
  {url :image13},
];

const ImgSlider = () => {
 const pc =useMediaQuery({
   query: '(min-width: 769px) and (max-width: 2560px)'
 })
 const tablet  = useMediaQuery({
   query: '(min-width: 426px) and (max-width:  786px)'
 })
 const mobile  = useMediaQuery({
  query: '(min-width: 320px) and (max-width: 425px)'
})
  return (
    <div>
      { pc && <SimpleImageSlider
        width={"100%"}
        height={404}
        images={images}
        showBullets={true}
        showNavs={true}
        loop={true} 
        autoPlay={true}  
        slideDuration={2}
         />}
         { tablet && <SimpleImageSlider
        width={"100%"}
        height={250}
        images={images}
        showBullets={true}
        showNavs={true}
        loop={true} 
        autoPlay={true}  
        slideDuration={2}
         />}
         { mobile && <SimpleImageSlider
        width={"100%"}
        height={150}
        images={images}
        showBullets={true}
        showNavs={true}
        loop={true} 
        autoPlay={true}  
        slideDuration={2}
         />}
    </div>
  );
}
export default ImgSlider;