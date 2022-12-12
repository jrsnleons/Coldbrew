import '../App.css'
import { Link } from 'react-router-dom';

const Header = () =>{
    return(
            <header>
                <div className='header'>
                    <a href='/' className='Headerlink'>
                    <div className="left">
                    <img src="./logo.png" alt=""></img>
                    <h2>COLD BREW</h2>
                    </div>
                    </a>
                    <div className='Right'>
                        <a href=''>About</a>
                        <a href='/store'>Store</a>
                        <a href='#'>Cart</a>
                        <a href='#'>Account</a>
                    </div>
                </div>
            </header>
    )
}

export default Header