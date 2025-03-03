import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/styles";

const DropDown = ({ categoriesData, setDropDown }) => {
    const navigate = useNavigate();
    const submitHandle = (i) => {
        navigate(`/products?category=${i.title}`);
        setDropDown(false);
        window.location.reload();
    };
    return (

        <div className="relative">

            {/* Top Arrow */}
            <div className="shadow-2xl  absolute top-[-10px] left-[20px] w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[10px] border-b-white z-40"></div>


            {/* Dropdown */}
            <div className="shadow-2xl  pb-4 w-[270px] bg-[#fff] absolute z-30 rounded-md max-h-[500px] overflow-y-auto">
                {categoriesData &&
                    categoriesData.map((i, index) => (
                        <div
                            key={index}
                            className={`${styles.noramlFlex} hover:underline cursor-pointer hover:bg-gray-200`}
                            onClick={() => submitHandle(i)}
                        >
                            {/* <img
                                src={i.image_Url}
                                style={{
                                    width: "25px",
                                    height: "25px",
                                    objectFit: "contain",
                                    marginLeft: "10px",
                                    userSelect: "none",
                                }}
                                alt="Drop Down img"
                            /> */}
                            <h3 className="m-3 ml-10 cursor-pointer select-none">{i.title}</h3>
                        </div>
                    ))}
            </div>


        </div>

    );
};

export default DropDown;