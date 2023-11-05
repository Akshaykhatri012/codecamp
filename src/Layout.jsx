import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <>        
        <Header/>
        <Outlet/>       
            {/*Outlet is dynamic it is where you want things that are changing to be added*/}
        <Footer/>
        </>
    )
}

export default Layout
