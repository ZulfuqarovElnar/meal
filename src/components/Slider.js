import React from 'react'
import Carousel from 'react-grid-carousel'
import { BsFillBookmarkFill, BsFillShareFill } from "react-icons/bs"
import './SliderStyles.css'

const Slider = () => {
  return (
    <Carousel cols={1} rows={1} gap={10} loop>

            {/* Slider 1 */}
      <Carousel.Item >
        
        <div className='box'>
          <img className='image1' src="assets/1.webp" alt='' /> 
          <h3 className='head1'>Featured Recipe</h3>
          <button className='btn1'><BsFillBookmarkFill/> Save</button> 
          <button className='btn2'><BsFillShareFill/> Share</button>
          <h2 className='head2'>Chocolate Peppermint Yule Roll</h2>
          <h4 className='head3'>The holidays aren't complete without a rich,  chocolatey peppermint Yule roll.</h4><br />
          <button className='btn3'>View More</button>
        </div>
      </Carousel.Item>

          {/* Slider 2 */}
      <Carousel.Item>
        <div  className='box1'>
          <img className='image2' src="assets/2.webp" alt='' />
            <h3 className='head4'>Featured Experience</h3>
            <h3 className='head5'>Wed, Dec 21 | 10:00 PM - 11:00 PM</h3>
            <h2 className='head6'>Eggnog + Eggnog Snickerdoodle Cookies</h2>
            <button className='btn4'>Reserve</button>
        </div>
      </Carousel.Item>

          {/* Slider 3 */}
      <Carousel.Item>
        
        <div className='box2'>
          <img className='image3' src="assets/3.webp" alt='' />
          <img className='profil' src="assets/profil.webp" alt="" />
          <h3 className='head7'>Featured Maker</h3>
          <h2 className='head8'>Kelsey Riley</h2>
          <h3 className='head9'>Plant-Based Meal Plans with Custom Grocery Lists</h3>
          <button className='btn5'> Learn More </button>
        </div>
      </Carousel.Item>

          {/* Slider 4 */}
      <Carousel.Item>
        <img className='image4' src="assets/4.webp" alt='' />
        <div className='box3'>
          <h3 className='head10'>Featured Show</h3>
          <h2 className='head11'>Baking the Holidays</h2>
          <h3 className='head12'>Mia Star helps viewers make, bake, and decorate their way through the holiday season.</h3>
          <button className='btn6'>Watch Now</button> 
        </div>
        
      </Carousel.Item>
    </Carousel>
  )
}

export default Slider 