import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const ImgSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <>
      <div className="slider-container mx-auto">
        <Slider {...settings}>
          <div className="!flex justify-center text-center">
            <div className="md:max-w-xl">
              <div className="mt-4">
                <div>
                  <h4 className="text-xl font-medium mb-1">Lorem, ipsum.</h4>
                  <p className="opacity-50 mb-6 text-[1rem]">
                    {" "}
                    It’s easier to reach your savings goals when you have the
                    right savings account. Take a look and find the right one
                    for you! Lorem ipsum dolor sit, amet consectetur
                    adipisicing.
                  </p>
                  <h4 className="mb-1 text-[1rem] font-medium">Name</h4>
                  <h4 className="mb-1 text-[1rem] font-medium">LOcation</h4>
                  {/* <Rating rating={rating} showLabel={false} /> */}
                </div>
                <img
                  src=""
                  alt=""
                  className="max-w-full h-auto rounded-full mx-auto"
                  width="110"
                />
              </div>
            </div>
          </div>
          <div className="!flex justify-center text-center">
            <div className="md:max-w-xl">
              <div className="mt-4">
                <div>
                  <h4 className="text-xl font-medium mb-1">Lorem, ipsum.</h4>
                  <p className="opacity-50 mb-6 text-[1rem]">
                    {" "}
                    It’s easier to reach your savings goals when you have the
                    right savings account. Take a look and find the right one
                    for you! Lorem ipsum dolor sit, amet consectetur
                    adipisicing.
                  </p>
                  <h4 className="mb-1 text-[1rem] font-medium">Name</h4>
                  <h4 className="mb-1 text-[1rem] font-medium">LOcation</h4>
                  {/* <Rating rating={rating} showLabel={false} /> */}
                </div>
                <img
                  src=""
                  alt=""
                  className="max-w-full h-auto rounded-full mx-auto"
                  width="110"
                />
              </div>
            </div>
          </div>
          <div className="!flex justify-center text-center">
            <div className="md:max-w-xl">
              <div className="mt-4">
                <div>
                  <h4 className="text-xl font-medium mb-1">Lorem, ipsum.</h4>
                  <p className="opacity-50 mb-6 text-[1rem]">
                    {" "}
                    It’s easier to reach your savings goals when you have the
                    right savings account. Take a look and find the right one
                    for you! Lorem ipsum dolor sit, amet consectetur
                    adipisicing.
                  </p>
                  <h4 className="mb-1 text-[1rem] font-medium">Name</h4>
                  <h4 className="mb-1 text-[1rem] font-medium">LOcation</h4>
                  {/* <Rating rating={rating} showLabel={false} /> */}
                </div>
                <img
                  src=""
                  alt=""
                  className="max-w-full h-auto rounded-full mx-auto"
                  width="110"
                />
              </div>
            </div>
          </div>
          <div className="!flex justify-center text-center">
            <div className="md:max-w-xl">
              <div className="mt-4">
                <div>
                  <h4 className="text-xl font-medium mb-1">Lorem, ipsum.</h4>
                  <p className="opacity-50 mb-6 text-[1rem]">
                    {" "}
                    It’s easier to reach your savings goals when you have the
                    right savings account. Take a look and find the right one
                    for you! Lorem ipsum dolor sit, amet consectetur
                    adipisicing.
                  </p>
                  <h4 className="mb-1 text-[1rem] font-medium">Name</h4>
                  <h4 className="mb-1 text-[1rem] font-medium">LOcation</h4>
                  {/* <Rating rating={rating} showLabel={false} /> */}
                </div>
                <img
                  src=""
                  alt=""
                  className="max-w-full h-auto rounded-full mx-auto"
                  width="110"
                />
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default ImgSlider;
