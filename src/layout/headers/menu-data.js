import HomeIcon from "@/src/svg/home-icon";

const menu_data = [
  {
    id: 1,
    mega_menu: false,
    has_dropdown: false,
    home_icon: <HomeIcon />,
    title: "Home",
    link: "/",
    active: "",
  },
  {
    id: 2,
    mega_menu: false,
    has_dropdown: false,
    title: "Company",
    link: "/about",
    // link: "/tabsmain",/
    active: "",
  },   
  {
    id: 3,
    mega_menu: false,
    has_dropdown: true,
    title: "Services",
    link: "/service",
    active: "",
    sub_menus: [
      { link: "/service-details", title: "Service" },
      { link: "/portfolio", title: "portfolio" },
       
    ],
  },
  {
    id: 6,
    mega_menu: false,
    has_dropdown: false,
    title: "Contact",
    link: "/contact",
    active: "",
  },
  

];
export default menu_data;
