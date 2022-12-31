import DemoPie from "./DemoPie";
import DemoLine from "./DemoLine";
import Chart2 from "./Chart2";
const Dashboard_2 = () => {
    return (
        <><div class='flex justify-center'><div>
            <br /><span class="md:inline-grid grid grid-cols-3 gap-4 md:ml-[104px] ml-4 md:pl- pt-4  m border border-grey border-opacity-20 rounded-sm mt-4 pl-3 pr-3">
                <span class="col-start-1 col-span-2 pl-4 md:text-sm text-xs text-grey">Total Value Locked</span>
                <span class="col-start-1 col-span-2 pl-4 text-grey"><span class='md:text-xl text-lg font-medium'>561,898,504</span> <span class='md:text-xs text-[10px]'>USD</span></span>
                <span class="col-start-1 col-span-full md:w-88 md:h-56 h-24 w-80 pb-4"><DemoPie /></span>
                <span class='col-start-1 col-span-full  border-b border-grey border-opacity-20 pt-2'></span>
                <span class="col-start-1 pl-4 md:text-sm text-xs text-grey pt-12 ">Yield Reserve</span>
                <span class="col-start-1 col-span-2 pl-4 text-grey pb-14"><span class='md:text-xl text-lg font-medium'>119,124,919</span> <span class='md:text-xs text-[10px]'>USD</span></span>
            </span>

            <span class="md:inline-grid grid md:grid-cols-4 md:gap-4 gap-1 pt-4 border border-grey border-opacity-20 rounded-sm mt-4 pb-[69px] pl-3 mx-4 pr-5 grid-col-2">
                <span class="col-start-1 col-span-2 md:inline-grid grid grid-cols-2">
                    <span class='col-start-1 md:col-span-1 col-span-2 text-sm font-medium pl-4 text-grey'>indexx Price</span>
                    <span class='col-start-1 pl-4 text-grey'><span class='md:text-xl text:sm font-medium'>3.04</span> <span class='md:text-xs text-[10px]'>USD</span></span>
                </span>

                <span class="md:col-start-3 col-start-1 md:inline-grid grid grid-cols-1 md:pt-0 pt-4">
                    <span class='col-start-1 md:col-span-1 col-span-2 md:pl-9 pl-4 md:ml-9 text-xs text-grey'>Circulating Supply</span>
                    <span class='col-start-1 md:col-span-1 col-span-2 md:pl-9 pl-4 md:ml-9 text-grey'><span class='md:text-lg text-sm font-normal'>349,206,721</span> <span class='md:text-xs text-[10px]'>iNEX</span></span>

                </span>

                <span class="md:col-start-4 col-start-1 md:inline-grid grid grid-cols-1 md:pt-0 pt-4">
                    <span class='md:col-start-1 col-start-1 md:col-span-1 col-span-2 md:pl-9 pl-4 md:ml-9  text-xs text-grey'>iNEX Market Cap</span>
                    <span class='md:col-start-1 col-start-1 md:pl-9 pl-4 md:ml-9 text-grey'><span class='md:text-lg text-sm font-normal'>1,349,206,721</span> <span class='md:text-xs text-[10px]'>USD</span></span>

                </span>


                <span class="col-start-1 col-span-full w-88 md:h-56 h-28 p-4  m-3"><DemoLine /></span>

                <span class="col-start-1 col-span-2 md:inline-grid grid grid-cols-2">
                    <span class='col-start-1 col-span-2 text-xs font-normal pl-4 text-grey pt-9 mt-9'>iNEX Buyback (72hr)</span>
                    <span class='col-start-1 col-span-2 md:col-span-1 pl-4 text-grey'><span class='md:text-xl text-lg font-medium'>236,958</span> <span class='text-xs text-grey'>iNEX</span></span>
                    <span class='md:col-start-2 col-span-2 md:col-span-1 col-start-1 pl-4 text-grey'><span class='md:text-xl text-lg font-medium'>411,832</span> <span class='text-xs text-grey'>USD</span></span>
                </span>

                <span class="md:col-start-3 col-start-1 col-span-2 md:inline-grid grid grid-cols-2">
                    <span class=' col-start-1 col-span-2 text-xs font-normal pl-4 md:ml-9 text-grey md:pt-9 mt-9'>iNEX Buyback (total)</span>
                    <span class=' col-start-1 col-span-2 md:col-span-1 pl-4 md:ml-9 text-grey'><span class='md:text-xl text-lg font-medium'>7,674,615</span> <span class='text-xs text-grey'>iNEX</span></span>
                    <span class='md:col-start-2 col-span-2 md:col-span-1 col-start-1 pl-4 text-grey'><span class='md:text-xl text-lg font-medium'>9,811,885</span> <span class='text-xs text-grey'>USD</span></span>
                </span>
            </span>

            <div class='px-9 ml-[104px] mr-[90px] py-6 border border-grey border-opacity-20 rounded-sm mt-6'>
                <Chart2 />
                <table class='w-[1200px] text-grey text-xs rounded-sm mt-16'>
                    <thead class='border-b border-grey border-opacity-10'>
                        <tr>
                            <th class='px-6 py-6'>STABLECOIN MARKET</th>
                            <th class='px-6 py-6'>Total Deposit</th>
                            <th class='px-6 py-6'>Deposit APY</th>
                            <th class='px-6 py-6'>Total Borrow</th>
                            <th class='px-6 py-6'>Borrow APR</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class='pr-6 pl-28 py-6 text-xs '>UST</td>
                            <td class='pr-6 pl-32 pt-6'>$ 560M</td>
                            <td class='pr-6 pl-20 pt-6'>10.26%</td>
                            <td class='pr-6 pl-20 pt-6'>$ 2</td>
                            <td class='pr-6 pl-20 pt-6'>1.89%</td>
                        </tr>
                    </tbody>
                </table>

            </div>
            <div class='px-9 ml-[104px] mr-[90px] py-6 border border-grey border-opacity-20 rounded-sm mt-6'>
                <div class='text-[10px] text-grey mt-3'>TOTAL COLLATERAL VALUE <div class='text-xl mb-8 mt-1'>2,064,909 UST</div></div>
                <DemoLine />
            </div>
            </div></div>
        </>
    );
}

export default Dashboard_2;