import "../styles/home.css";
import { ElectricBolt, GpsFixed, BatterySaver } from "@mui/icons-material";

export const Home = () => {
  return (
    <div className="home">
      <div className="header">
        <div className="left-header">
          <h1>
            FUEL YOUR BODY <br /> POWER YOUR MIND
          </h1>
          <button className="header-button">SHOP NOW</button>
        </div>
        <div className="right-header">
          <span className="right-header-overlay-img"></span>
        </div>
      </div>

      <div className="iconBanner">
        <div className="icon">
          <ElectricBolt fontSize="inherit" />
          <span className="icon-text">Energy</span>
        </div>
        <div className="icon">
          <GpsFixed fontSize="inherit" />
          <span className="icon-text">Focus</span>
        </div>
        <div className="icon">
          <BatterySaver fontSize="inherit" />
          <span className="icon-text">Recovery</span>
        </div>
      </div>

      <div className="productsContainer">
        <div className="product">
          <img src={"assets/watermelonPreworkout.webp"} alt="pre-workout" />
          <a className="hover-underline-animation">SHOP PRE-WORKOUT</a>
        </div>
        <div className="product">
          <img src={"assets/protein.webp"} alt="protein" />
          <a className="hover-underline-animation">SHOP PROTEIN</a>
        </div>
        <div className="product">
          <img src={"assets/EAAs.webp"} alt="amino" />
          <a className="hover-underline-animation">SHOP AMINOS</a>
        </div>
      </div>
      <div className="additionalContentSection">
        <div className="homeImageContainer">
          <div className="image">
            <img src={"assets/homeImage1.jpg"} alt="home page" />
          </div>
          <span className="imageText">
            <h2>BECOME THE BEST VERSION OF YOURSELF</h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
            <button>Join Our Team</button>
          </span>
        </div>
        <hr />
        <div className="homeImageContainer">
          <span className="imageText">
            <h2>SUBSCRIPBE TO STAY UP TO DATE</h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
            <button>Subscribe</button>
          </span>
          <div className="image">
            <img src={"assets/homeImage2.jpg"} alt="home page" />
          </div>
        </div>
      </div>
    </div>
  );
};
