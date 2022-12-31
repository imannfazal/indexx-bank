import lady from '../assets/womanFlipCoin.svg';
import yt from '../assets/yt1.png';
import insta from '../assets/inst2.png';
import twi from '../assets/twit2.png';
import red from '../assets/redit2.png';
import index from '../assets/indexx.png';
import need from '../assets/need.png';
import tele from '../assets/telegram.png';
import fb from '../assets/FBlogo.png'
import './Footer.css';
//import { baseCEXURL, baseURL } from '../services/api';
const Footer = () => {
    return (
        <div class='relative h-[460px] -mb-9'>
            <div class="relative md:h-[350px] h-[570px]  w-full text-white ">
                <a href={`/indexx-exchange/help`}><div class='md:flex md:justify-end mr-7 ml-[258px] md:mt-96 mt-24 md:mb-9'><img alt='img' src={need} style={{ marginBotttom: 300, width: 132 }}></img></div></a>
                <span class="absolute inset-x-0 bottom-0 md:h-[250px] h-[440px] w-full bg-fbg">
                    <span class="absolute md:-bottom-[100px] bottom-[320px] md:right-0 md:w-[450px] w-[250px] md:h-[420px] pr-4 ml-[70px] md:ml-[0px]"><img alt='img' src={lady}></img></span>
                    <span class="inline-flex items-center justify-center  w-[200px] md:mt-24 mt-[140px] md:ml-16  mb-2 md:mb-24 mb-[20px] ml-[100px]"><a href='https://www.instagram.com/indexx_ai/' class='w-[35px] mr-2'><img alt='img' src={insta} /></a><a class='w-[35px] mr-2' href='https://www.reddit.com/user/Indexx_ai/'><img alt='img' src={red} /></a><a class='w-[35px] mr-2' href='https://www.youtube.com/channel/UCYXrfhPg7jUMBxPEBCEsaFw'><img alt='img' src={yt} /></a><a class='w-[35px] mr-2' href='https://twitter.com/Indexx_ai'><img alt='img' src={twi} /></a><a href='https://www.facebook.com/profile.php?id=100086225564460' class='w-[35px] mr-2'><img alt='img' src={fb} /></a><a href='https://t.me/indexxai' class='w-[35px] mr-2'><img alt='img' src={tele} /></a></span>
                    <span class='inline-flex md:ml-[15%] mb-5 md:absolute relative md:-bottom-0 -bottom-12'>
                        <span class='mobile'>
                            <span class='ml-4 md:ml-0'>
                                <div class='text-[13px] pb-1 font-medium'>Products</div>
                                <div class='text-[10px] text-[#D7D7D7] pb-0.5'><a href={`/indexx-exchange/buy-sell/get-started`} className='text-[#D7D7D7]'>Centralized</a></div>
                                <div class='text-[10px] text-[#D7D7D7] pb-0.5'><a href='/*' className=' text-[#D7D7D7]'>Decentralized</a></div>
                                <div class='text-[10px] text-[#D7D7D7] pb-0.5'><a href='https://tokens.indexx.ai/' className=' text-[#D7D7D7]'>indexx Tokens</a></div>
                                <div class='text-[10px] text-[#D7D7D7] pb-0.5'><a href='/import-indexx-tokens' className=' text-[#D7D7D7]'>Import indexx Tokens</a></div>
                            </span>
                            <span class='ml-4 md:ml-0'>
                                <span class='text-[13px] pt-2 font-medium pb-1'>Earn</span>
                                <div class='text-[10px] text-[#D7D7D7] pb-0.5'><a href='/TradeToEarn' className=' text-[#D7D7D7]'>Trade to Earn</a></div>
                                <div class='text-[10px] text-[#D7D7D7] pb-0.5'><a href={`/indexx-exchange/coming-soon?page=Indexx%20Bank`} className=' text-[#D7D7D7]'>indexx Bank</a></div>
                            </span>
                        </span>
                        <span class='md:ml-28 mobile'>
                            <span class='ml-4 md:ml-0'>
                                <div class='text-[13px] font-medium pb-1'>Company</div>
                                <div class='text-[10px] text-[#D7D7D7] pb-0.5'><a href={`/indexx-exchange/how-it-works`} className=' text-[#D7D7D7]'>How it Works</a></div>
                                <div class='text-[10px] text-[#D7D7D7] pb-0.5'><a href={`/indexx-exchange/about`} className=' text-[#D7D7D7]'>About</a></div>
                                <div class='text-[10px] text-[#D7D7D7] pb-0.5'><a href='https://test.indexx.ai/' className=' text-[#D7D7D7]'>Hybrid Exchange</a></div>
                                <div class='text-[10px] text-[#D7D7D7] pb-0.5'><a href='https://register.affiliate.indexx.ai/' className=' text-[#D7D7D7]'>Affiliate Program</a></div>
                                <div class='text-[10px] text-[#D7D7D7] pb-0.5'><a href={`/indexx-exchange/blog`} className=' text-[#D7D7D7]'>Blog</a></div>
                                <div class='text-[10px] text-[#D7D7D7] pb-0.5'><a href={`/indexx-exchange/careers`} className=' text-[#D7D7D7]'>Careers</a></div>
                            </span>
                            <span class='ml-4 md:ml-0'>
                                <div class='text-[13px] md:pt-2 font-medium pb-1'>Fortune</div>
                                <div class='text-[10px] text-[#D7D7D7] pb-0.5'><a href='/ComingSoon' className=' text-[#D7D7D7]'>Fortune Daily</a></div>
                                <div class='text-[10px] text-[#D7D7D7] pb-0.5'><a href='/ComingSoon2' className=' text-[#D7D7D7]'>Hedge</a></div>
                            </span>
                        </span>
                    </span>
                    <span class='md:inline-flex md:ml-[45%]  md:absolute relative md:bottom-[120px] bottom-[150px] -right-[155px] md:right-[380px] '><a href='https://test.indexx.ai/'><img alt='img' src={index} width="170px" /></a></span>
                </span>
            </div>
            <div class='text-white bg-[#393939] text-xs py-1.5 flex justify-center md:pr-24'>Copyright © 2023 All Rights Reserved </div>
        </div>
    );
}

export default Footer;