import React from 'react'


const About = () => {
    return (
        <div>
            <>
                <section className="text-gray-600 body-font ">
                    <div className="bg-gray-100 w-3/4 mx-auto  rounded-2xl mt-10 max-h-full">
                        <div className="flex flex-col text-center w-full mb-20 pt-20">
                            <h1 className="sm:text-3xl text-2xl font-medium pt-20  title-font text-gray-900">Tổng quan MENU</h1>
                        </div>
                        <div className="container px-5 py-10 mx-auto">
                            <div className="flex flex-wrap mx-auto  text-center">
                                <div className="p-4 sm:w-1/3 w-1/2">
                                    <img className="max-h-16 mx-auto" src="images/Mouse.png" alt="" />
                                    <p className="leading-relaxed">Tổng số tương tác</p>
                                    <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">2.7K</h2>
                                </div>
                                <div className="p-4 sm:w-1/3 w-1/2">
                                    <img className="max-h-16 mx-auto" src="images/Menu.png" alt="" />
                                    <p className="leading-relaxed">Tổng menu đã tạo</p>
                                    <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">1.8K</h2>
                                </div>
                                <div className="p-4 sm:w-1/3 w-1/2">
                                    <img className="max-h-16 mx-auto" src="images/Box.png" alt="" />
                                    <p className="leading-relaxed">Tổng số nút đang dùng</p>
                                    <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">35</h2>
                                </div>
                                {/* <div className="p-4 sm:w-1/4 w-1/2">
                                <p className="leading-relaxed">Products</p>
                                <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">4</h2>
                            </div> */}
                            </div>
                        </div>
                    </div>
                </section>
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto pt-10 w-3/4 ">
                        <div className="flex flex-wrap -mx-9">
                            <div className="p-4 md:w-1/3">
                                <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                                    <div className="flex items-center mb-3">
                                        <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                            </svg>
                                        </div>
                                        <h2 className="text-gray-900 text-lg title-font font-medium">Đường dẫn có lượt click cao nhất</h2>
                                    </div>
                                    <div className="flex-grow">
                                        <p className="leading-relaxed text-base"></p>
                                        <a className="mt-3 text-indigo-500 inline-flex items-center">Link
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                <path d="M5 12h14M12 5l7 7-7 7" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 md:w-1/3">
                                <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                                    <div className="flex items-center mb-3">
                                        <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                                                <circle cx={12} cy={7} r={4} />
                                            </svg>
                                        </div>
                                        <h2 className="text-gray-900 text-lg title-font font-medium">Nút có lượng click cao nhất</h2>
                                    </div>
                                    <div className="flex-grow">
                                        <p className="leading-relaxed text-base"></p>
                                        <a className="mt-3 text-indigo-500 inline-flex items-center">Link
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                <path d="M5 12h14M12 5l7 7-7 7" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 md:w-1/3">
                                <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                                    <div className="flex items-center mb-3">
                                        <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                                <circle cx={6} cy={6} r={3} />
                                                <circle cx={6} cy={18} r={3} />
                                                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
                                            </svg>
                                        </div>
                                        <h2 className="text-gray-900 text-lg title-font font-medium">Menu có lượt click cao nhất</h2>
                                    </div>
                                    <div className="flex-grow">
                                        <p className="leading-relaxed text-base"></p>
                                        <a className="mt-3 text-indigo-500 inline-flex items-center">Link
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                <path d="M5 12h14M12 5l7 7-7 7" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>

        </div>
    )
}

export default About
