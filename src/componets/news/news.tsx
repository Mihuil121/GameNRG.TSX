// DisplayPage.js
import React, { useEffect, useState } from 'react';
import Img1 from '../../imge/hel.jpg'
import news from './news.css'
import Img2 from '../../imge/hel2.jpg'
import Img3 from '../../imge/art2.jpg'
import Img4 from '../../imge/art.jpg'
type Item = {
  text: string;
  image: string;
  date: any;
};

const itemNews: Item[] = [
  {
    text: "GameNRG - один из самых популярных и креативных серверов по игре Minecraft. На этом сервере проходят различные ивенты, посвященные разным темам и праздникам. Один из таких ивентов - Академия ужасов, которая была построена специально к Хэллоуину.",
    image: Img1,
    date: 'j'
  },
  {
    text: "Академия ужасов - это один из самых уникальных и захватывающих проектов от GameNRG. Это не просто игра, а целая история, полная приключений, юмора и ужасов. Это проект, который показывает, что в Minecraft можно создать все, что угодно.",
    image: Img2,
    date: 'j'
  },
  {
    text: "Артем показал свои действия на сервере, которые включали в себя поджоги, взрывы, кражи, убийства и троллинг. Он также рассказал о Совете, который состоит из трех других игроков: спаунера, Реда и странника Антона. Совет отвечает за управление разными областями сервера, такими как спавн, редстоун и приключения. Артем сказал, что он не согласен с некоторыми решениями Совета и хочет изменить их.",
    image: Img3,
    date: 'j'
  },
  {
    text: "Артем заявил, что он не боится последствий своих действий и что он не собирается останавливаться. Он сказал, что он получает удовольствие от того, что он делает, и что он хочет вызвать реакцию у других игроков. Он также призвал своих подписчиков поддержать его и присоединиться к нему на сервере Game Energy.",
    image: Img4,
    date: 'j'
  },
 

]

function DisplayPage() {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    setItems(JSON.parse(localStorage.getItem("items") || "[]"));
  }, []);


  return (
    <div style={news}>
      <div className='news-news-news'>
        <h1 className='news-h1'>Новости</h1>
        <div id="savedItems">
        {items.map((item, index) => (
            <div className='flex-news-div' key={index}>
              <p></p>
              <p className='news-text-item'>{item.text} (отправлено: {new Date(item.date).toLocaleString()})</p>
              <img className='img-news' src={item.image} alt="" />
            </div>
          ))}
          {itemNews.map((it) => (
            <div className='flex-news-div' >
              <p></p>
              <p className='news-text-item news-text-item2'>{it.text} </p>
              <img className='img-news' src={it.image} alt="" />
            </div>
          ))}
         
        </div>
      </div>
    </div>
  );
}

export default DisplayPage;
