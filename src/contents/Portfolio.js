import React, { Component } from "react";
import appstore from "../img/appstore.png";
import playstore from "../img/playstore.png";

const data = [
  {
    name: "Drybar",
    description:
      "Easily book a blowout appointment for you and all your friends. View, edit, or cancel your upcoming appointments on your personal home screen and seamlessly rebook your favorite service & location with just a few taps. You can find a Drybar location while on the go and become a Barfly with our Signature or Premium Memberships to ensure your hair is perfect on your most important dates throughout the month.",
    appstorelink: "https://apps.apple.com/us/app/drybar/id464998465",
    playstorelink: "",
    images: [
      "img/dry/1_login.png",
      "img/dry/2_signup.png",
      "img/dry/5_home.png",
      "img/dry/3_login.png",
      "img/dry/4_home.png",
      "img/dry/5_home.png",
      "img/dry/6_appointments.png",
      "img/dry/7_books.png",
      "img/dry/8_selectdate.png",
      "img/dry/9_Notes.png",
      "img/dry/10_addcard.png",
    ],
  },
  {
    name: "BlueClerk",
    description:
      "The BlueClerk mobile application allows users to code, set, and scan tags to units and record work. Submit job reports, route to customers and update logs in real time.",
    appstorelink: "https://apps.apple.com/us/app/blueclerk/id1450328521",
    playstorelink:
      "https://play.google.com/store/apps/details?id=com.blueclerk.app&hl=en_US&gl=US",
    images: [
      "img/blue/Login.png",
      "img/blue/Signup.png",
      "img/blue/Scantag.png",
      "img/blue/Alljobs.png",
      "img/blue/AddLocation.png",
      "img/blue/AddEquipment.png",
    ],
  },
];

class Portfolio extends Component {
  render() {
    return (
      <div className="condiv">
        <h1 className="subtopic">Portfolio Projects</h1>
        <ul className="portfolio">
          {data.map((item, index) => (
            <li key={index} className="portfolio">
              <span>
                <h3 className="portfolio">{item.name}</h3>
                <p>{item.description}</p>
                {item.appstorelink.length > 0 && (
                  <a
                    href={item.appstorelink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={appstore} alt="storeLink" className="storeIcon" />
                  </a>
                )}
                {item.playstorelink.length > 0 && (
                  <a
                    href={item.playstorelink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={playstore}
                      alt="storeLink"
                      className="storeIcon"
                    />
                  </a>
                )}
                <div className="portImage">
                  {item.images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt="portfolio"
                      className="portImage"
                    />
                  ))}
                </div>
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Portfolio;
