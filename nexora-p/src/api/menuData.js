export const menuData = [
    {
        id: 1,
        name: "홈으로",
        path: "/",
        hasSubMenu: false,
        subMenu: [],
    },
    {
        id: 2,
        name: "일정관리",
        path: "/Schedule",
        hasSubMenu: false,
        subMenu: [],
    },
    {
        id: 3,
        name: "투두리스트",
        path: "/TodoList",
        hasSubMenu: true,
        subMenu: [
            {
                id: 4,
                name: "서브 투두리스트",
                path: "/TodoList",
            },
        ],
    },
];
