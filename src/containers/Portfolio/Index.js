import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent/Index";
import { GoProjectSymlink } from "react-icons/go";
import ImageOne from "../../images/image1.png";
import ImageTwo from "../../images/image2.png";
import ImageThree from "../../images/image3.png";
import ImageFour from "../../images/image4.png";
import ImageFive from "../../images/image5.png";
import "./styles.scss";
import { useState } from "react";

const portfolioData = [
  {
    id: 3,
    name: "Text To Sound",
    image: ImageOne,
    link: "https://text-to-speech-converter-sepia-five.vercel.app/ ",
  },
  {
    id: 2,
    name: "Password Manager",
    link: "https://password-maneger.vercel.app/",
    image: ImageTwo,
  },
  {
    id: 2,
    name: "Light & Dark",
    image: ImageThree,
    link: "https://light-and-dark-mode-sigma.vercel.app/",
  },
  {
    id: 3,
    name: "Currency Changer",
    image: ImageFour,
    link: "https://currency-converter-d44z.vercel.app/",
  },
  {
    id: 3,
    name: "Todo App",
    image: ImageFive,
    link: "https://todos-app-react-wine.vercel.app/",
  },
];

const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "Frontend",
  },
  {
    filterId: 3,
    label: "Full Stack",
  },
];

const Portfolio = () => {
  const [filteredvalue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  function handleHover(index) {
    setHoveredValue(index);
  }

  const filteredItems =
    filteredvalue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredvalue);

      const handleVisit = (link) => {
        window.open(link, '_blank');
      }     



  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<GoProjectSymlink size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredvalue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filteredItems.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a>
                  <img alt="dummy data" src={item.image} />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p>{item.name}</p>
                    <button onClick={() => handleVisit(item.link)}>Visit</button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;