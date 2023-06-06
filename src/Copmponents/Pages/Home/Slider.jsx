import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import sliderone from './../../../../asset/banner/Cricket copy.jpg'
import slidertwo from './../../../../asset/banner/football.jpg'
import sliderthree from './../../../../asset/banner/Shutterstock-RhaTS2JD5v copy.jpg'

const Slider = () => {
    return (
        <Carousel>
                <div className='relative'>
                    <img src={sliderone} />
                    <div className='absolute -mt-[600px] mx-10  text-white text-start'>
                    <h1 className='text-5xl font-bold mb-5 text-orange-500'>Unleash Your Cricketing Potential</h1>
                    <p>Prime Sports Academy  offers top-notch cricket training programs for aspiring cricketers of all ages <br /> and skill levels. Our expert coaches provide comprehensive training, focusing on batting, bowling,<br /> fielding, and overall game strategy. Join us to take your cricketing skills to the next level!</p>
                    <h3 className='my-7 text-xl text-orange-300'>Become a cricketing champion with Prime Sports Academy!"</h3>
                    </div>
                </div>
                <div>
                    <img src={slidertwo} />
                    <div className='absolute -mt-[600px] mx-10  text-white text-start'>
                    <h1 className='text-5xl font-bold mb-5 text-orange-500'>Ignite Your Football Passion</h1>
                    <p>"Prime Sports Academy is your gateway to excellence in football. We offer professional <br /> football training programs designed to enhance skills, technique, and tactical understanding. <br />Our experienced coaches provide personalized guidance, focusing on ball control, passing, <br />shooting, and teamwork. Join us to elevate your football game!"</p>
                    <h3 className='my-7 text-xl text-orange-300'>"Unleash your potential on the football field with Prime Sports Academy!</h3>
                    </div>
                </div>
                <div>
                <img src={sliderthree} />
                    <div className='absolute -mt-[600px] mx-10  text-white text-start'>
                    <h1 className='text-5xl font-bold mb-5 text-orange-500'>Elevate Your Badminton Skills</h1>
                    <p>Prime Sports Academy is the ultimate destination for badminton enthusiasts. Our comprehensive <br /> badminton training programs cater to players of all ages and skill levels. Our expert coaches focus<br /> on improving techniques, footwork, agility, and strategy to help you become a formidable badminton <br />player. Join us to take your badminton game to new heights!</p>
                    <h3 className='my-7 text-xl text-orange-300'>Unleash your potential on the badminton court with Prime Sports Academy!""</h3>
                    </div>
                </div>
            </Carousel>
    );
};

export default Slider;