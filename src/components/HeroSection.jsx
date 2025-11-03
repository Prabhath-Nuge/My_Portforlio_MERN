import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import logo from "../assets/logo.png"

const HeroSection = () => {
  return (

    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <div className="grid md:grid-cols-2 sm:grid-cols-1 justify-center items-center">
        <div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide text-text-primary">
            VirtualR build tools
            <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
              {" "}
              for developers
            </span>
          </h1>
          <p className="mt-10 text-lg text-center text-text-secondary max-w-4xl ">
            Empower your creativity and bring your VR app ideas to life with our
            intuitive development tools. Get started today and turn your imagination
            into immersive reality!
          </p>
          <div className="flex justify-center my-10">
            <a
              href="#"
              className="bg-gradient-to-r from-primary to-secondary text-text-primary font-semibold py-3 px-4 mx-3 rounded-md hover:scale-105 transition-transform ease-in-out"
            >
              Start for free
            </a>
            <a href="#" className="py-3 px-4 mx-3 rounded-md border text-text-primary font-semibold hover:scale-102 transition-transform ease-in-out">
              Documentation
            </a>
          </div>
        </div>
        <div>
          <img
            src="https://www.pngall.com/wp-content/uploads/15/Man-In-Suit-PNG-Pic.png"
            className="w-full max-w-[450px] mx-auto object-cover rounded-lg"
          />
        </div>
      </div>

      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
      </div>
      <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
    </div>

  );
};

export default HeroSection;
