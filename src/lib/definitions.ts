import { LucideIcon } from "lucide-react";

export type Services={
    name:string;
    icon:LucideIcon;
    description:string;
}

export const ProductCategories = [
    {
      label: "Electronics",
      value: "electronics",
      features: [
        {
          name: "Smartphones",
          href: "/electronics/smartphones",
          imageSrc: "/navBar/SmartPhone.jpg",
        },
        {
          name: "Laptops",
          href: "/electronics/laptops",
          imageSrc:"/navBar/LapTop.jpg",
        },
        {
          name: "Cameras",
          href: "/electronics/cameras",
          imageSrc: "/navBar/Camera.jpg",
        },
      ],
    },
    {
      label: "Fashion",
      value: "fashion",
      features: [
        {
          name: "Men's Clothing",
          href: "/fashion/mens-clothing",
          imageSrc:"/navBar/MensClothing.jpg",
        },
        {
          name: "Women's Clothing",
          href: "/fashion/womens-clothing",
          imageSrc: "/navBar/WomensClothing.jpg",
        },
        {
          name: "Accessories",
          href: "/fashion/accessories",
          imageSrc: "/navBar/Accessoirs.jpg",
        },
      ],
    },
    {
      label: "Home & Garden",
      value: "home-garden",
      features: [
        {
          name: "Furniture",
          href: "/home-garden/furniture",
          imageSrc: "/navBar/Furniture.jpg",
        },
        {
          name: "Decor",
          href: "/home-garden/decor",
          imageSrc: "/navBar/Decor.jpg",
        },
        {
          name: "Gardening",
          href: "/home-garden/gardening",
          imageSrc: "/navBar/Gardening.jpg",
        },
      ],
    },
    {
      label: "Courses & Training",
      value: "courses-training",
      features: [
        {
          name: "Web Development",
          href: "/courses-training/web-development",
          imageSrc: "/navBar/Accessoirs.jpg",
        },
        {
          name: "Graphic Design",
          href: "/courses-training/graphic-design",
          imageSrc: "/navBar/GraphicDesign.jpg",
        },
        {
          name: "Marketing",
          href: "/courses-training/marketing",
          imageSrc: "/navBar/GraphicDesign.jpg",
        },
      ],
    },
  ];
  