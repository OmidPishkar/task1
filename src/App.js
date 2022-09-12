import Route from './router/Route'
import Home from './pages/Home'
import Survey from './pages/Survey'

const App = () => {
    return (
        <div>
            <Route path='/'>
                <Home/>
            </Route>

            <Route path='/survey'>
                <Survey/>
            </Route>
        </div>
    )
}

export default App