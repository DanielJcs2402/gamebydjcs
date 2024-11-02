//get dom
const gameContainer = document.querySelector(".container"),
userResult = document.querySelector(".user_result img"),
cpuResult = document.querySelector(".cpu_result img"),
result = document.querySelector(".result"),
optionImages = document.querySelectorAll(".option_image");

//loop
optionImages.forEach((image, index) => {
    image.addEventListener("click", (e) => {
        image.classList.add("active");

        userResult.src = cpuResult.src = "images/rock.png";
       result.textContent = "Tunggu..."


            // loop through
            optionImages.forEach((image2, index2) => {
                // console.log(index, index2);
                // remove
                index !== index2 && image2.classList.remove("active");
            });

            gameContainer.classList.add("start");

            let time = setTimeout(() => {
            gameContainer.classList.remove("start");
                let imageSrc = e.target.querySelector("img").src;
                userResult.src = imageSrc;


                let randomNumber = Math.floor(Math.random() * 3);
                // console.log(randomNumber);
                let cpuImages = ["images/rock.png", "images/paper.png", "images/scissors.png"];
                cpuResult.src = cpuImages[randomNumber];

                let cpuValue = ["R", "P", "S"][randomNumber];
                let userValue = ["R", "P", "S"][index];

                let outcomes = {
                    RR: "Seri",
                    RP: "Computer",
                    RS: "User",
                    PP: "Seri",
                    PR: "User",
                    PS: "Computer",
                    SS: "Seri",
                    SR: "Computer",
                    SP: "User",
                };

                let outComeValue = outcomes[userValue + cpuValue];
                //tampilan menang
                result.textContent = userValue === cpuValue ? "Pertandingan Seri" : `${outComeValue} Menang!!`;
            }, 2500);
    });
});        