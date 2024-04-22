

const Hero = () => {
  return (
    <>
      <main className="Hero">
        <div className="hero-content">
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <p>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>
          <div className="hero-btn">
            <button className="hero-btn1">Shop Now</button>
            <button className="hero-btn2">Category</button>
          </div>
          <div className="shopping">
            <p>Also available on</p>
            <div className="brand-icon">
                <img src="./Images/flipkart.png" alt="" className="flipkart-icon" />
                <img src="./Images/amazon.png" alt="" className="amazon-icon" />
            </div>
          </div>
        </div>
        <div className="hero-img">
            <img src="./Images/shoe_image.png" alt="" className="hero-img" />
        </div>
      </main>
    </>
  );
};

export default Hero;
