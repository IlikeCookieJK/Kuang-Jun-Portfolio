document.addEventListener("DOMContentLoaded", () => {
    let nextBttn = document.getElementById("next");
    let previewBttn = document.getElementById("preview");
    let carouselItem = document.getElementById("item1")

    nextBttn.addEventListener("click", () => {
        carouselItem.classList.add("hidden");
        item = Array.from(carouselItem.id);
        number = item[item.length - 1];
        console.log(parseInt(number))
        if (parseInt(number) === 6) {
            item.pop();
            item.push(1);
            itemID = item.join(``);
            changeCarouselItem(itemID);
        } else {
            item.pop();
            item.push(parseInt(number) + 1);
            itemID = item.join(``);
            changeCarouselItem(itemID);
        }
    });
    previewBttn.addEventListener("click", () => {
        carouselItem.classList.add("hidden");
        item = Array.from(carouselItem.id);
        number = item[item.length - 1];
        newNumber = parseInt(number) - 1;
        if (newNumber === 0) {
            item.pop();
            item.push(6);
            itemID = item.join(``);
            changeCarouselItem(itemID);
        } else {
            item.pop();
            item.push(parseInt(number) - 1);
            itemID = item.join(``);
            changeCarouselItem(itemID);
        }
    });

    function changeCarouselItem(id) {
        carouselItem = document.getElementById(`${id}`);
        carouselItem.classList.remove("hidden");
        carouselItem.classList.add("moveFromTop");
    }
});