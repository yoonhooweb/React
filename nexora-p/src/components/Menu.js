import React, { useState } from "react";
import { menuData } from "../api/menuData.js";
import { navi, useNavigate } from 'react-router-dom'

const MenuList = () => {
    const navigate = useNavigate();
    const [openSubMenu, setOpenSubMenu] = useState(null); // 어떤 서브메뉴가 열려있는지 추적

    // 메뉴 클릭 처리
    const handleMenuClick = (path, hasSubMenu, id) => {
        if (hasSubMenu) {
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
                    <div onClick={() => handleMenuClick(menuItem.path,menuItem.hasSubMenu,menuItem.id)}>
                        <span className="iconMenu">아이콘</span>
                        <span>{menuItem.name}</span>
                    </div>
                    {menuItem.hasSubMenu && (openSubMenu === menuItem.id ? 
                        <ul>
                            {menuItem.subMenu.map(subItem => (
                            <li key={subItem.id}>
                                <div onClick={() => navigate(`${subItem.path}`) }>
                                    <span className="iconMenu">아이콘</span>
                                    <span>{subItem.name}</span>
                                </div>
                            </li>
                            ))}
                        </ul>
                    : null
                    )}
                </li>
            ))}
        </ul>
    );
};

export default MenuList;

