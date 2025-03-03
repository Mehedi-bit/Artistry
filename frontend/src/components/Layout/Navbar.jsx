import React from 'react';
import { Link } from 'react-router-dom';
import { navItems } from '../../static/data';
import styles from '../../styles/styles';

const Navbar = ({ active }) => {
    return (
        <div className={`block 800px:${styles.noramlFlex}`}>
            {navItems.map((i, index) => (
                <div className="flex items-center" key={index}>
                    <Link
                        to={i.url}
                        className={`${
                            active === index + 1
                                ? "text-[#F16521] 800px:text-[white] font-bold"
                                : "text-black 800px:text-[#fff]"
                        } pb-[30px] 800px:pb-0 font-[500] px-6 cursor-pointer flex items-center`}
                    >
                        {active === index + 1 && <span className="mr-1">{'>'}</span>}
                        {i.title}
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default Navbar;
