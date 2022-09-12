import { useState } from 'react'
import Link from '../router/Link'


const Popup = () => {
    const [showPopup , setShowPopup] = useState(true)

    return (
        <div className={`${showPopup ? 'flex' : 'hidden'} absolute top-0 left-0 w-full h-full items-center justify-center`}>
            
            <section className='w-max relative z-30 rounded-md px-4 py-8 shadow-md bg-white'>
                <div className='flex justify-end'>
                    <button onClick={() => setShowPopup(value => !value)} 
                    className='btn p-3'>
                        <img src={require('../images/close.png')} alt="close" width='10px' />
                    </button>
                </div>

                <div className='flex flex-col flex-row-500 justify-between items-start gap-4'>

                    <img src={require("../images/Icon - discount.png")} alt="discount" />

                    <div className='text-center text-left-500'>
                        <h1 className='text-24 line-h-40'>
                            Before You Go...<br/> 
                            Would 50% Off For 6 Months Help?
                        </h1>

                        <p className='text-muted w-400 text-15 line-h-30 mb-8'>
                            We know things REALLY suck in the world right now - and many businesses<br/>and freelancers are struggling to stay afloat during this COVID-19 crisis.
                        </p>

                        <b className='text-muted text-15 line-h-30'>
                            So if you could use the extra cushion, grab 50% off for 6 months.
                        </b>

                        <p className='text-muted w-400 line-h-30 text-15 mt-4'>
                            We hope you’re staying safe and healthy!
                        </p>


                        <div className='flex flex-col flex-row-400 items-center gap-4 mt-4'>
                            <Link to='/survey'>
                                <button className='btn-padding bg-blue w-700 rounded-sm'>
                                    50 % OFF For 6 Months
                                </button>
                            </Link>

                            <button onClick={() => setShowPopup(value => !value)}
                            className='btn-padding text-blue w-700 rounded-sm'>
                                No, thanks! I’ll cancel
                            </button>
                        </div>

                    </div>

                </div>




            </section>

            <div className='absolute top-0 left-0 w-full h-full bg-white opacity-75 z-20'></div>

        </div>
    )
}

export default Popup