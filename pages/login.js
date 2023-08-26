import React from "react"
import Link from "next/link"
import Image from "next/image"
import styles from "../styles/login.module.css"
import nft_logo from "../assets/images/nft_logo.png"
import img1 from "../picture-removebg-preview.png"
import Signup from "./signup"

export default function login() {
    return (
        <section class="h-full gradient-form bg-gray-200 md:h-screen">
            <div class="container py-12 px-6 h-full" style={{ padding: `0%` }}>
                <div class="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                    <div class="xl:w-10/12">
                        <div className={styles.sec} class="block bg-white shadow-lg rounded-lg">
                            <div class="lg:flex lg:flex-wrap g-0">
                                <div class="lg:w-6/12 px-4 md:px-0">
                                    <div class="md:p-12 md:mx-6">
                                        <div class="text-center">
                                            <Image
                                                className={styles.image}
                                                src={nft_logo}
                                                alt="logo"
                                                width={250}
                                                height={200}
                                            />
                                            <h4 class="text-xl font-semibold mt-1 mb-12 pb-1">
                                                We are the Team
                                            </h4>
                                        </div>
                                        <form action="/api/login" method="post">
                                            <p class="mb-4">Please login to your account</p>
                                            <div class="mb-4">
                                                <input
                                                    name="email"
                                                    type="email"
                                                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                                    class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                    id="exampleFormControlInput1"
                                                    placeholder="Email"
                                                    required
                                                />
                                            </div>
                                            <div class="mb-4">
                                                <input
                                                    name="pass"
                                                    type="password"
                                                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                                    class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                    id="exampleFormControlInput1"
                                                    placeholder="Password"
                                                    required
                                                />
                                            </div>
                                            <div class="text-center pt-1 mb-12 pb-1">
                                                <input
                                                    className={styles.btn}
                                                    //class="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                                                    type="submit"
                                                    data-mdb-ripple="true"
                                                    data-mdb-ripple-color="light"
                                                    value="Login"
                                                ></input>
                                                <a class="text-gray-500" href="#!">
                                                    Forgot password?
                                                </a>
                                            </div>
                                            <div class="flex items-center justify-between pb-6">
                                                <p class="mb-0 mr-2">Don't have an account?</p>
                                                <button
                                                    onClick={"/signup"}
                                                    type="button"
                                                    class="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                                    data-mdb-ripple="true"
                                                    data-mdb-ripple-color="light"
                                                >
                                                    <Link href={"/signup"}>Signup</Link>
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div
                                    class="lg:w-6/12 flex-col items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none"
                                    style={{
                                        backgroundImage: `linear-gradient(to right, #05112B, #1B1750, #05112B)`,
                                    }}
                                >
                                    <div className={styles.sectiona}>
                                        <Image src={img1} alt="NFT Collage" />
                                    </div>
                                    <div class="text-white px-4 py-6 md:p-12 md:mx-6">
                                        <h4 class="text-xl font-semibold mb-6">
                                            We are more than just a company
                                        </h4>
                                        <p class="text-sm justify-start">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing
                                            elit, sed do eiusmod tempor incididunt ut labore et
                                            dolore magna aliqua. Ut enim ad minim veniam, quis
                                            nostrud exercitation ullamco laboris nisi ut aliquip ex
                                            ea commodo consequat.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
