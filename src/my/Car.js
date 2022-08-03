import React, { Component } from "react";

class Car extends Component {
  // для state и function

  // создаем состояние компонента
  state = {
    bookVisible: false,
  };

  // функция меняет статус на противоположный
  handlerClick = () => {
    this.setState({ bookVisible: !this.state.bookVisible });
  };

  render() {
    // для деструктуризации
    const { carName, year, power, body, color, price, image } = this.props;
    const { bookVisible } = this.state;

    return (
      <>
        <div className="one-car">
    
          <div className={bookVisible ? "book-info" : "book-info-null"}>
            Авто забронировано!
          </div>

          <div className="flex-holder">
            <div className="car-photo">
              <img src={image} alt="car" />
            </div>

            {/* создаем карточку с пропсами */}
            <div className="car-options">
              <h3>{carName}</h3>
              <p>{year}</p> <span>{power}</span>
              <p>{body}</p> <span>{color}</span>
              <p>{price}</p>
            </div>
          </div>

          <div className="booking-button">
            {/* функция на кнопку */}
            <button onClick={this.handlerClick}>Забронировать</button>
          </div>
        </div>
      </>
    );
  }
}

export default Car;
