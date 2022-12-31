//import logo from "../assets/leaf.png";
import logo from "../assets/logonew.png";
import './Header.css'
import ham from "../assets/ham.svg";
const Header = () => {
    return (
        <header class="text-white sticky top-0 z-20">
            <div class="bg-blackbg h-[70px]">
                <div class="container mx-auto md:flex md:flex-wrap pt-6 pb-1 md:flex-row items-center bg-black ">
                    <a href="/*"><img class="leading-normal md:w-[70px] w-[50px] md:mt-3 -mt-3 md:-mt-0 ml-3" src={logo} alt="index logo" /></a>
                    
                    <nav class="mobileheader ml-[25%] flex flex-wrap items-center text-white justify-center mt-5 ">
                        <img alt='hambuger' src={ham} class='w-7 inline-flex justify-end mb-4' />

                    </nav>

                    <nav class=" chart md:static fixed botttom-0 top-0 w-10/12 md:w-auto md:bg-transparent md:ml-4 pb-8 p-2 md:pl-4 md:flex md:flex-wrap items-center md:text-base md:space-x-5 md:visible space-y-5 md:space-y-0 text-whitebg">
                        <a class="mr-5 text-white text-sm hover:text-selected" href="/indexxBank/Dashboard">DASHBOARD</a>
                        <a class="mr-5 text-white text-sm hover:text-selected" href="/indexx-bank/MyPage">MY PAGE</a>
                        <a class="mr-5 text-white text-sm hover:text-selected" href="/TradeToEarn">EARN</a>
                        <a class="mr-5 text-white text-sm hover:text-selected" href="/indexx-bank/Borrow">BORROW</a>
                        <a class="mr-5 text-white text-sm hover:text-selected" href="/indexx-bank/Invest">INVEST</a>

                    </nav>
                    <a class='chart inline-flex items-center border rounded-full border-lgreen hover:border-green py-0.5 px-5 text-xs  md:ml-[336px] hover:text-lgreen text-lgreen md:mt-0 mb-6' href='https://indexx.ai/'>indexx.ai</a>
                    <button class="chart inline-flex items-center border rounded-full border-lgreen hover:border-green py-0.5 px-5 text-xs  md:ml-4 hover:text-lgreen text-lgreen md:mt-0 mb-6">Login</button>
                    <button class="chart inline-flex items-center border rounded-full border-lgreen hover:border-green py-0.5 px-3 text-xs md:ml-4  hover:text-lgreen text-lgreen md:mt-0 mb-6">Get Started</button>

                    <button class="chart inline-flex items-center border rounded-full border-lgreen hover:border-green py-0.5 px-3 text-xs ml-4 hover:text-lgreen text-lgreen md:mt-0 mb-6">Connect Wallet</button>
                </div>
            </div>
        </header>
    );
}

export default Header;