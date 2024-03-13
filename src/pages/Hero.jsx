import  { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import animationData from '../assets/Animation.json'; 

const Hero = () => {
  const animationContainer = useRef(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationData,
    });

    return () => {
      anim.destroy();
    };
  }, []);

  return (
    <div>
      <section className="bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-xl text-center">
           
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Welcome to MediValley Hospital
              <strong className="font-extrabold text-red-700 sm:block"> Caring for Your Health. </strong>
            </h1>

            <p className="mt-4 sm:text-xl/relaxed">
              At MediValley, we are dedicated to providing high-quality healthcare services to our community.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
              numquam ea!
            </p>
            <div ref={animationContainer} className="w-50 h-50 mx-auto mb-8"></div>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                href="/signup"
              >
                Book Appointment
              </a>

              <a
                className="block w-full rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
                href="#"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
