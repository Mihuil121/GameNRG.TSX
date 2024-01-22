import React, { Component } from 'react'
import Nex from '../imge/nex.webp'
import Red from '../imge/red.webp'
import Gold from '../imge/Gold.webp'

interface pipale {
    name: string,
    img: string,
}

const piple: pipale[] = [
    {
        name: 'Nexon 95',
        img: Nex,
    },
    {
        name: 'RED PLAY',
        img: Red,
    },
    {
        name: 'Goldy Top',
        img: Gold,
    },
]

export default class TheCreators extends Component {
    render() {
        return (
            <div>
                <div className="creators-main">

                    <div className="creators">
                        <p className='creators-main-p'>
                            Основатели
                        </p>
                        <div className="creators-flex">
                            {piple.map((p) => (<div className="creators-div">
                                <img src={p.img} alt="" className='creators-img-1'/>
                                <p className='creators-text-name'>{p.name}</p>
                            </div>))}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
