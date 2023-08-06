import React from 'react';
import { FaBeer, FaGoogle, FaInstagram, FaTiktok, FaTwitter, FaYoutube} from 'react-icons/fa';
import logo from './../../../../../asset/banner/logo.jpeg'


// done
const Footer = () => {
    return (
        <div className='bg-black text-white'>
            <div className='footer-main pt-32 footer-main'>
                <div className='footer-main md:max-w-[1280px] m-auto'>
                    <div className='footer-container '>
                        <div className='md:flex justify-around gap-12 footer-info md:mx-32 text-center pt-20 pb-10'>
                            <div>
                                <img className='mx-auto w-36 h-28' src={logo} alt="" />
                                <h1 className='text-3xl font-bold mb-5'>Prime Sports</h1>
                                <p className='mb-5 md:w-[700px]'>Experience athletic excellence and personal growth at our Sports Academy. We offer expert coaching, state-of-the-art facilities, and a supportive environment. Our holistic approach focuses on technical skills, physical conditioning, and mental resilience. Join us and unleash your potential in the world of sports..</p>
                                <div className='flex text-3xl gap-3 justify-center items-center'>
                                <FaGoogle></FaGoogle>
                                <FaInstagram></FaInstagram>
                                <FaTwitter></FaTwitter>
                                <FaYoutube></FaYoutube>
                                <FaTiktok></FaTiktok>
                                
                                </div>
                            </div>
                            <div>
                                <h1 className='text-2xl mb-5'>Company</h1>
                                <p>About</p>
                                <p></p>
                                <p>Latest News</p>

                            </div>

                            <div>
                                <h1 className='text-2xl mb-5'>Support</h1>
                                <p>Help Desk</p>
                                <p>Sales</p>
                                <p>Become a Partner</p>
                                <p>Developers</p>
                            </div>
                            <div>
                                <h1 className='text-2xl mb-5'>Contact</h1>
                                <p className='mb-5'>524 BroadWay, NYC</p>
                                <p>+1 777 - 978 - 5570</p>
                            </div>
                        </div>
                        <hr className='mx-32' />
                    </div>
                    <div className=' flex justify-between mx-32 my-10'>
                        <h1>@LifeTime Prime Sports. All Rights Reserved</h1>
                        <h1>Powered by Prime Sports</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;