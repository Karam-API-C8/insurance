        const nextBtn = document.querySelector(".next-btn");
        const prevBtn = document.querySelector(".prev-btn");
        const slides = document.querySelectorAll(".slide");
        const numberSlides = slides.length;
        var slideNumber = 0;
        const arr = Array.from(slides);
        let nextContent = document.getElementsByClassName("card"); 

        nextBtn.addEventListener("click", () => {
            arr.forEach((slide) =>{
                slide.classList.remove("active");
            });

            slideNumber++;

            if(slideNumber > (numberSlides - 1)){
            slideNumber = 0;
            }

            slides[slideNumber].classList.add("active");
        });
        
        prevBtn.addEventListener("click", () => {
            arr.forEach((slide) =>{
                slide.classList.remove("active");
            });

            slideNumber--;

            if(slideNumber < 0){
            slideNumber = numberSlides - 1;
            }

            slides[slideNumber].classList.add("active");
        });

        // image slider autoplay
        var playslide;

        var repeater = () => {
            playslide = setInterval(function(){
                arr.forEach((slide) =>{
                slide.classList.remove("active");
            });

            slideNumber++;

            if(slideNumber > (numberSlides - 1)){
            slideNumber = 0;
            }

            slides[slideNumber].classList.add("active");    
            }, 4000);
        }
        repeater();
       