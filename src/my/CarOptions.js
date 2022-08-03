import React, { Component } from "react";

export default class CarOptions extends Component {
  state = {
    hours: 1,
    insuranceStatus: false,
    totalSum: 0, // итоговая сумма бронирования
  };



  // функция смены insuranceStatus на противоположное значение = true
  handlerClick = () => {
    this.setState({
      insuranceStatus: !this.state.insuranceStatus,
    });
  };

  // функция смены счетчика часов аренды (+1)
  changeQuantityPlus = () => {
    this.setState((prevState) => ({ ...prevState, hours: this.state.hours + 1 }));
  };

  // функция смены счетчика часов в минус (-1)

  changeQuantityMinus = () => {
    console.log(this.state.yyy);
    this.setState((prevState) => ({ ...prevState, hours: this.state.hours - 1 }));
  };





  render() {
    // декструтурируем объект state
    let { insuranceStatus } = this.state;
  

    //создаем сообщение для кнопки
    let buttonMessage = "Добавить";
    if (insuranceStatus) {
      buttonMessage = "Добавлено";
    }

    return (
      <>
        <div className="car-options-main">
          <div className="car-options-hours">
            <div className="hours-add">
              <p>
                Укажите время бронирования <br />
                (минимальное время 1(Один) час)
              </p>
            </div>

            <div className="hours-result">
              Количество часов:
              <div className="hours-add-btn">
                {/* количество часов минус: */}
                <button onClick={this.changeQuantityMinus}>-</button>

                {this.state.hours}

                {/* количество часов плюс: */}
                <button onClick={this.changeQuantityPlus}>+</button>
              </div>
            </div>
          </div>

          <div className="car-options-insurance">
            <div className="add-insurance">
              <p>
                Добавить пакет расширенного страхования, <br />
                (Полное покрытие страховой суммы,в случае ДТП)
                <br />
                Стоимость услуги 399 руб.
              </p>

              <div className="insurance-add-btn">
                <button
                  className={
                    insuranceStatus ? "insurance-added" : "insurance-add"
                  }
                  onClick={this.handlerClick}
                >
                  {buttonMessage}
                </button>
              </div>
            </div>
          </div>

          <div className="main-results">{/* итоговая сумма бронирования */}
            <h2>Итого сумма бронирования: {this.state.totalSum} руб.</h2> 
          </div>
          {/* main results */}
        </div>
        {/* car-options-main */}
      </>
    );
  }
}
