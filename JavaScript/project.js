document.addEventListener("DOMContentLoaded", function () {
    // Carousel
    let previousButton = document.getElementById("previous");
    let nextButton = document.getElementById("next");
    let carouselItem = document.getElementById("carouselItem1");
    nextButton.addEventListener("click", () => {
        carouselItem.classList.remove("moveRight");
        carouselItem.classList.add("hidden");
        item = Array.from(carouselItem.id);
        number = item[item.length - 1];
        changeID(number, item);
    });

    previousButton.addEventListener("click", () => {
        carouselItem.classList.remove("moveRight");
        carouselItem.classList.add("hidden");
        item = Array.from(carouselItem.id);
        number = item[item.length - 1];
        newNumber = parseInt(number) - 1;
        changeID2(newNumber, item);
    });

    function changeID(number, item) {
        if (parseInt(number) === 3) {
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
    }

    function changeID2(newNumber, item) {
        if (newNumber === 0) {
            item.pop();
            item.push(3);
            itemID = item.join(``);
            changeCarouselItem(itemID);
        } else {
            item.pop();
            item.push(parseInt(number) - 1);
            itemID = item.join(``);
            changeCarouselItem(itemID);
        }
    }

    function changeCarouselItem(id) {
        carouselItem = document.getElementById(`${id}`);
        carouselItem.classList.remove("hidden","moveLeft");
        carouselItem.classList.add("moveRight")
    }

    // Show more/less buttons
    let buttons = document.getElementsByClassName("trunc");
    // Turns HTMLCollection to an array
    let button = Array.from(buttons);
    button.forEach(button => {
        button.addEventListener("click", function () {
            if (this.name === "more") {
                // Gets paragraph ID and remove truncate class
                let descriptionID = this.id + "Description";
                let paragraph = document.getElementById(descriptionID);
                paragraph.classList.remove("truncate");
                // Adds hidden class to Show More button
                let more = document.getElementById(this.id);
                more.classList.add("hidden");
                // Removes hidden class from Show Less button
                let less = this.id + "Less";
                let showLess = document.getElementById(less);
                showLess.classList.remove("hidden");
            } else {
                // Adds truncate class
                let id = removeLess(this.id);
                let descriptionID = id + "Description";
                let paragraph = document.getElementById(descriptionID);
                paragraph.classList.add("truncate");
                // Adds/Removes hidden class to buttons
                let showLess = document.getElementById(this.id);
                showLess.classList.add("hidden");
                let showMore = document.getElementById(id);
                showMore.classList.remove("hidden");
            }

        });
    });

    function removeLess(id) {
        let showLess = id.split(``);
        let length = showLess.length;
        // Removes the less
        showLess.splice((length - 4), 4)
        return showLess.join("");
    }
});


