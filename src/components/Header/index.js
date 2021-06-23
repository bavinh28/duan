import React from 'react'

const QuAw = () => {
    return (
        <div className="antialiased h-screen">
            <div className="flex">
                {/* Menu */}
                <div className="w-1/4 border-r bg-gray-100 hidden md:block">
                    <div className="py-2 pl-10 space-y-3 sticky top-0 ">
                        <div className="flex items-center space-x-4 p-2 mb-5">
                            <img className="w-48 mx-auto" src="images/isn.png" alt="" />
                        </div>
                        <ul className="space-y-2 text-2xl mr-10">
                            <li>
                                <a href="#" className="flex items-center space-x-3 text-gray-700 p-2  font-medium hover:bg-gray-200 bg-gray-200 focus:shadow-outline">
                                    <span className="text-gray-600">
                                        <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </span>
                                    <span>Dashboard</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center space-x-3 text-gray-700 p-2  font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                                    <span className="text-gray-600">
                                        <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                        </svg>
                                    </span>
                                    <span>Notifications</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center space-x-3 text-gray-700 p-2  font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                                    <span className="text-gray-600">
                                        <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                        </svg>
                                    </span>
                                    <span>Personal messages</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center space-x-3 text-gray-700 p-2  font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                                    <span className="text-gray-600">
                                        <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </span>
                                    <span>My profile</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center space-x-3 text-gray-700 p-2  font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                                    <span className="text-gray-600">
                                        <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                        </svg>
                                    </span>
                                    <span>My orders</span>
                                </a>
                            </li>
                            <li>
                                <a href className="flex items-center space-x-3 text-gray-700 p-2  font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                                    <span className=" text-gray-600">
                                        <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                    </span>
                                    <span>My wishlist</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center space-x-3 text-gray-700 p-2  font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                                    <span className="text-gray-600">
                                        <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                                        </svg>
                                    </span>
                                    <span>Settings</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center space-x-3 text-gray-700 p-2 font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                                    <span className="text-gray-600">
                                        <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                    </span>
                                    <span>Change password</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center space-x-3 text-gray-700 p-2  font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                                    <span className="text-gray-600">
                                        <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                        </svg>
                                    </span>
                                    <span>Logout</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center space-x-3 text-gray-700 p-2  font-medium hover:bg-gray-200 bg-gray-200 focus:shadow-outline">
                                    <span className="text-gray-600">
                                        <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </span>
                                    <span>Dashboard</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center space-x-3 text-gray-700 p-2  font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                                    <span className="text-gray-600">
                                        <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                        </svg>
                                    </span>
                                    <span>Notifications</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center space-x-3 text-gray-700 p-2  font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                                    <span className="text-gray-600">
                                        <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                        </svg>
                                    </span>
                                    <span>Personal messages</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center space-x-3 text-gray-700 p-2  font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                                    <span className="text-gray-600">
                                        <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </span>
                                    <span>My profile</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center space-x-3 text-gray-700 p-2  font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                                    <span className="text-gray-600">
                                        <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                        </svg>
                                    </span>
                                    <span>My orders</span>
                                </a>
                            </li>
                            <li>
                                <a href className="flex items-center space-x-3 text-gray-700 p-2  font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                                    <span className=" text-gray-600">
                                        <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                    </span>
                                    <span>My wishlist</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center space-x-3 text-gray-700 p-2  font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                                    <span className="text-gray-600">
                                        <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                                        </svg>
                                    </span>
                                    <span>Settings</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center space-x-3 text-gray-700 p-2 font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                                    <span className="text-gray-600">
                                        <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                    </span>
                                    <span>Change password</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center space-x-3 text-gray-700 p-2  font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                                    <span className="text-gray-600">
                                        <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                        </svg>
                                    </span>
                                    <span>Logout</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center space-x-3 text-gray-700 p-2  font-medium hover:bg-gray-200 bg-gray-200 focus:shadow-outline">
                                    <span className="text-gray-600">
                                        <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </span>
                                    <span>Dashboard</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center space-x-3 text-gray-700 p-2  font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                                    <span className="text-gray-600">
                                        <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                        </svg>
                                    </span>
                                    <span>Notifications</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center space-x-3 text-gray-700 p-2  font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                                    <span className="text-gray-600">
                                        <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                        </svg>
                                    </span>
                                    <span>Personal messages</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center space-x-3 text-gray-700 p-2  font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                                    <span className="text-gray-600">
                                        <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </span>
                                    <span>My profile</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center space-x-3 text-gray-700 p-2  font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                                    <span className="text-gray-600">
                                        <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                        </svg>
                                    </span>
                                    <span>My orders</span>
                                </a>
                            </li>
                            <li>
                                <a href className="flex items-center space-x-3 text-gray-700 p-2  font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                                    <span className=" text-gray-600">
                                        <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                    </span>
                                    <span>My wishlist</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center space-x-3 text-gray-700 p-2  font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                                    <span className="text-gray-600">
                                        <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                                        </svg>
                                    </span>
                                    <span>Settings</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center space-x-3 text-gray-700 p-2 font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                                    <span className="text-gray-600">
                                        <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                    </span>
                                    <span>Change password</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center space-x-3 text-gray-700 p-2  font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                                    <span className="text-gray-600">
                                        <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                        </svg>
                                    </span>
                                    <span>Logout</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* News Content */}
                <div className="md:w-3/4 border-r bg-gray-50">
                    <h2 className="flex py-4 px-4 sticky top-0 border-b bg-white items-center justify-between">
                        <h1 className="font-bold tracking-wide text-5xl my-10 ">Q&A</h1>
                        <div className="text-blue-400">
                            <i className="fa fa-dot-circle-o" />
                        </div>
                    </h2>
                    <div className=" overflow-hidden">
                        {/* Cau hoi */}
                        <div className=" py-4 px-4 bg-white ">
                            <h2 className="text-3xl py-5 font-semibold">Câu hỏi 1:..........................</h2>
                            <p className="text-gray-600 text-xl leading-loose">Câu trả lời:
                                Con chim gay hien lanh beo nuc. Doi mät nau tram ngam ngo ngac nhin xa. Cai bung min muot, co quang chiec tap de cong nhan day hat cudm lap lanh, bieng biec. Chang chim gay nao giong cang trong cang dai , cang duoc vinh du deo nhieu vong cudm dep quanh co.


                                Khi ngoai dong da dong ngudi gät thi chim gay ve, bay van quanh tren cac ngon tre. Roi tung dan sa xuong nhung thua ruong vua gät quang. Con mai xuong truoc, cai duoi lai luon xoe nhu mua. Con duc con nan lai trong bd tre, cat tieng gay them mot thoi dai. Xong roi anh chang moi thüng thinh buoc ra, udn cai nguc day cudm biec luon nhe theo.


                                Chim gay nhät thoc rung. Chim gay tha than, cäm cui sau ngudi di mot lua.
                                Toi thich chim gay. Con chim quy phuc hau va cham chi, con chim gay mo mang, con chim no am cüa müa gät hai thang muoi…
                            </p>
                        </div>
                        {/* Cau hoi */}
                        <div className="mt-6">
                            <div className="py-2 px-5 bg-white">
                                <h2 className="text-3xl py-5 font-semibold">Câu hỏi 2:..........................</h2>
                                <p className="text-gray-600 text-xl leading-loose">Câu trả lời :
                                    Con chim gay hien lanh beo nuc. Doi mät nau tram ngam ngo ngac nhin xa. Cai bung min muot, co quang chiec tap de cong nhan day hat cudm lap lanh, bieng biec. Chang chim gay nao giong cang trong cang dai , cang duoc vinh du deo nhieu vong cudm dep quanh co.


                                    Khi ngoai dong da dong ngudi gät thi chim gay ve, bay van quanh tren cac ngon tre. Roi tung dan sa xuong nhung thua ruong vua gät quang. Con mai xuong truoc, cai duoi lai luon xoe nhu mua. Con duc con nan lai trong bd tre, cat tieng gay them mot thoi dai. Xong roi anh chang moi thüng thinh buoc ra, udn cai nguc day cudm biec luon nhe theo.


                                    Chim gay nhät thoc rung. Chim gay tha than, cäm cui sau ngudi di mot lua.
                                    Toi thich chim gay. Con chim quy phuc hau va cham chi, con chim gay mo mang, con chim no am cüa müa gät hai thang muoi…
                                </p>
                                <div className="flex mt-2 space-x-10 text-gray-500 justify-evenly">
                                    <span><i className="fa fa-comment-o" /></span>
                                    <span><i className="fa fa-recycle" /></span>
                                    <span><i className="fa fa-hand-paper-o" /></span>
                                    <span><i className="fa fa-hand-spock-o" /></span>
                                </div>
                            </div>
                        </div>
                        {/* Cau hoi */}
                        <div className="mt-6">
                            <div className="py-2 px-5 bg-white">
                                <h2 className="text-3xl py-5 font-semibold">Câu hỏi 3:..........................</h2>
                                <p className="text-gray-600 text-xl leading-loose">Câu trả lời :
                                    Con chim gay hien lanh beo nuc. Doi mät nau tram ngam ngo ngac nhin xa. Cai bung min muot, co quang chiec tap de cong nhan day hat cudm lap lanh, bieng biec. Chang chim gay nao giong cang trong cang dai , cang duoc vinh du deo nhieu vong cudm dep quanh co.


                                    Khi ngoai dong da dong ngudi gät thi chim gay ve, bay van quanh tren cac ngon tre. Roi tung dan sa xuong nhung thua ruong vua gät quang. Con mai xuong truoc, cai duoi lai luon xoe nhu mua. Con duc con nan lai trong bd tre, cat tieng gay them mot thoi dai. Xong roi anh chang moi thüng thinh buoc ra, udn cai nguc day cudm biec luon nhe theo.


                                    Chim gay nhät thoc rung. Chim gay tha than, cäm cui sau ngudi di mot lua.
                                    Toi thich chim gay. Con chim quy phuc hau va cham chi, con chim gay mo mang, con chim no am cüa müa gät hai thang muoi…
                                </p>
                                <div className="flex mt-2 space-x-10 text-gray-500 justify-evenly">
                                    <span><i className="fa fa-comment-o" /></span>
                                    <span><i className="fa fa-recycle" /></span>
                                    <span><i className="fa fa-hand-paper-o" /></span>
                                    <span><i className="fa fa-hand-spock-o" /></span>
                                </div>
                            </div>
                        </div>
                        {/* Cau hoi */}
                        <div className="mt-6">
                            <div className="py-2 px-5 bg-white">
                                <h2 className="text-3xl py-5 font-semibold">Câu hỏi 4:..........................</h2>
                                <p className="text-gray-600 text-xl leading-loose">Câu trả lời :
                                    Con chim gay hien lanh beo nuc. Doi mät nau tram ngam ngo ngac nhin xa. Cai bung min muot, co quang chiec tap de cong nhan day hat cudm lap lanh, bieng biec. Chang chim gay nao giong cang trong cang dai , cang duoc vinh du deo nhieu vong cudm dep quanh co.


                                    Khi ngoai dong da dong ngudi gät thi chim gay ve, bay van quanh tren cac ngon tre. Roi tung dan sa xuong nhung thua ruong vua gät quang. Con mai xuong truoc, cai duoi lai luon xoe nhu mua. Con duc con nan lai trong bd tre, cat tieng gay them mot thoi dai. Xong roi anh chang moi thüng thinh buoc ra, udn cai nguc day cudm biec luon nhe theo.


                                    Chim gay nhät thoc rung. Chim gay tha than, cäm cui sau ngudi di mot lua.
                                    Toi thich chim gay. Con chim quy phuc hau va cham chi, con chim gay mo mang, con chim no am cüa müa gät hai thang muoi…
                                </p>
                                <div className="flex mt-2 space-x-10 text-gray-500 justify-evenly">
                                    <span><i className="fa fa-comment-o" /></span>
                                    <span><i className="fa fa-recycle" /></span>
                                    <span><i className="fa fa-hand-paper-o" /></span>
                                    <span><i className="fa fa-hand-spock-o" /></span>
                                </div>
                            </div>
                        </div>
                        {/* Cau hoi */}
                        <div className="mt-6">
                            <div className="py-2 px-5 bg-white">
                                <h2 className="text-3xl py-5 font-semibold">Câu hỏi 5:..........................</h2>
                                <p className="text-gray-600 text-xl leading-loose">Câu trả lời :
                                    Con chim gay hien lanh beo nuc. Doi mät nau tram ngam ngo ngac nhin xa. Cai bung min muot, co quang chiec tap de cong nhan day hat cudm lap lanh, bieng biec. Chang chim gay nao giong cang trong cang dai , cang duoc vinh du deo nhieu vong cudm dep quanh co.


                                    Khi ngoai dong da dong ngudi gät thi chim gay ve, bay van quanh tren cac ngon tre. Roi tung dan sa xuong nhung thua ruong vua gät quang. Con mai xuong truoc, cai duoi lai luon xoe nhu mua. Con duc con nan lai trong bd tre, cat tieng gay them mot thoi dai. Xong roi anh chang moi thüng thinh buoc ra, udn cai nguc day cudm biec luon nhe theo.


                                    Chim gay nhät thoc rung. Chim gay tha than, cäm cui sau ngudi di mot lua.
                                    Toi thich chim gay. Con chim quy phuc hau va cham chi, con chim gay mo mang, con chim no am cüa müa gät hai thang muoi…
                                </p>
                                {/* next page */}
                                <div className="row my-20">
                                    <div className="w-full mx-auto">
                                        <div className="sm:grid grid-cols-4 gap-10 mx-auto px-16">
                                            <div className="col-start-1 col-end-3 my-2">
                                                <a href="#">
                                                    <div className="h-full p-6 dark:bg-gray-800 bg-red-100 hover:shadow-xl rounded border-b-4 border-red-500 shadow-md">
                                                        <h3 className="text-2xl mb-3 font-semibold inline-flex">
                                                            <svg className="mr-2" width={24} height={30} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M1.02698 11.9929L5.26242 16.2426L6.67902 14.8308L4.85766 13.0033L22.9731 13.0012L22.9728 11.0012L4.85309 11.0033L6.6886 9.17398L5.27677 7.75739L1.02698 11.9929Z" fill="currentColor" /></svg>
                                                            Prev
                                                        </h3>
                                                        <p className="text-lg">What is Lorem Ipsum?</p>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="col-end-5 col-span-2 my-2">
                                                <a href="#">
                                                    <div className="h-full p-6 dark:bg-gray-800 bg-red-100 hover:shadow-xl rounded border-b-4 border-red-500 shadow-md text-right">
                                                        <h3 className="text-2xl mb-3 font-semibold inline-flex ">
                                                            Next
                                                            <svg className="ml-2" width={24} height={30} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2415 11.0032L0.932469 11.0012L0.932251 13.0012L19.2369 13.0032L17.4155 14.8308L18.8321 16.2426L23.0677 11.9929Z" fill="currentColor" /></svg>
                                                        </h3>
                                                        <p className="text-lg">Why do we use it?</p>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="container m-auto px-6 py-10">
                                    <div className="flex flex-col md:flex-row items-center justify-between relative w-100 h-auto md:h-64 bg-100 shadow-2xl rounded-lg p-8">
                                        <div className="w-8/12 text-2xl">
                                            <img alt="quote" className="float-left mr-1" src="https://assets-global.website-files.com/5b5a66e9f3166b36708705fa/5cf8fb1f994fb7168d0d66fb_quote-intro.svg" />
                                            <span className="flex ml-10">Was this page helpful ?</span>
                                        </div>
                                        <div className="relative shadow-md font-medium my-5 py-2 mr-10 px-4 text-white cursor-pointer bg-yellow-600 hover:bg-green-700 rounded text-lg text-center w-48">
                                            <span className="absolute h-3 w-3 right-0 top-0 animate-ping inline-flex rounded-full h-3 w-3 bg-blue-500">
                                            </span>
                                            Helpful
                                        </div>
                                        <div className="relative shadow-md font-medium my-5 py-2 px-4 text-white cursor-pointer bg-yellow-600 hover:bg-red-500 rounded text-lg text-center w-48">
                                            <span className="absolute h-3 w-3 right-0 top-0 animate-ping inline-flex rounded-full h-3 w-3 bg-blue-500">
                                            </span>
                                            Unhelpful
                                        </div>

                                    </div>
                                </div>
                                <div className="flex mt-2 space-x-10 text-gray-500 justify-evenly">
                                    <span><i className="fa fa-comment-o" /></span>
                                    <span><i className="fa fa-recycle" /></span>
                                    <span><i className="fa fa-hand-paper-o" /></span>
                                    <span><i className="fa fa-hand-spock-o" /></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Follow and trends */}
                {/* sticky top-2  pb-2 */}
                <div className="flex-1 py-4 pl-10 pr-28 space-y-4 bg-gray-100 hidden md:block">
                    <div className="relative text-gray-600 sticky top-2 pb-2 ml-7">
                        <input type="search" name="serch" placeholder="Search" className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none" />
                        <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
                            <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 56.966 56.966" style={{ enableBackground: 'new 0 0 56.966 56.966' }} xmlSpace="preserve" width="512px" height="512px">
                                <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                            </svg>
                        </button>
                    </div>
                    {/* <div className="sticky top-10 pb-2">
                        <div className="block  py-2  px-2 ">
                            <p className="font-extrabold text-lg">CONTENTS</p>
                        </div>
                    </div> */}
                    <div className="block py-2  sticky top-16 px-2">
                        <div className="bg-gray-100">
                            <div className="max-w-xl mx-auto p-5">
                                <div className="flow-root">
                                    <ul className="-mb-8">
                                        <li>
                                            <div className="relative pb-10">
                                                <span className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
                                                <div className="relative flex items-start space-x-3">
                                                    <div>
                                                        <div className="relative px-1">
                                                            <div className="h-8 w-8 bg-blue-500 rounded-full ring-8 ring-gray-100 flex items-center justify-center">
                                                                <svg className="text-white h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="min-w-0 flex-1 py-0">
                                                        <div className="text-md text-gray-500">
                                                            <div>
                                                                <a href="#" className="font-medium text-gray-900 mr-2">Cau hoi 1</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="relative pb-10">
                                                <span className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
                                                <div className="relative flex items-start space-x-3">
                                                    <div>
                                                        <div className="relative px-1">
                                                            <div className="h-8 w-8 bg-blue-500 rounded-full ring-8 ring-gray-100 flex items-center justify-center">
                                                                <svg className="text-white h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="min-w-0 flex-1 py-0">
                                                        <div className="text-md text-gray-500">
                                                            <div>
                                                                <a href="#" className="font-medium text-gray-900 mr-2">Cau hoi 2</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="relative pb-10">
                                                <span className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
                                                <div className="relative flex items-start space-x-3">
                                                    <div>
                                                        <div className="relative px-1">
                                                            <div className="h-8 w-8 bg-blue-500 rounded-full ring-8 ring-gray-100 flex items-center justify-center">
                                                                <svg className="text-white h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="min-w-0 flex-1 py-0">
                                                        <div className="text-md text-gray-500">
                                                            <div>
                                                                <a href="#" className="font-medium text-gray-900 mr-2">Cau hoi 3</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuAw
