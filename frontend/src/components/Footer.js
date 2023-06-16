import icon from "../assets/Top-Study-Abroad-Consultant-in-Bangladesh-e1646026721153.png"
import '../styles/Footer.css'

const Footer = () => {
    return(
        <div className="footer">
            <div className="_row">
                <div className="col address">
                    <img src={icon} alt=""/>
                    <div className="add1">
                    <h2>Dhaka Office:</h2>
                    <p>Level-7, A Mazid Tower, Ka-24, Progoti Shoroni Rd, (Opposite side of Jamuna Future Park), Dhaka-1229</p>
                    </div>
                    <div className="add2">
                    <h2>Sylhet Office:</h2>
                    <p>Elegant Shopping Mall, Level-11 (Lift-10), Jallarpar
                    Road, Zindabazar, Sylhet-3100</p>
                    </div>
                </div>
                <div className="col contact-container">
                <h2>Contact</h2>
                   <div className="phone">
                        <h3>Phone</h3>
                        <p>+88028416277, +88028417277</p>
                   </div>
                   <div className="mobile">
                        <h3>Mobile</h3>
                        <p>+8801720553276,77,75,78,79
                        +60102066777 (Malaysia)</p>
                   </div>
                   <div className="email">
                        <h3>Email</h3>
                        <p>info@wingsbd.com, enquiry@wingsbd.com</p>
                   </div>
                </div>
                <div className="col location">
                    <h2>Location</h2>
                    <div><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14600.664275077917!2d90.420995!3d23.812693!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf4c63ebf58b%3A0x2f4568f34df1c8cf!2sGlobalwings%20%7C%20Study%20Abroad%20Agency%20in%20Bangladesh!5e0!3m2!1sen!2sbd!4v1686908208496!5m2!1sen!2sbd" style={{width:"6000", height:"450"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
                </div>
            </div>
        </div>
    )
}

export default Footer;