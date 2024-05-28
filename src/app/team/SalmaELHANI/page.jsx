"use client"
import Link from 'next/link'
import React from 'react'

function salma() {
    return (

        <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 order-first md:order-2 mt-28 md:mt-0">
                <div className="relative h-full w-full flex items-center justify-center sm:mb-7">
                    <div className="profileCard_container relative p-10 border-2 border-dashed rounded-full border-spacing-4 border-gray-400 max-w-2xl ">
                        <button className="profile_item left-[45px] -top-[4px] absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
                            <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-[#EFD81D] p-1">
                                <img className=' rounded-lg' src="/icons_team/javascript-logo.png" alt="" />
                            </span>
                        </button>

                        <button className="profile_item right-[45px] -top-[4px] absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
                            <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                                <img className='rounded-full' src="/icons_team/nodejs-logo.jpeg" alt="" />
                            </span>
                        </button>

                        <button className="profile_item -left-4 top-20 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
                            <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                            <img className='rounded-full' src="/icons_team/MongoDB-logo.jpg" alt="" />
                                </span>
                        </button>

                        <button className="profile_item -right-4 top-20 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
                            <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-black p-1">
                            <img className='rounded-full' src="/icons_team/express-logo.png" alt="" />
                            </span>
                        </button>

                        <button className="profile_item bottom-8 -left-0 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
                            <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                             <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path d="M2.001 90.458h4.108V74.235l6.36 14.143c.75 1.712 1.777 2.317 3.792 2.317s3.003-.605 3.753-2.317l6.36-14.143v16.223h4.108V74.262c0-1.58-.632-2.345-1.936-2.739-3.121-.974-5.215-.131-6.163 1.976l-6.241 13.958-6.043-13.959c-.909-2.106-3.042-2.949-6.163-1.976C2.632 71.917 2 72.681 2 74.261v16.197zm31.898-13.206h4.107v8.938c-.038.485.156 1.625 2.406 1.661 1.148.018 8.862 0 8.934 0V77.208h4.117c.019 0-.004 14.514-.004 14.574.022 3.58-4.441 4.357-6.499 4.417H33.988v-2.764c.022 0 12.963.003 12.995-.001 2.645-.279 2.332-1.593 2.331-2.035v-1.078h-8.731c-4.062-.037-6.65-1.81-6.683-3.85-.002-.187.089-9.129-.001-9.219z" fill="#00618A"></path><path d="M56.63 90.458h11.812c1.383 0 2.727-.289 3.793-.789 1.777-.816 2.646-1.922 2.646-3.372v-3.002c0-1.185-.987-2.292-2.923-3.028-1.027-.396-2.292-.605-3.517-.605h-4.978c-1.659 0-2.449-.5-2.646-1.606-.039-.132-.039-.237-.039-.369v-1.87c0-.105 0-.211.039-.342.197-.843.632-1.08 2.094-1.212l.395-.026h11.733v-2.738H63.504c-1.659 0-2.528.105-3.318.342-2.449.764-3.517 1.975-3.517 4.082v2.396c0 1.844 2.095 3.424 5.61 3.793.396.025.79.053 1.185.053h4.267c.158 0 .316 0 .435.025 1.304.105 1.856.343 2.252.816a.98.98 0 01.315.737v2.397c0 .289-.197.658-.592.974-.355.316-.948.527-1.738.58l-.435.026H56.63v2.738zm43.881-4.766c0 2.817 2.094 4.397 6.32 4.714.395.026.79.052 1.185.052h10.706V87.72h-10.784c-2.41 0-3.318-.606-3.318-2.055V71.497h-4.108v14.195zm-23.008.142v-9.765c0-2.48 1.742-3.985 5.186-4.46a7.8 7.8 0 011.108-.079h7.799c.396 0 .752.026 1.147.079 3.444.475 5.187 1.979 5.187 4.46v9.765c0 2.014-.74 3.09-2.445 3.792l4.048 3.653h-4.771l-3.274-2.956-3.296.209h-4.395a9.075 9.075 0 01-2.414-.343c-2.613-.712-3.88-2.085-3.88-4.355zm4.434-.237c0 .132.039.265.079.423.237 1.135 1.307 1.768 2.929 1.768h3.732l-3.428-3.095h4.771l2.989 2.7c.552-.295.914-.743 1.041-1.32.039-.132.039-.264.039-.396v-9.368c0-.105 0-.238-.039-.37-.238-1.056-1.307-1.662-2.89-1.662h-6.216c-1.82 0-3.008.792-3.008 2.032v9.288z" fill="#E48E00"></path><path d="M122.336 66.952c-2.525-.069-4.454.166-6.104.861-.469.198-1.216.203-1.292.79.257.271.297.674.502 1.006.394.637 1.059 1.491 1.652 1.938.647.489 1.315 1.013 2.011 1.437 1.235.754 2.615 1.184 3.806 1.938.701.446 1.397 1.006 2.082 1.509.339.247.565.634 1.006.789v-.071c-.231-.294-.291-.698-.503-1.006l-.934-.934c-.913-1.212-2.071-2.275-3.304-3.159-.982-.705-3.18-1.658-3.59-2.801l-.072-.071c.696-.079 1.512-.331 2.154-.503 1.08-.29 2.045-.215 3.16-.503l1.508-.432v-.286c-.563-.578-.966-1.344-1.58-1.867-1.607-1.369-3.363-2.737-5.17-3.879-1.002-.632-2.241-1.043-3.304-1.579-.356-.181-.984-.274-1.221-.575-.559-.711-.862-1.612-1.293-2.441a93.068 93.068 0 01-2.585-5.458c-.544-1.245-.9-2.473-1.579-3.59-3.261-5.361-6.771-8.597-12.208-11.777-1.157-.677-2.55-.943-4.021-1.292l-2.37-.144c-.481-.201-.983-.791-1.436-1.077-1.802-1.138-6.422-3.613-7.756-.358-.842 2.054 1.26 4.058 2.011 5.099.527.73 1.203 1.548 1.58 2.369.248.54.29 1.081.503 1.652.521 1.406.976 2.937 1.651 4.236.341.658.718 1.351 1.149 1.939.264.36.718.52.789 1.077-.443.62-.469 1.584-.718 2.369-1.122 3.539-.699 7.938.934 10.557.501.805 1.681 2.529 3.303 1.867 1.419-.578 1.103-2.369 1.509-3.95.092-.357.035-.621.215-.861v.072l1.293 2.585c.957 1.541 2.654 3.15 4.093 4.237.746.563 1.334 1.538 2.298 1.867v-.073h-.071c-.188-.291-.479-.411-.719-.646-.562-.551-1.187-1.235-1.651-1.867-1.309-1.776-2.465-3.721-3.519-5.745-.503-.966-.94-2.032-1.364-3.016-.164-.379-.162-.953-.502-1.148-.466.72-1.149 1.303-1.509 2.154-.574 1.36-.648 3.019-.861 4.739l-.144.071c-1.001-.241-1.352-1.271-1.724-2.154-.94-2.233-1.115-5.83-.287-8.401.214-.666 1.181-2.761.789-3.376-.187-.613-.804-.967-1.148-1.437a11.222 11.222 0 01-1.149-2.011c-.77-1.741-1.129-3.696-1.938-5.457-.388-.842-1.042-1.693-1.58-2.441-.595-.83-1.262-1.44-1.724-2.442-.164-.356-.387-.927-.144-1.293.077-.247.188-.35.432-.431.416-.321 1.576.107 2.01.287 1.152.479 2.113.934 3.089 1.58.468.311.941.911 1.508 1.077h.646c1.011.232 2.144.071 3.088.358 1.67.508 3.166 1.297 4.524 2.155 4.139 2.614 7.522 6.334 9.838 10.772.372.715.534 1.396.861 2.154.662 1.528 1.496 3.101 2.154 4.596.657 1.491 1.298 2.996 2.227 4.237.488.652 2.374 1.002 3.231 1.364.601.254 1.585.519 2.154.861 1.087.656 2.141 1.437 3.16 2.155.509.362 2.076 1.149 2.154 1.798zM90.237 39.593a5.124 5.124 0 00-1.293.144v.071h.072c.251.517.694.849 1.005 1.293l.719 1.508.071-.071c.445-.313.648-.814.646-1.58-.179-.188-.205-.423-.359-.646-.204-.3-.602-.468-.861-.719z" fill="#00618A"></path></svg>
                            </span>
                        </button>

                        <button className="profile_item bottom-8 -right-0 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
                            <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                                <img className='rounded-md' src="/icons_team/redux-logo.png" alt="" />
                            </span>
                        </button>

                        <button className="profile_item right-[40%] -bottom-4 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
                            <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-[#222222] p-1">
                                <img className='rounded-lg w-10 h-8' src="/icons_team/axios-logo.png" alt="" />
                            </span>
                        </button>

                        <button className="profile_item w-[200px] h-[200px] p-1 border-2 rounded-full hover:border-gray-400/50 cursor-pointer transition-all duration-500 z-0">
                            <div className="w-full bg-white h-full flex items-center justify-center p-2 rounded-full active:scale-95 hover:scale-95 object-cover transition-all duration-500">
                                <span className="w-42 h-42 inline-block"><a href="mailto:salmaelhani7@gmail.com">
                                    <img src="/photo-profile/salma's profile.png" alt="hiba's profile" className='rounded-full' /></a>
                                </span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            <div className="w-full md:w-2/3 md:order-1">
                <div className="flex flex-col m-4 md:ml-8 md:mt-8 items-start justify-center min-h-screen">
                    <div className="w-full backdrop-blur-lg bg-black/60 rounded-3xl shadow-2xl p-4">
                        <div className="flex p-2 gap-1">
                            <div className="circle">
                                <span className="bg-blue-500 inline-block center w-3 h-3 rounded-full"></span>
                            </div>
                            <div className="circle">
                                <span className="bg-purple-500 inline-block center w-3 h-3 rounded-full"></span>
                            </div>
                            <div className="circle">
                                <span className="bg-pink-500 box inline-block center w-3 h-3 rounded-full"></span>
                            </div>
                        </div>
                        <br />
                        <h2 className='text-xl md:text-3xl font-bold text-white'>Salma EL HANI from Vision<span className='text-[#CB6CE6]'>360°</span></h2>
                        <h3 className='text-md md:text-lg font-semibold text-blue-500 italic'>The Full Stack Virtuoso!</h3> <br />
                        <div className='text-gray-300'>
                            Hey, dear future clients,<br />
                            Imagine a maestro of code, an architect of both front and back ends, seamlessly blending aesthetics with efficiency. Look no further, for Salma EL HANI from Vision360° is ready to elevate your digital projects to unprecedented heights!<br /><br />
                            <span className='text-pink-500 ml-4 font-semibold'>Who is Salma EL HANI?</span> <br />
                            Salma isn't just a developer; she's our ensemble's Beethoven, orchestrating symphonies of code that bring complex systems to life. With her comprehensive expertise, especially in backend development, she adeptly crafts robust solutions that stand the test of time.<br /><br />
                            <span className='text-pink-500 ml-4 font-semibold'>Why choose Salma EL HANI?</span> <br />
                            Salma's skills are unmatched, engineering solutions that are both visually striking and supremely functional. Her sharp eye for detail ensures flawless execution down to the last pixel. Furthermore, her prowess extends beyond coding—she's a strategist in digital platform optimization, ensuring your projects not only launch successfully but also thrive.<br /><br />
                            <div className='justify-center items-center text-center'> <div className=' underline text-blue-500'>Click Salma's avatar to ask anything!</div>
                            </div>

                            <br />

                        </div>
                    </div>
                </div>
            </div>


        </div>


    )
}

export default salma