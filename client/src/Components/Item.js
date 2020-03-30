import React, { Component } from "react";
import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery";
import "./css/Item.css";
import MoreItems from "./MoreItems.js";
import "lightgallery.js/dist/css/lightgallery.css";

export default class Item extends Component {
  state = {
    item: { id: "", name: "", prize: 0, imgSrc: [], measureSrc: [] },
    items: [{ id: "", name: "", prize: 0, imgSrc: [""] }],
    selectedSize: ["null"]
  };

  measures = [
    "data:image/png;base64,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"
  ];

  isLoaded = false;
  handleScrollClick = side => {
    const slider = document.querySelector(".product__mini .product__mini");
    const x = slider.scrollLeft;

    const category = document.querySelector(".product__mini-image");
    const categoryWidth = category.offsetWidth;

    const scrollInX = side * categoryWidth + x;
    slider.scroll({
      top: 0,
      left: scrollInX,
      behavior: "smooth"
    });
  };
  componentWillMount() {
    window.scrollTo(0, 0);
  }

  handleMiniImgClick = e => {
    document.querySelector(".product__image").src = e.target.src;
  };

  loadItem = () => {
    console.log("eeeeeeeeee");
    const href = `/api${window.location.pathname}`;
    fetch(href)
      .then(res => res.json())
      .then(data => {
        this.isLoaded = true;
        if (
          typeof data.measureSrc === "undefined" ||
          data.measureSrc.length === 0
        ) {
          console.log("wchodzii");
          data.measureSrc = this.measures;
        }
        console.log(data);
        this.setState({ item: data }, () => {
          if (window.screen.width < 426) {
            // this.handleScroll();
          }
        });

        // window.location.pathname = `${window.location.pathname}/${data.name}`
        // console.log(data);
      });
  };

  async componentDidMount() {
    this.loadItem();
  }

  handleAddingToCart = () => {
    const { selectedSize, item } = this.state;

    if (item.size[0] !== "") {
      console.log("in");
      if (selectedSize.length) {
        const choosedItem = {
          ...this.state.item,
          size: [this.state.selectedSize]
        };
        this.props.addItemToCart(choosedItem);

        const popup = document.querySelector(".popup");
        popup.style.display = "block";
      } else alert("Wybierz rozmiar");
    } else {
      const choosedItem = {
        ...this.state.item,
        size: ["brak"]
      };
      this.props.addItemToCart(choosedItem);
    }
  };

  handleScroll = () => {
    const slider = document.querySelector(".product__mini");
    console.log(slider);
    let lastCategory = null;
    // console.log(lastCategory);
    let isClicked = false;
    let startPosition = null;
    let diff;
    let transformX = 0;
    let target = null;
    const down = e => {
      isClicked = true;
      startPosition = e.clientX;
      lastCategory = document.querySelector(".product__mini-image:last-child");
      const matrixPos = window
        .getComputedStyle(slider)
        .getPropertyValue("transform");
      if (matrixPos !== "none") {
        transformX = parseInt(matrixPos.split(",")[4]);
      }
      target = e.target;
      e.preventDefault();
    };

    const move = e => {
      if (isClicked && lastCategory.getBoundingClientRect) {
        const x = lastCategory.getBoundingClientRect().x.toFixed(2);
        diff = e.clientX - startPosition;
        diff = diff * 1.5;
        if (transformX + diff > 0) return;
        if (x <= window.innerWidth * 0.99 - lastCategory.offsetWidth) {
          if (diff > 0) {
            slider.style.transform = `translateX(${transformX + diff}px)`;
          }
          return;
        }

        slider.style.transform = `translateX(${transformX + diff}px)`;
        target.style.pointerEvents = "none";
      }
    };

    const up = e => {
      isClicked = false;
      if (target) target.style.pointerEvents = "auto";
      e.preventDefault();
    };

    slider.addEventListener("mousedown", down);
    slider.addEventListener("mousemove", move);
    slider.addEventListener("mouseleave", up);
    slider.addEventListener("mouseup", up);
    window.scrollTo(0, 0);
  };

  render() {
    if (this.isLoaded) {
      const { item } = this.state;
      // console.log(this.props, "propsyyy");

      // console.log(item);
      const mini_items = item.imgSrc.map(item => (
        <>
          <div className="product__mini-image">
            <LightgalleryItem src={item}>
              <img
                src={item}
                alt=""
                className="product__src"
                onMouseOver={this.handleMiniImgClick}
              />
            </LightgalleryItem>
          </div>
        </>
      ));

      const allSizes = item.size.map(size => (
        <button
          id={`${size}`}
          className="product__button"
          onClick={e => this.setState({ selectedSize: [size] })}
        >
          {size}
        </button>
      ));

      const popup = [
        <div className="popup">
          <div
            onClick={e => {
              document.querySelector(".popup").style.display = "none";
            }}
            className="popup__background"
          ></div>
          <div className="popup__content">
            <div className="popup__contentText">
              <div className="popup__title">Produkt dodany do koszyka</div>
              <div className="singleCartItem">
                <div className="singleCartItem__img">
                  <a href={`/product/${item.id}`}>
                    <img src={item.imgSrc[0]} alt="" />
                  </a>
                </div>
                <div className="singleCartItem__info">
                  <div
                    style={{
                      color: "black",
                      marginBottom: "2vh",
                      border: "none"
                    }}
                    className="singleCartItem__infoSingle"
                  >
                    <a href={`/product/${item.id}`}>{item.name}</a>
                  </div>
                  <div className="singleCartItem__infoSingle">
                    Rozmiar {this.state.selectedSize}
                  </div>
                  <div className="singleCartItem__infoSingle">
                    Cena {item.prize}
                  </div>
                </div>
              </div>
            </div>
            <div className="buttons">
              <button
                onClick={() => {
                  document.querySelector(".popup").style.display = "none";
                }}
                class="sendOrder"
              >
                Wyjdź
              </button>
              <a href="/koszyk">
                <button
                  onClick={() => {
                    document.querySelector(".popup").style.display = "none";
                  }}
                  class="sendOrder"
                >
                  Przejdź do kasy
                </button>
              </a>
            </div>
          </div>
        </div>
      ];

      return (
        <>
          {popup}
          {/* <div className="routeItem ">
            <a className="routeText" href="/">
              Wstecz
            </a>
          </div> */}
          <div className="product__header">
            <div className="product ">
              <div className="product__mini">
                <div className="product__mini">
                  <LightgalleryProvider>{mini_items}</LightgalleryProvider>
                </div>
                <div
                  onClick={() => this.handleScrollClick(-1)}
                  className="main-categories__arrow main-categories__arrow--left "
                >
                  <i class="fas fa-chevron-left"></i>
                </div>
                <div
                  onClick={() => this.handleScrollClick(1)}
                  className="main-categories__arrow main-categories__arrow--right "
                >
                  <i class="fas fa-chevron-right"></i>
                </div>
              </div>
              <div className="product__photos">
                <div className="product__imgContainer">
                  <LightgalleryProvider>
                    <LightgalleryItem src={item.imgSrc[0]} group="images">
                      <img
                        src={item.imgSrc[0]}
                        alt=""
                        className="product__image"
                      />
                    </LightgalleryItem>
                    {item.imgSrc.map((source, idx) => {
                      if (idx !== 0)
                        return <LightgalleryItem group="images" src={source} />;
                    })}
                  </LightgalleryProvider>
                </div>
              </div>
              <div className="product__info ">
                <div className="companyName">Velluto Giorno</div>
                <div className="product__name-prize-container">
                  <h1 className="product__name product__name--item">
                    {item.name}
                  </h1>
                  <h1 className="product__prize product__prize--item">
                    {item.prize} PLN
                  </h1>
                  <h2 className="product__color">Kolor: {item.color}</h2>

                  {item.size[0] === "" ? null : (
                    <>
                      <h2 className="product__size">Rozmiar: </h2>
                      <div className="product__buttons">{allSizes}</div>
                    </>
                  )}
                  <div
                    className="product__addContainer"
                    onClick={this.handleAddingToCart}
                  >
                    <div className="product__add">
                      <div className="product__addText">Dodaj do koszyka</div>
                      <span className="i">
                        <i class="fas fa-cart-plus"></i>
                      </span>
                    </div>
                  </div>

                  <div className="product__description">
                    <div
                      onClick={e => {
                        e.target.nextSibling.classList.toggle(
                          "product__expanding--open"
                        );
                      }}
                      className="product__clickToInfo "
                    >
                      Informacje o produkcie
                    </div>
                    <div className="product__expanding ">
                      {item.description}
                      <br></br>
                    </div>
                  </div>

                  <div className="product__description">
                    <div
                      onClick={e => {
                        e.target.nextSibling.classList.toggle(
                          "product__expanding--open"
                        );
                      }}
                      className="product__clickToInfo "
                    >
                      Dostawa
                    </div>
                    <div className="product__expanding product__expanding--delivery ">
                      <p style={{ textAlign: "center" }}>
                        Dostawę zamówionych produktów realizujemy za
                        pośrednictwem firmy kurierskiej DPD
                      </p>
                      <p>Koszt przesyłki naliczamy zgodnie z taryfikatorem:</p>
                      <p>
                        <b>13,99 zł</b> przesyłka za wcześniejszym przelewem na
                        konto
                      </p>
                      <p>
                        <b>21,99 zł</b> przesyłka pobraniowa
                      </p>
                      <p style={{ textAlign: "center" }}>
                        W przypadku wysyłki za granicę koszt zgodnie z cennikiem
                        Poczty Polskiej.
                      </p>
                    </div>
                  </div>

                  <div className="product__description">
                    <div className="product__clickToInfo ">
                      <LightgalleryProvider>
                        <LightgalleryItem
                          src={item.measureSrc[0]}
                          group="measures"
                        >
                          Jak się dobrze mierzyć?
                        </LightgalleryItem>

                        {item.measureSrc.map((src, idx) => {
                          if (idx !== 0)
                            return (
                              <LightgalleryItem group="measures" src={src} />
                            );
                        })}
                      </LightgalleryProvider>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ height: "5vh" }}></div>
          <div className="container">
            <MoreItems />
          </div>
          <div style={{ height: "2vh" }}></div>
        </>
      );
    } else
      return (
        <div className="product__header">
          <div className="loading">VELLUTO GIORNO</div>
        </div>
      );
  }
}
