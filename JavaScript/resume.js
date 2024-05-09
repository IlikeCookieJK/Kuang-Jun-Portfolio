document.addEventListener("DOMContentLoaded", () => {
    let print = document.getElementById("print");
    let resume = document.getElementById("resume")

    print.addEventListener("click", function () { 
        window.print(resume)
    });

});