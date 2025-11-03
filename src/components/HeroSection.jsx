import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import { TypeAnimation } from 'react-type-animation';
import logo from "../assets/logo.png"

const HeroSection = () => {
  const textAnimationTime = 3000;
  return (

    <div className="flex flex-col items-center ">
      <div className="grid md:grid-cols-2 sm:grid-cols-1 justify-center items-center">
        {/* <div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl  tracking-wide text-text-primary">
            <span className="text-1xl sm:text-2xl lg:text-4xl  tracking-wide text-text-primary">Hey! I'm</span>  Prabhath
            
            <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
              {" "}
              <TypeAnimation
                sequence={["Developer",textAnimationTime,"Designer",textAnimationTime,"Problem Solver",textAnimationTime,"Learner"]}
                speed={40}
                repeat={Infinity}
              />
            </span>
          </h1>
          <p className="mt-10 text-lg text-center text-text-primary max-w-4xl ">
            A developer who loves simplicity, smooth interfaces, and meaningful products. Let’s build something great.
          </p>
          <div className="flex justify-center my-10">
            <a
              href="#"
              className="bg-gradient-to-r from-primary to-secondary text-text-primary drop-shadow-lg font-semibold py-3 px-4 mx-3 rounded-md hover:scale-105 transition-transform ease-in-out"
            >
              Start for free
            </a>
            <a href="#" className="py-3 px-4 mx-3 rounded-md border hover:bg-secondary/5 text-text-primary  font-semibold hover:scale-102 transition-transform ease-in-out">
              Documentation
            </a>
          </div>
        </div> */}
        <div className="">
          <h1 className="tracking-tight text-text-primary font-bold">
            <span className="block text-2xl sm:text-3xl lg:text-4xl mb-2">
              Hey, I'm
            </span>

            <span className="block text-4xl sm:text-6xl lg:text-7xl">
              Prabhath{" "}<br />
              <span className="bg-linear-to-r from-primary to-secondary text-transparent bg-clip-text">
                <TypeAnimation
                  sequence={[
                    "Developer", textAnimationTime,
                    "Designer", textAnimationTime,
                    "Problem Solver", textAnimationTime,
                    "Learner",textAnimationTime
                  ]}
                  speed={40}
                  repeat={Infinity}
                />
              </span>
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg lg:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
            I craft clean, smooth and meaningful digital experiences.
            Passionate about building things that feel good to use.
          </p>

          <div className="flex gap-4 mt-10">
            <a
              href="#"
              className="bg-linear-to-r from-primary to-secondary text-white font-medium py-3 px-6 rounded-md shadow-md hover:scale-[1.05] transition-transform"
            >
              Start for free
            </a>
            <a
              href="#"
              className="py-3 px-6 rounded-md border text-text-primary font-medium hover:bg-secondary/10 hover:scale-[1.03] transition"
            >
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
