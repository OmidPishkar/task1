import React from 'react'
import HR from './HR'

const FindBug = () => {
    return (
        <div className='find-bug-styles'>
            
            
            <div>
                <div className='flex items-center gap-2'>
                    <h1 className='title-sect'>Which product(s) did you have an issue with?</h1>
                    <img src={require("../images/black-alert.png")} alt="" />
                </div>

                <select className='w-full select-styles relative'>
                    <option value="">Select Product(s)</option>
                    <option value="product1">Product #1</option>
                    <option value="product2">Product #2</option>
                    <option value="product3">Product #3</option>
                </select>
                
            </div>
            <HR/>


            <div>
                <h1 className='title-sect'>What was it?</h1>

                <div className='bugs-buttons'>
                    <button>One Major Problem</button>
                    <button>Various things</button>
                </div>
            </div>
            <HR/>



            <div>
                <div className='flex items-center gap-2'>
                    <h1 className='title-sect'>What problem(s) did you encounter?</h1>
                    <img src={require("../images/black-alert.png")} alt="" />
                </div>

                <textarea className='text-area-solution mt-4'></textarea>
            </div>
            <HR/>
        </div>
    )
}

export default FindBug