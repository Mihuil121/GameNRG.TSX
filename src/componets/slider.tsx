import React, { Component } from 'react'
import Creators from "../imge/creators.jpg"
import Slider from "react-slick"
import Cart from "../imge/cart.png"
import Ytube from "../imge/ytub.jpeg"
import Du from "../imge/too.jpeg"
import Many from "../imge/many.jpeg"
import Prev from '../imge/prev.jpg'
import Art from '../imge/art121.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TheCreators from './TheCreators.tsx'

interface SliderState {
    showCreators: boolean
}

interface Dive {
    img: string
    name: string
    id: number
}

const data: Dive[] = [
    {
        name: "Создатели",
        img: Creators,
        id: 0
    },
    {
        name: "Карты",
        img: Cart,
        id: 1,
    },
    {
        name: "Ютуб",
        img: Du,
        id: 2
    },
    {
        name: "Заказать скин",
        img: Ytube,
        id: 3
    },
    {
        name: "Заказать превью",
        img: Prev,
        id: 4
    },
    {
        name: "Ваши арты",
        img: Art,

        id: 5
    },
    {
        name: "Проспансировать",
        img: Many,
        id: 6
    },

]

var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
};

export default class SliderComponent extends Component<{}, SliderState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            showCreators: false,
        };

        this.handekClic = this.handekClic.bind(this);
    }

    handekClic() {
        this.setState({ showCreators: true }, () => {
            console.log(this.state.showCreators)
        });

    }

    render() {
        return (
            <div className="">
                <div className="slider">
                    <div className="">
                        <div className="slider-flex-div">
                            <Slider {...settings}>
                                {data.map((d) => (
                                    <div className="slider-text-img" key={d.id}>
                                        <div className="flex-slider">
                                            <div className="img-slider">
                                                <img src={d.img} alt="" className="img-slider" />
                                            </div>
                                            <div className="text-slider">
                                                <p>{d.name}</p>
                                                {d.name === 'Ютуб' ? (
                                                    <a href="https://www.youtube.com/hashtag/gamenrg" target="_blank" rel="noopener noreferrer">
                                                        <button className="btn-slider">Перейти</button>
                                                    </a>
                                                ) : d.name === 'Заказать скин' ? (
                                                    <a href="https://discord.com/channels/1188902856997212210/1188903065730953307" target="_blank" rel="noopener noreferrer">
                                                        <button className="btn-slider">Перейти</button>
                                                    </a>
                                                ) : d.name === 'Заказать превью' ? (
                                                    <a href="https://discord.com/channels/1188902856997212210/1188903000303997079" target="_blank" rel="noopener noreferrer">
                                                        <button className="btn-slider">Перейти</button>
                                                    </a>
                                                ) : d.name === 'Проспансировать' ? (
                                                    <a href="https://expertnoemnenie.ru/?ref=asgmwt8bkfs6624x9zd1ct71t8&utm_source=yandex&utm_medium=cpa&utm_campaign=rec473&utm_content=13994822625&utm_term=сайт%20денег&yclid=10278302048015613951" target="_blank" rel="noopener noreferrer">
                                                        <button className="btn-slider">Перейти</button>
                                                    </a>
                                                ) : d.name === 'Создатели' ? (
                                                    <button onClick={this.handekClic} className="btn-slider">
                                                        Перейти
                                                    </button>
                                                ) :  d.name === 'Ваши арты' ? (
                                                    <a href="https://discord.com/channels/1188902856997212210/1194586776078131280" target="_blank" rel="noopener noreferrer">
                                                    <button className="btn-slider">Перейти</button>
                                                </a>
                                                ): d.name === 'Карты' ? (
                                                    <a href="https://minecraft-inside.ru/login/" target="_blank" rel="noopener noreferrer">
                                                    <button className="btn-slider">Перейти</button>
                                                    </a>
                                                ):(
                                                    <button className="btn-slider">Перейти</button>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>

                </div>
                {this.state.showCreators && <TheCreators />}
            </div>
        );
    }
}