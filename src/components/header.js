import '../App.css'

const Header = () =>{
    return(
            <header>
                <div className='header'>
                    <div className="left">
                    <img src="./logo.png" alt=""></img>
                    <h2>COLD BREW</h2>
                    </div>
                    <div className='right'>
                        <a href='#'>About</a>
                        <a href='#'>Store</a>
                        <a href='#'>Cart</a>
                        <a href='#'>Account</a>
                    </div>
                </div>
            </header>
    )
}

export default Header