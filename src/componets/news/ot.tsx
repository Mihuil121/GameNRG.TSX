// InputPage.js
import React, { useState } from 'react';
import './news.css'


function InputPage() {
    const [text, setText] = useState("");
    const [image, setImage] = useState<string | null>(null);

    const saveTextAndImage = () => {
        var items = JSON.parse(localStorage.getItem("items") || "[]");
        var date = new Date();
        items.unshift({text: text, image: image, date: date});
        localStorage.setItem("items", JSON.stringify(items));
    }

    const handleImageUpload = e => {
        var reader = new FileReader();
        reader.onloadend = function() {
            setImage(reader.result as string);
        }
        reader.readAsDataURL(e.target.files[0]);
    }

    return (
        <div className='The-input-page'>
            <h1>Страница ввода</h1>
            <input className='input-text' type="text" value={text} onChange={e => setText(e.target.value)} placeholder="Введите текст" />
            <input type="file" onChange={handleImageUpload} accept="image/*" />
            <button onClick={saveTextAndImage}>Сохранить</button>
        </div>
    );
}

export default InputPage;
