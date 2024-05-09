document.addEventListener("DOMContentLoaded", function () {
    // Carousel
    let carouselItem = document.getElementById("carouselItem1");
    console.log(carouselItem);

    // Show more/less buttons
    let buttons = document.querySelectorAll("button");
    console.log(buttons);
    buttons.forEach(button => {
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


