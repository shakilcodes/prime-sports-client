import React from 'react';
import one from './../../../asset/press/603ddad6dfb53e0a747425cd_5e41018f51ee4c90a9e65dad_FLX-Batte-Cricket-KW100-LT-JR-Bleu-PE20-AH20---000-----Expires-on-25-11-2023-(5)-min.jpg'
import two from './../../../asset/press/Snip20190602_57.webp'
import three from './../../../asset/press/soccer-coaches-courses.jpg'


const SportsPress = () => {
    return (
        <div>
            <div className='  md:mt-[200px]'>

                <div className=''>
                    <div className='flex justify-between relative'>
                        <div data-aos="zoom-in-down " className="card md:w-[430px] md:h-[200px] bg-base-100 mb-5  shadow-xl">
                            <div className='flex gap-3 items-center px-2'>
                                <img className='md:w-[130px] md:h-[130px] rounded-full mt-3' src={one} />
                                <div className=''>
                                    <h1 className='mt-5 mb-2 text-xl font-bold textw'>Cricket Training</h1>
                                    <p className='text-start'>
                                        Sid Lahiri's guide on how to play on drive. The 'on drive' is a shot played by the batsman </p>
                                </div>
                            </div>
                            <div className="card-body mt-16">
                                <h2 className="text-3xl font-bold"></h2>
                            </div>
                        </div>
                        <h1 className='md:text-5xl text-2xl text-center my-6 md:my-10 font-bold md:mb-[150px] absolute -top-20 start-[500px] text-white'>Sportspress <br /> <span className='text-4xl'>Compatible</span></h1>
                        <button className='mt-20 btn bg-[#FFAD02] '>View more</button>
                        <div data-aos="zoom-in-down " className="card md:w-[430px] md:h-[200px] bg-base-100 mb-5  shadow-xl">
                            <div className='flex gap-3 items-center px-2'>
                                <img className='md:w-[130px] md:h-[130px] rounded-full mt-3' src={two} />
                                <div className=''>
                                    <h1 className='mt-5 mb-2 text-xl font-bold textw'>Basketball Club</h1>
                                    <p className='text-start'>
                                    The Bangladesh national basketball team is the national basketball team representing Bangladesh. </p>
                                </div>
                            </div>
                            <div className="card-body mt-16">
                                <h2 className="text-3xl font-bold"></h2>
                            </div>
                        </div>

                        
                    </div>
                    <div data-aos="zoom-in-down " className="mx-auto card md:w-[430px] md:h-[200px] bg-base-100 mb-5  shadow-xl">
                        <div className='flex gap-3 items-center px-2'>
                            <img className='md:w-[130px] md:h-[130px] rounded-full mt-7' src={three} />
                            <div className=''>
                                <h1 className='mt-5 mb-2 text-xl font-bold textw'>Football Program</h1>
                                <p className='text-start'>
                                The 2023 soccer schedule for all major soccer leagues on ESPN.</p>
                            </div>
                        </div>
                        <div className="card-body mt-16">
                            <h2 className="text-3xl font-bold"></h2>
                        </div>
                    </div>
                    
                </div>
            </div>
            <span id='popularCouches'></span>
        </div>
    );
};

export default SportsPress;