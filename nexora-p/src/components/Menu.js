import React, { useState } from "react";
import { menuData } from "../api/menuData.js";
import { navi, useNavigate } from 'react-router-dom'
import { BsCaretDownFill } from "react-icons/bs";

const MenuList = () => {
    const navigate = useNavigate();
    const [openSubMenu, setOpenSubMenu] = useState(null); // 어떤 서브메뉴가 열려있는지 추적

    // 메뉴 클릭 처리
    const handleMenuClick = (path, hasSubMenu, id) => {
        if (hasSubMenu) {
            console.log(hasSubMenu)
            setOpenSubMenu(openSubMenu === id ? null : id); // 이미 열린 서브 메뉴가 있으면 닫고, 아니면 열기
        } else {
            navi(path);
        }
    };

    const navi = (path) => {
        navigate(path);
    };

    return (
        <ul>
            {menuData.map((menuItem) => (
                <li key={menuItem.id}>
                    <div className="cursor-pointer menu-name" onClick={() => handleMenuClick(menuItem.path, menuItem.hasSubMenu, menuItem.id)}>
                        <span className="flex items-center justify-between text-[18px] font-medium">{menuItem.name} { menuItem.hasSubMenu && <BsCaretDownFill className={`ml-2 transition-transform duration-300 ${openSubMenu === menuItem.id && 'rotate-180'}`}/>} </span>
                    </div>
                    <div className={`overflow-hidden transition-all ease-in-out ${openSubMenu === menuItem.id ? "max-h-40 duration-[1.5s]" : "max-h-0 duration-[1s]"}`}>
                        {menuItem.hasSubMenu && (openSubMenu === menuItem.id ? 
                            <ul>
                                {menuItem.subMenu.map(subItem => (
                                <li key={subItem.id}>
                                    <div className="cursor-pointer menu-name" onClick={() => navigate(`${subItem.path}`) }>
                                        <span>{subItem.name}</span>
                                    </div>
                                </li>
                                ))}
                            </ul>
                        : null
                        )}
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default MenuList;

