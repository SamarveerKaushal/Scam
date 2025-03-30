import React from 'react';

function Stats(){
    return ( 
    <div className='container p-3'>
        <div className='row p-5'>
            <div className='col-6 p-5'>
            <h1 className='fs-2 mb-5'>Trust with confidence</h1>

            <h2 className='fs-4'>Customer first always</h2>
            <p className='text-muted'>That's why 2.75+ crore customers trust BIG BULL with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>

            <h2 className='fs-4'>No spam or gimmicks</h2>
            <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>

            <h2 className='fs-4'>The BIG BULL universe</h2>
            <p >className='text-muted'Not just an app, but a whole ecosystem. Our investments in 300+ fintech startups offer you tailored services specific to your needs.</p>

            <h2 className='fs-4'>Do better with money</h2>
            <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
            </div>
            <div className='col-6 p-5'>
               <img src='./images/ecosystem.png'style={{width:"95%"}}/>
               <div classname='text-center'>
                <a href='' className='mx-5' style={{textdecoration:"none"}}>Explore our item <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                <a href=''  style={{textdecoration:"none"}}>Try new demo</a>
               </div>
                </div>
            </div>
        </div>
     );
}

export default Stats;