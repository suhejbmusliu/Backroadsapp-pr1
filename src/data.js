import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";
import tour5 from "./images/tour-5.jpeg";
import tour6 from "./images/tour-6.jpeg";


export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

export const socialLinks = [
  { id: 1, href: "https://www.facebook.com/", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com/", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.squarespace.com/", icon: "fab fa-squarespace" },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet",
    title: "saving money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 2,
    icon: "fas fa-tree",
    title: "endless hiking",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 3,
    icon: "fas fa-socks",
    title: "amazing comfort",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
];

export const tours = [
  {
    id: 1,
    image: tour1,
    title: "Tibet Adventure",
    info: "A Tibet Adventure is one of the most unique journeys you can experience",
    location: "china",
    duration: "6 days",
    cost: 2100,
  },
  {
    id: 2,
    image: tour2,
    title: "Banff National Park",
    info: "Known for its stunning mountain landscapes, outdoor activities, and vibrant wildlife.",
    location: "Canada",
    duration: "6 days",
    cost: 2100,
  },
  {
    id: 3,
    image: tour3,
    title: "Kyoto, ",
    info: "Known for traditional temples, Zen gardens, tea houses, and seasonal cherry blossoms.",
    location: "Japan",
    duration: "6 days",
    cost: 2100,
  },
    {
    id: 4,
    image: tour4,
    title: "Marrakech",
    info: "Known for its vibrant souks, stunning palaces, and rich history.",
    location: "Morocco",
    duration: "6 days",
    cost: 2100,
  },

      {
    id: 5,
    image: tour5,
    title: "Santorini",
    info: "Aegean island with iconic whitewashed houses, blue-domed churches, and stunning sunsets over the caldera.",
    location: "Greece",
    duration: "6 days",
    cost: 2100,
  },

      {
    id: 6,
    image: tour6,
    title: "Ancient Marvels",
    info: "Egypt is a dream destination if you love history, culture, and adventure.",
    location: "Egypt",
    duration: "6 days",
    cost: 2100,
  },
];
