import '../App.css'

const Footer = () =>{
    return(
        <footer>
            <div className="footer">
                <div className="left">
                    <img src="./logo.png" alt="" />
                </div>
                <div className="middle">
                    <h1>Get In Touch</h1>
                    <p>Cold Brew Coffee Online (Cebu City)</p>
                    <p>Mobile: +63xxxxxxxxxx</p>
                    <p>Cold Brew (Casili, Consolacion)</p>
                    <p>Mobile: 09xxxxxxxxx</p>
                    <p>Email us: coldbrewcoffee@gmail.com</p>
                    <br></br>
                    <p>69, Dove Street, Casili Consolacion Cebu.</p>
                </div>
                <div className="right">
                    <h1>Follow Us</h1>
                    <a href="#" className="fa fa-facebook links"></a>
                    <a href="#" className="fa fa-twitter links"></a>
                    <a href="#" className="fa fa-instagram links"></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer