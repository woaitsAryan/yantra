import React from 'react';
import ComputerModel from '@/components/three/modelFile';
const HeroSection = () => {
    return (
        <>
            <div className="h-[70vh] flex justify-around flex-col-reverse sm:flex-row items-end sm:px-28 text-white">
                <div className="sm:w-[40%] w-[100%] sm:h-[100%] h-[50%] flex justify-center sm:items-start items-center flex-col gap-4">
                    <div className="text-6xl">YANTRA</div>
                    <div className="text-xl font-spaceGrotesk tracking-widest leading-10">
                        VIT&apos;&nbsp;
                        <span className="bg-[#F8924F] px-4 pb-2 pt-1 rounded-lg border-[1px] border-black">
                            biggest
                        </span>
                        &nbsp;internal
                        <br className="hidden sm:block" /> techfest
                    </div>
                    <div>
                        <button className="bg-[#3A3646] font-spaceGrotesk hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg flex justify-center gap-2 items-center">
                            <p>Register Now</p>
                            <svg
                                width="23"
                                height="23"
                                viewBox="0 0 40 40"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M11.667 28.3333L27 13.0003"
                                    stroke="white"
                                    stroke-width="3.41667"
                                    strokeLinecap="square"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M12 12H28.6667V28.6667"
                                    stroke="white"
                                    stroke-width="3.41667"
                                    strokeLinecap="square"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="sm:w-[60%] w-[100%] sm:h-[100%] h-[50%]">
                    <ComputerModel />
                </div>
            </div>
            <div className="h-[10vh] flex justify-center gap-3 sm:gap-24 items-center">
                <div>
                    <svg
                        width="40"
                        height="29"
                        viewBox="0 0 40 29"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M39.5949 10.6349C39.6838 8.0598 39.1207 5.50401 37.9578 3.2048C37.1687 2.26137 36.0736 1.62471 34.8634 1.40575C29.8576 0.951536 24.8311 0.765368 19.8054 0.848045C14.798 0.761616 9.78956 0.941776 4.80132 1.38776C3.81512 1.56715 2.90246 2.02973 2.17472 2.71905C0.555574 4.21226 0.37567 6.76691 0.195765 8.92577C-0.065255 12.8073 -0.065255 16.702 0.195765 20.5836C0.247812 21.7987 0.42873 23.0048 0.735479 24.1817C0.952399 25.0903 1.39127 25.931 2.0128 26.6284C2.7455 27.3542 3.67941 27.8431 4.69338 28.0316C8.57197 28.5104 12.48 28.7088 16.3872 28.6253C22.6838 28.7153 28.2069 28.6253 34.7375 28.1216C35.7763 27.9446 36.7365 27.4551 37.49 26.7183C37.9937 26.2144 38.3699 25.5977 38.5874 24.9193C39.2308 22.945 39.5468 20.8788 39.5229 18.8025C39.5949 17.7951 39.5949 11.7143 39.5949 10.6349ZM15.7395 19.882V8.74586L26.3899 14.3409C23.4035 15.996 19.4636 17.867 15.7395 19.882Z"
                            fill="#393546"
                        />
                    </svg>
                </div>
                <div>
                    <svg
                        width="40"
                        height="29"
                        viewBox="0 0 40 29"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M39.5949 10.6349C39.6838 8.0598 39.1207 5.50401 37.9578 3.2048C37.1687 2.26137 36.0736 1.62471 34.8634 1.40575C29.8576 0.951536 24.8311 0.765368 19.8054 0.848045C14.798 0.761616 9.78956 0.941776 4.80132 1.38776C3.81512 1.56715 2.90246 2.02973 2.17472 2.71905C0.555574 4.21226 0.37567 6.76691 0.195765 8.92577C-0.065255 12.8073 -0.065255 16.702 0.195765 20.5836C0.247812 21.7987 0.42873 23.0048 0.735479 24.1817C0.952399 25.0903 1.39127 25.931 2.0128 26.6284C2.7455 27.3542 3.67941 27.8431 4.69338 28.0316C8.57197 28.5104 12.48 28.7088 16.3872 28.6253C22.6838 28.7153 28.2069 28.6253 34.7375 28.1216C35.7763 27.9446 36.7365 27.4551 37.49 26.7183C37.9937 26.2144 38.3699 25.5977 38.5874 24.9193C39.2308 22.945 39.5468 20.8788 39.5229 18.8025C39.5949 17.7951 39.5949 11.7143 39.5949 10.6349ZM15.7395 19.882V8.74586L26.3899 14.3409C23.4035 15.996 19.4636 17.867 15.7395 19.882Z"
                            fill="#393546"
                        />
                    </svg>
                </div>
                <div>
                    <svg
                        width="40"
                        height="29"
                        viewBox="0 0 40 29"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M39.5949 10.6349C39.6838 8.0598 39.1207 5.50401 37.9578 3.2048C37.1687 2.26137 36.0736 1.62471 34.8634 1.40575C29.8576 0.951536 24.8311 0.765368 19.8054 0.848045C14.798 0.761616 9.78956 0.941776 4.80132 1.38776C3.81512 1.56715 2.90246 2.02973 2.17472 2.71905C0.555574 4.21226 0.37567 6.76691 0.195765 8.92577C-0.065255 12.8073 -0.065255 16.702 0.195765 20.5836C0.247812 21.7987 0.42873 23.0048 0.735479 24.1817C0.952399 25.0903 1.39127 25.931 2.0128 26.6284C2.7455 27.3542 3.67941 27.8431 4.69338 28.0316C8.57197 28.5104 12.48 28.7088 16.3872 28.6253C22.6838 28.7153 28.2069 28.6253 34.7375 28.1216C35.7763 27.9446 36.7365 27.4551 37.49 26.7183C37.9937 26.2144 38.3699 25.5977 38.5874 24.9193C39.2308 22.945 39.5468 20.8788 39.5229 18.8025C39.5949 17.7951 39.5949 11.7143 39.5949 10.6349ZM15.7395 19.882V8.74586L26.3899 14.3409C23.4035 15.996 19.4636 17.867 15.7395 19.882Z"
                            fill="#393546"
                        />
                    </svg>
                </div>
                <div>
                    <svg
                        width="40"
                        height="29"
                        viewBox="0 0 40 29"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M39.5949 10.6349C39.6838 8.0598 39.1207 5.50401 37.9578 3.2048C37.1687 2.26137 36.0736 1.62471 34.8634 1.40575C29.8576 0.951536 24.8311 0.765368 19.8054 0.848045C14.798 0.761616 9.78956 0.941776 4.80132 1.38776C3.81512 1.56715 2.90246 2.02973 2.17472 2.71905C0.555574 4.21226 0.37567 6.76691 0.195765 8.92577C-0.065255 12.8073 -0.065255 16.702 0.195765 20.5836C0.247812 21.7987 0.42873 23.0048 0.735479 24.1817C0.952399 25.0903 1.39127 25.931 2.0128 26.6284C2.7455 27.3542 3.67941 27.8431 4.69338 28.0316C8.57197 28.5104 12.48 28.7088 16.3872 28.6253C22.6838 28.7153 28.2069 28.6253 34.7375 28.1216C35.7763 27.9446 36.7365 27.4551 37.49 26.7183C37.9937 26.2144 38.3699 25.5977 38.5874 24.9193C39.2308 22.945 39.5468 20.8788 39.5229 18.8025C39.5949 17.7951 39.5949 11.7143 39.5949 10.6349ZM15.7395 19.882V8.74586L26.3899 14.3409C23.4035 15.996 19.4636 17.867 15.7395 19.882Z"
                            fill="#393546"
                        />
                    </svg>
                </div>
            </div>
        </>
    );
};

export default HeroSection;
