import { useState } from 'react'
import Link from '../router/Link'
import HR from '../components/HR'
import Alert from '../components/Alert'
import BetterSolution from '../components/BetterSolution'
import FindBug from '../components/FindBug'

let properties = [
    {inputId: 1 , isThis: false},
    {inputId: 2 , isThis: false},
    {inputId: 3 , isThis: false},
    {inputId: 4 , isThis: false},
    {inputId: 5 , isThis: false},
    {inputId: 6 , isThis: false},
    {inputId: 7 , isThis: false}
]


const Survey = () => {
    const [ cancelAccess , setCancelAccess ] = useState(false)
    const [ showBetterSolution , setShowBetterSolution ] = useState(false)
    const [ showFindBug , setShowFindBug ] = useState(false)
    

    const handleChangeForm = event => {
        const id = event.target.id
        const checkedInput = event.target.checked
        
        const indexProperty = properties.findIndex(item => item.inputId == id)
        properties[indexProperty].isThis = checkedInput



        if(id === '2' && checkedInput){
            setShowBetterSolution(true)

        } else if(id === '2' && !checkedInput){
            setShowBetterSolution(false)
        
        } else if(id === '4' && checkedInput){
            setShowFindBug(true)

        } else if(id === '4' && !checkedInput){
            setShowFindBug(false)
        }


        const found = properties.find(item => item.isThis === true)
        if(found !== undefined){
            setCancelAccess(true)
        } else {
            setCancelAccess(false)
        }
    }
    
    return (
        <main className='section-light min-h-screen pb-8'>
            <div className='container form-container'>
                <div className='flex items-center pt-12 gap-4'>
                    <Link to='/'>
                        <img src={require("../images/Back Icon.png")} alt="back" />
                    </Link>
                    <p className='w-700 text-18'>Cancellation Survey</p>
                </div>

                <HR/>


                <section className='bg-white rounded-10 form-padding section-form'>
                    <h1 className='w-700 text-24 line-h-30 text-center official-title'><b>
                        We’re sad to see you go... 
                    </b></h1>

                    <p className='text-muted text-15 w-400 text-center my-4'>
                        Can you tell us why you want to cancel your membership?
                    </p>

                    
                    
                    
                    
                    
                    <form  onChange={handleChangeForm} 
                    className='py-8 relative my-form'>
                        
                        <div className='mb-4 checkbox-group flex items-center gap-4'>
                            <input id='1' type="checkbox"  className='checkbox-styles'/>
                            <label htmlFor='1'>
                                I didn’t realize it was a recurring membership
                            </label>
                        </div>


                        <div className={`mb-4 checkbox-group flex items-center gap-4 ${showBetterSolution && 'bg-light-blue'}`}>
                            <input id='2' type="checkbox"  className='checkbox-styles'/>
                            <label htmlFor='2'>
                                Found a better solution
                            </label>
                        </div>

                        {showBetterSolution && <BetterSolution/>}


                        <div className='mb-4 checkbox-group flex items-center gap-4'>
                            <input id='3' type="checkbox"  className='checkbox-styles'/>
                            <label htmlFor='3'>
                                It’s too expensive
                            </label>
                        </div>


                        <div className={`mb-4 checkbox-group flex items-center gap-4 ${showFindBug && 'bg-light-blue'}`}>
                            <input id='4' type="checkbox"  className='checkbox-styles'/>
                            <label htmlFor='4'>
                                Bugs, things not working properly
                            </label>
                        </div>

                        {showFindBug && <FindBug/>}

                        <div className='mb-4 checkbox-group flex items-center gap-4'>
                            <input id='5' type="checkbox"  className='checkbox-styles'/>
                            <label htmlFor='5'>
                                I just want to pay for a single plugin
                            </label>
                        </div>

                        <div className='mb-4 checkbox-group flex items-center gap-4'>
                            <input id='6' type="checkbox"  className='checkbox-styles'/>
                            <label htmlFor='6'>
                                Not using WordPress anymore
                            </label>
                        </div>

                        <div className='mb-4 checkbox-group flex items-center gap-4'>
                            <input id='7' type="checkbox"  className='checkbox-styles'/>
                            <label htmlFor='7'>
                                Other
                            </label>
                        </div>

                        <Alert/>

                    </form>

                    <div className={`buttons-styles ${cancelAccess ? 'justify-between' : 'justify-end'}`}>
                        <Link to='/'>
                            <button className='back-button'>
                                <img src={require("../images/back2.png")} alt="back" />
                                <span>Back</span>
                            </button>
                        </Link>
                        
                        
                        <button className={cancelAccess ? 'cancel-button' : 'disable-button'}>Cancel Membership</button>
                    </div>


                </section>


            </div>
        </main>
    )
}

export default Survey