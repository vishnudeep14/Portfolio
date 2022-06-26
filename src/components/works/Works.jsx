
import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/pb.webp",
      title: "About Me",
      desc:
        "A commerce graduate with a keen eye towards art, I primarily pursued fashion designing with substantial success before a stint at teaching led me towards my current passion and profession, Tanjore art painting. Fascinated by its richness and with ardent enthusiasm, I initially started learning the different forms of Tanjore and Mysore art style of paintings on my own before being introduced to my Guru, Sri. Sheshadri. My Guru helped guide me towards intricate Tanjore art style of painting which has since become my signature art for the past ten years. The uniqueness in my work is use of oil paints that helps preserve the painting and maintain its beauty for decades.  I have created several masterpieces that have travelled far beyond Bangalore and touched the shores of USA. Aside from this, I create traditional art work like Rangoli designs on marble, wood and varied gift items that help enhance the joy of festival celebrations. A customized personal gift is my forte which has numerous gratified customers",
      
    },
    {
      id: "2",
      icon: "./assets/cv.jpg",
      title: "Pablo Piccasso",
      desc:
        "Art is the lie that enables us to realize the truth.",
      
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Vincent Van Gogh",
      desc:
        "I dream my painting and I paint my dream.",
      
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                </div>
              </div>
             
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
