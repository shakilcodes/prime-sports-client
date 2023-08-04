import React from 'react';
import one from './../../../asset/press/603ddad6dfb53e0a747425cd_5e41018f51ee4c90a9e65dad_FLX-Batte-Cricket-KW100-LT-JR-Bleu-PE20-AH20---000-----Expires-on-25-11-2023-(5)-min.jpg'
import two from './../../../asset/press/Snip20190602_57.webp'
import three from './../../../asset/press/soccer-coaches-courses.jpg'

const SportsPress = () => {
    return (
        <div>
            <div className=' text-center md:mt-[200px]'>

                <div className=''>
                    <div className='flex justify-between relative'>
                        <div data-aos="zoom-in-down " className="card md:w-[400px] md:h-[250px] bg-base-100 mb-5  shadow-xl">
                            <div className='flex gap-3 items-center'>
                                <img className='md:w-[150px] md:h-[150px] rounded-full mt-10' src={one} />
                                <div className='px-3'>
                                    <h1 className='mt-5 text-xl font-bold'>Cricket Training</h1>
                                    <p className='text-start'>
                                        Sid Lahiri's guide on how to play on drive. The 'on drive' is a shot played by the batsman </p>
                                </div>
                            </div>
                            <div className="card-body mt-16">
                                <h2 className="text-3xl font-bold"></h2>
                            </div>
                        </div>
                        <h1 className='md:text-5xl text-2xl text-center my-6 md:my-10 font-bold md:mb-[150px] absolute -top-20 start-[500px]'>Sportspress <br /> Compatible</h1>
                        <button className='mt-20 btn'>View more</button>
                        <div data-aos="zoom-in-down " className="card md:w-[400px] md:h-[250px] bg-base-100 mb-5  shadow-xl">
                            <div className='flex gap-3 items-center'>
                                <img className='md:w-[150px] md:h-[150px] rounded-full mt-10' src={two} />
                                <div className='px-3'>
                                    <h1 className='mt-5 text-xl font-bold'>Basketball Club</h1>
                                    <p className='text-start'>
                                    The Bangladesh national basketball team is the national basketball team representing Bangladesh.</p>
                                </div>
                            </div>
                            <div className="card-body mt-16">
                                <h2 className="text-3xl font-bold"></h2>
                            </div>
                        </div>
                    </div>
                    <div data-aos="zoom-in-down " className="card md:w-[400px] md:h-[250px] bg-base-100 mb-5  shadow-xl mx-auto">
                        <div className='flex gap-3 items-center'>
                            <img className='md:w-[150px] md:h-[150px] rounded-full mt-10' src={three} />
                            <div className='px-3'>
                                    <h1 id='popularCouches' className='mt-5 text-xl font-bold'>Football Program</h1>
                                    <p className='text-start'>
                                    The 2023 soccer schedule for all major soccer leagues on ESPN. </p>
                                </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SportsPress;