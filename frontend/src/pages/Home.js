import React from "react";
import "../styles/Home.css";
import _Navbar from "../components/Navbar.js";
import Hero from "../components/Hero.js";
import YtCard from "../components/YtCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SchoolIcon from "@mui/icons-material/School";
import AirplanemodeActiveRoundedIcon from "@mui/icons-material/AirplanemodeActiveRounded";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import HomeIcon from "@mui/icons-material/Home";
import Footer from "../components/Footer.js";
import StarIcon from "@mui/icons-material/Star";
import ImageCard from "../components/ImageCard";
import { responsive1, responsive2, links, images } from "../constants.js";

const Home = () => {
  return (
    <div className="home">
      <_Navbar />
      <Hero />
      <div className="yt-container">
        <h2>Study Abroad Agency in Bangladesh​</h2>
        <p>Pioneer Overseas Education Consultant in Dhaka</p>
        <Carousel responsive={responsive1} showDots={true}>
          {links.map((link) => (
            <YtCard link={link} />
          ))}
        </Carousel>
      </div>
      <div className="card-container">
        <div className="item">
          <SchoolIcon
            sx={{
              color: "white",
              fontSize: "4rem",
              backgroundColor: "#006DC9",
              borderRadius: "50%",
              margin: "2rem",
            }}
          />
          <h2>Visit Us</h2>
          <p>Get free consultation from our counselor</p>
        </div>
        <div className="item">
          <SchoolIcon
            sx={{
              color: "white",
              fontSize: "4rem",
              backgroundColor: "#006DC9",
              borderRadius: "50%",
              margin: "2rem",
            }}
          />
          <h2>Apply</h2>
          <p>Apply with your all academic documents</p>
        </div>
        <div className="item">
          <MonetizationOnIcon
            sx={{
              color: "white",
              fontSize: "4rem",
              backgroundColor: "#006DC9",
              borderRadius: "50%",
              margin: "2rem",
            }}
          />
          <h2>Get Scholarship</h2>
          <p>Check your eligibility and get scholarship</p>
        </div>
        <div className="item">
          <AirplanemodeActiveRoundedIcon
            sx={{
              color: "white",
              fontSize: "4rem",
              backgroundColor: "#006DC9",
              borderRadius: "50%",
              margin: "2rem",
            }}
          />
          <h2>Fly</h2>
          <p>Let's fly to your dream destination</p>
        </div>
      </div>
      <div className="text-content-container">
        <div className="left">
          <p>
            Are you a student from Bangladesh dreaming of pursuing your higher
            education abroad? Look no further than Globalwings. Globalwings is
            one of the top education consultancy firm and Study Abroad Agency in
            Bangladesh, providing assistance to students who want to pursue
            higher studies abroad. It has been serving educational consultancy
            for Bangladeshi students for more than 26 years.
          </p>
          <p>
            We specialize in helping students realize their dreams of studying
            in Australia, Canada, UK, USA, Malaysia, and Others Country. Our
            team of experienced consultants is here to guide you through every
            step of the process to excel and achieve success in your academic
            journey. We are here to guide you on your journey to academic
            success and personal growth in foreign lands.
          </p>
        </div>
        <div className="right">
          <iframe
            width="560"
            height="250"
            src="https://www.youtube.com/embed/FsBFtI9Lm8Q"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className="higher-education-container">
        <h2>Best Higher Education Destinations</h2>
        <p>
          The best places for you to study, work and settle with a secure
          career.
        </p>
        <div className="row">
          <div className="col">
            <img
              src={
                "https://wingsbd.com/wp-content/uploads/2023/06/Study-in-Australia-from-Bangladesh-2-1-768x513.webp"
              }
              width="300px"
              alt=""
            />
            <div className="content">
              <p>Study in Australia</p>
              <button className="btn">Apply Now</button>
            </div>
          </div>
          <div className="col">
            <img
              src={
                "https://wingsbd.com/wp-content/uploads/2023/06/Study-in-Australia-from-Bangladesh-2-1-768x513.webp"
              }
              width="300px"
              alt=""
            />
            <div className="content">
              <p>Study in Australia</p>
              <button className="btn">Apply Now</button>
            </div>
          </div>
          <div className="col">
            <img
              src={
                "https://wingsbd.com/wp-content/uploads/2023/06/Study-in-Australia-from-Bangladesh-2-1-768x513.webp"
              }
              width="300px"
              alt=""
            />
            <div className="content">
              <p>Study in Australia</p>
              <button className="btn">Apply Now</button>
            </div>
          </div>
          <div className="col">
            <img
              src={
                "https://wingsbd.com/wp-content/uploads/2023/06/Study-in-Australia-from-Bangladesh-2-1-768x513.webp"
              }
              width="300px"
              alt=""
            />
            <div className="content">
              <p>Study in Australia</p>
              <button className="btn">Apply Now</button>
            </div>
          </div>
          <div className="col">
            <img
              src={
                "https://wingsbd.com/wp-content/uploads/2023/06/Study-in-Australia-from-Bangladesh-2-1-768x513.webp"
              }
              width="300px"
              alt=""
            />
            <div className="content">
              <p>Study in Australia</p>
              <button className="btn">Apply Now</button>
            </div>
          </div>
          <div className="col">
            <img
              src={
                "https://wingsbd.com/wp-content/uploads/2023/06/Study-in-Australia-from-Bangladesh-2-1-768x513.webp"
              }
              width="300px"
              alt=""
            />
            <div className="content">
              <p>Study in Australia</p>
              <button className="btn">Apply Now</button>
            </div>
          </div>
        </div>
      </div>

      <div className="preferred-degree-container">
        <h2>Choose your prefered degree from here</h2>
        <div className="preferred-degree-btn-groups">
          <button className="btn">Foundation Programs</button>
          <button className="btn">Diploma Programs</button>
          <button className="btn">Advanced Diploma Programs</button>
          <button className="btn">Undergraduate Progrms</button>
          <button className="btn">Postgraduate Programs</button>
          <button className="btn">PhD Programs</button>
        </div>
      </div>
      <h2 style={{ fontSize: "3rem", textAlign: "center" }}>Contact Us</h2>
      <div className="contact-us">
        <div className="item">
          <HomeIcon
            sx={{
              color: "white",
              fontSize: "4rem",
              backgroundColor: "#006DC9",
              borderRadius: "50%",
              margin: "2rem",
            }}
          />
          <h2>Dhaka Office</h2>
          <p>
            House # KA-24, 7th Floor, A Mozid Tower, Pragati Sarani, Bashundhara
            Road, Dhaka.
          </p>
          <p>E-mail: info@wingsbd.com</p>
          <p>Tell: +88028416277, +88028417277,</p>
          <p>Cell: +8801720553272-80</p>
        </div>
        <div className="item">
          <HomeIcon
            sx={{
              color: "white",
              fontSize: "4rem",
              backgroundColor: "#006DC9",
              borderRadius: "50%",
              margin: "2rem",
            }}
          />
          <h2>Dhaka Office</h2>
          <p>
            House # KA-24, 7th Floor, A Mozid Tower, Pragati Sarani, Bashundhara
            Road, Dhaka.
          </p>
          <p>E-mail: info@wingsbd.com</p>
          <p>Tell: +88028416277, +88028417277,</p>
          <p>Cell: +8801720553272-80</p>
        </div>
        <div className="item">
          <HomeIcon
            sx={{
              color: "white",
              fontSize: "4rem",
              backgroundColor: "#006DC9",
              borderRadius: "50%",
              margin: "2rem",
            }}
          />
          <h2>Dhaka Office</h2>
          <p>
            House # KA-24, 7th Floor, A Mozid Tower, Pragati Sarani, Bashundhara
            Road, Dhaka.
          </p>
          <p>E-mail: info@wingsbd.com</p>
          <p>Tell: +88028416277, +88028417277,</p>
          <p>Cell: +8801720553272-80</p>
        </div>
      </div>
      <div className="consultancy-firm">
        <div className="_row">
          <div className="left">
            <img
              src="https://wingsbd.com/wp-content/uploads/2023/01/study-abroad.gif"
              alt=""
            />
          </div>
          <div className="right">
            <h2>Education Consultancy Firm in Dhaka</h2>
            <p>
              As a reputable Education Consultancy Firm in Dhaka, Globalwings
              takes pride in offering comprehensive services tailored to meet
              the unique needs of each student. From selecting the right
              destination and university to assisting with the application
              process, visa requirements, and accommodation arrangements, our
              team will be with you every step of the way. We work closely with
              renowned universities and colleges worldwide, ensuring that you
              have access to a wide range of programs and scholarship
              opportunities.
            </p>
            <p>
              Our goal is to make the process of studying abroad hassle-free and
              seamless. We understand that every student’s journey is different,
              and we take the time to understand your individual requirements
              and aspirations.
            </p>
            <p>
              So, if you are ready to embark on an extraordinary educational
              journey, choose Globalwings as your study abroad agency. Let us be
              your wings to success and help you spread your horizons across
              borders. Contact us today, and together, we’ll make your dreams
              take flight!
            </p>
          </div>
        </div>
      </div>
      <div className="reviews-container">
        <h2>Reviews from Student Visa Achievers</h2>

        <div className="_row">
          <div className="col">
            <div className="image">
              <img
                src="https://wingsbd.com/wp-content/uploads/2023/06/Wings-May-3-33-200x200.jpg"
                alt=""
              />
            </div>
            <div className="content">
              <p>
                I cannot emphasize enough the positive impact studying abroad
                with globalwings has had on my personal and professional
                development. It opened my eyes to new ideas, expanded my
                network, and provided me with a newfound sense of independence.
                The memories and experiences I gained will stay with me for a
                lifetime.
              </p>
            </div>
            <div className="_name">
              <h2>Fahim Alam</h2>
              <StarIcon sx={{ color: "yellow", fontSize: "2rem" }} />
              <StarIcon sx={{ color: "yellow", fontSize: "2rem" }} />
              <StarIcon sx={{ color: "yellow", fontSize: "2rem" }} />
              <StarIcon sx={{ color: "yellow", fontSize: "2rem" }} />
              <StarIcon sx={{ color: "yellow", fontSize: "2rem" }} />
            </div>
          </div>
          <div className="col">
            <div className="image">
              <img
                src="https://wingsbd.com/wp-content/uploads/2023/06/Wings-May-3-33-200x200.jpg"
                alt=""
              />
            </div>
            <div className="content">
              <p>
                I cannot emphasize enough the positive impact studying abroad
                with globalwings has had on my personal and professional
                development. It opened my eyes to new ideas, expanded my
                network, and provided me with a newfound sense of independence.
                The memories and experiences I gained will stay with me for a
                lifetime.
              </p>
            </div>
            <div className="_name">
              <h2>Fahim Alam</h2>
              <StarIcon sx={{ color: "yellow", fontSize: "2rem" }} />
              <StarIcon sx={{ color: "yellow", fontSize: "2rem" }} />
              <StarIcon sx={{ color: "yellow", fontSize: "2rem" }} />
              <StarIcon sx={{ color: "yellow", fontSize: "2rem" }} />
              <StarIcon sx={{ color: "yellow", fontSize: "2rem" }} />
            </div>
          </div>
          <div className="col">
            <div className="image">
              <img
                src="https://wingsbd.com/wp-content/uploads/2023/06/Wings-May-3-33-200x200.jpg"
                alt=""
              />
            </div>
            <div className="content">
              <p>
                I cannot emphasize enough the positive impact studying abroad
                with globalwings has had on my personal and professional
                development. It opened my eyes to new ideas, expanded my
                network, and provided me with a newfound sense of independence.
                The memories and experiences I gained will stay with me for a
                lifetime.
              </p>
            </div>
            <div className="_name">
              <h2>Fahim Alam</h2>
              <StarIcon sx={{ color: "yellow", fontSize: "2rem" }} />
              <StarIcon sx={{ color: "yellow", fontSize: "2rem" }} />
              <StarIcon sx={{ color: "yellow", fontSize: "2rem" }} />
              <StarIcon sx={{ color: "yellow", fontSize: "2rem" }} />
              <StarIcon sx={{ color: "yellow", fontSize: "2rem" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="help-section">
        <div className="row1">
          <p>We will help you to achieve your goals.</p>
          <p>Call or WhatsApp Now</p>
          <p>+8801720553272-79</p>
        </div>
        <div className="row2">
          <p>
            globalwings has a global footprint with associates and world
            recognized universities of Australia, Canada, Malaysia, UK, USA
          </p>
        </div>
      </div>
      <h2
        style={{ fontSize: "3rem", textAlign: "center", marginBottom: "2rem" }}
      >
        Latest Blogs and Events
      </h2>
      <div className="latest-blogs">
        <div className="blog">
          <img
            src={
              "https://wingsbd.com/wp-content/uploads/2023/03/study-in-australia-from-bangladesh-after-hsc-420x330.jpg"
            }
            alt=""
          />
          <h2>Study in Australia from Bangladesh after HSC</h2>
          <p>BY GLOBALWINGS</p>
        </div>
        <div className="blog">
          <img
            src={
              "https://wingsbd.com/wp-content/uploads/2022/12/pct-building-scaled-420x330.jpg"
            }
            alt=""
          />
          <h2>Study in Australia from Bangladesh after HSC</h2>
          <p>BY GLOBALWINGS</p>
        </div>
        <div className="blog">
          <img
            src={
              "https://wingsbd.com/wp-content/uploads/2023/02/Study_in_Australia_from_Bangladesh_with_Scholarship_-420x330.jpg"
            }
            alt=""
          />
          <h2>Study in Australia from Bangladesh after HSC</h2>
          <p>BY GLOBALWINGS</p>
        </div>
      </div>
      <div className="recent-photographs">
        <h2>Recent Photographs</h2>
        {
          <Carousel responsive={responsive2} showDots={true}>
            {images.map((image) => (
              <ImageCard image={image} />
            ))}
          </Carousel>
        }
      </div>
      <Footer />
    </div>
  );
};

export default Home;
