import send from '../assets/send1.png';
import pending from '../assets/pending1.png';
import exchange from '../assets/exchange1.png';
import confirm from '../assets/confirm1.png';
import qr from '../assets/qr.png';

const BorrowAwait = () => {
    return (
        <>
            
            <div class='mx-[525px] border border-grey border-opacity-20 rounded-sm px-5 py-3 mt-24 text-grey bg-white'>
                <div class='text-grey text-xl flex justify-center mb-4 mt-2'>Awaiting your deposit</div>

                <div class='mb-2'><span class='text-xs pr-16'>Send deposit: </span><span class='text-[15px]'>0.0007195 BTC</span></div>

                <span class='text-xs pr-12 inline-flex'>Deposit address: </span>
                <div class='border border-grey border-opacity-20 mt-1 rounded-sm'>
                    <span class='pt-5 inline-flex pl-3 mb-3'><img alt='imgg' src={qr} class='w-14'></img><span class='inline-flex text-[10px] px-3'>0x7725e90038363bHbsg181284058769420dhkBe1</span> </span>
                    <div class='text-[11px] bg-grey bg-opacity-20 py-1 pl-3'>Please be careful not to deposit your ETH from a smart contract</div>
                </div>

                <div class='inline-flex mt-3 mb-5'><span class='text-[10px] mr-7 ml-8'><img alt='imgg' src={pending} class='w-9 h-9 rounded-full p-1 ml-5 mb-0.5 mt-3' />Pending Deposit</span><span class='text-[10px] mr-7'><img alt='imgg' src={confirm} class='w-9 h-9 rounded-full p-1  ml-2 mb-0.5 mt-3' />Confirming</span><span class='mr-7 text-[10px]'><img alt='imgg' src={exchange} class='w-9 h-9 rounded-full p-1  ml-2 mb-0.5 mt-3' />Exchanging</span><span class='mr-7 text-[10px]'><img alt='imgg' src={send} class='w-9 h-9 rounded-full p-1 mb-0.5 mt-3' />Sending</span></div>


            </div>
            <div class='mx-[525px] border border-grey border-opacity-20 rounded px-5 py-3 mt-5 text-grey'>
                <div class='text-grey text-xl flex justify-start mb-4 mt-2'>Operation details</div>

                <div class='mb-2'><span class='text-xs pr-24'>You get: </span><span class='text-[15px]'>≈0.0007195 BTC</span></div>
                <div class='mb-2 inline-flex'><span class='text-xs pr-12'>Recipient address: </span><span class='text-[12px] border border-grey border-opacity-20 rounded-sm py-1 px-2'>3L8Ck6bmhskslldn1102836JlJHS1utuTz</span></div>
            </div>
            
        </>
    );
}

export default BorrowAwait;