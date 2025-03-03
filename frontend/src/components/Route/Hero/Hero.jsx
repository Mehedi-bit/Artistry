import React from 'react'
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";


const Hero = () => {
    return (

        // MAIN HERO


        // <div
        //     className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
        //     style={{
        //         backgroundImage:
        //             // "url(https://themes.rslahmed.dev/rafcart/assets/images/banner-2.jpg)",
        //             "url(banner-5.png)",
        //         backgroundSize: "cover",
        //         backgroundPosition: "center",
        //         backgroundRepeat: "no-repeat",
        //     }}
        // >
        //     <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        //         <h1
        //             className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#3d3a3a] font-[600] capitalize`}
        //         >
        //             Best Collection for <br /> home Decoration
        //         </h1>
        //         <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#000000ba]">
        //             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae,
        //             assumenda? Quisquam itaque <br /> exercitationem labore vel, dolore
        //             quidem asperiores, laudantium temporibus soluta optio consequatur{" "}
        //             <br /> aliquam deserunt officia. Dolorum saepe nulla provident.
        //         </p>
        //         <Link to="/products" className="inline-block">
        //             <div className={`${styles.button} mt-5`}>
        //                 <span className="text-[#fff] font-[Poppins] text-[18px]">
        //                     Shop Now
        //                 </span>
        //             </div>
        //         </Link>

        //     </div>

        // </div>









        // Another Test Hero

            
        <section class="px-3 py-5 bg-neutral-100 lg:py-10">
            <div class="grid lg:grid-cols-2 items-center justify-items-center gap-5">
                <div class="order-2 lg:order-1 flex flex-col justify-center items-center">
                    <p class="text-4xl font-bold md:text-7xl text-orange-600">25% OFF</p>
                    <p class="text-4xl font-bold md:text-7xl">WINTER SALE</p>
                    <p class="mt-2 text-sm md:text-lg">For limited time only!</p>
                    
                    <Link to="/products" >
                        <button class="text-lg md:text-2xl bg-black text-white py-2 px-5 mt-10 hover:bg-zinc-800">Shop Now</button>
                    </Link>
                
                
                </div>
                <div class="order-1 lg:order-2">
                    <img class="h-80 w-80 object-cover lg:w-[500px] lg:h-[500px]" src="https://i.etsystatic.com/ij/c4cac3/6516599428/ij_680x540.6516599428_tifc3ahz.jpg?version=0" alt="" />
                </div>
            </div>
        </section>


    )
}

export default Hero