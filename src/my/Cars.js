import React, { Component } from "react";
import Car from "./Car";
import Mers from "../my/Mers.jpg";
import Polo from "../my/Polo.jpg";
import Rio from "../my/Rio.jpg";
import Kaptur from "../my/Kaptur.jpg";
import Genesis from "../my/Genesis.jpg";
import Octavia from "../my/Octavia.jpg"

// дата из npm пакета dayjs
// const dayjs = require("dayjs");

class Cars extends Component {
  render() {
    
    // const date = dayjs().toString();

    return (
      <>
        {/* <div className="date">
          {date}
        </div> */}

        <div className="allCars">
          <Car
            image={Mers}
            carName="Марка авто: Mersedes-Benz C class"
            year="Год: 2019"
            power="Лошадиных сил: 180"
            body='Тип кузова: "hatchback"'
            color="Цвет: белый"
            price="1000 руб./час"
          />

          <Car
            image={Polo}
            carName="Марка авто: Volkswagen Polo"
            year="Год: 2018"
            power="Лошадиных сил: 120"
            body='Тип кузова: "sedan"'
            color="Цвет: белый"
            price="600 руб./час"
          />

          <Car
            image={Rio}
            carName="Марка авто: KIA Rio"
            year="Год: 2020"
            power="Лошадиных сил: 123"
            body='Тип кузова: "sedan"'
            color="Цвет: белый"
            price="700 руб./час"
          />

          <Car
            image={Kaptur}
            carName="Марка авто: Renault Kaptur"
            year="Год: 2021"
            power="Лошадиных сил: 143"
            body='Тип кузова: "universal"'
            color="Цвет: белый"
            price="850 руб./час"
          />

          <Car
            image={Genesis}
            carName="Марка авто: Genesis G70"
            year="Год: 2021"
            power="Лошадиных сил: 197"
            body='Тип кузова: "sedan"'
            color="Цвет: белый"
            price="1100 руб./час"
          />

          <Car
            image={Octavia}
            carName="Марка авто: Skoda Octavia"
            year="Год: 2016"
            power="Лошадиных сил: 140"
            body='Тип кузова: "sedan"'
            color="Цвет: белый"
            price="600 руб./час"
          />
        </div>
      </>
    );
  }
}

export default Cars;
