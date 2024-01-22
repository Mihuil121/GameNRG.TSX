function saveTextAndImage() {
    var text = document.getElementById("myText").value;

    var image = document.getElementById("myImage").files[0];
    var reader = new FileReader();
    reader.onloadend = function() {
        var items = JSON.parse(localStorage.getItem("items")) || [];
        var date = new Date();
        items.unshift({text: text, image: reader.result, date: date});
        localStorage.setItem("items", JSON.stringify(items));
    }
    reader.readAsDataURL(image);
}

window.onload = function() {
    var savedItemsElement = document.getElementById("savedItems");
    if(savedItemsElement) {
        var items = JSON.parse(localStorage.getItem("items")) || [];
        items.forEach(function(item) {
            var p = document.createElement("p");
            p.innerHTML = item.text + " (отправлено: " + new Date(item.date).toLocaleString() + ")";
            savedItemsElement.appendChild(p);

            var img = document.createElement("img");
            img.src = item.image;
            savedItemsElement.appendChild(img);
        });
    }
}
