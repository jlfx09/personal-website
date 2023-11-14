  const imagesAndTexts = [
            { image: "image/image1.jpg", text: "Database based on Java that can store information using MYSQL" },
            { image: "image/image2.jpg", text: "A responsive webpage based around CSS and HTML with subtle Javascript." },
            { image: "image/image3.png", text: "A basic website design based around HTML, CSS and Javascript." },

        ];

        let currentIndex = 0;

        function changeImage() {
        const imageElement = document.getElementById("carousel-image");
        const textElement = document.getElementById("carousel-text");
        imageElement.src = imagesAndTexts[currentIndex].image;
        textElement.innerHTML = imagesAndTexts[currentIndex].text;
        currentIndex = (currentIndex + 1) % imagesAndTexts.length;
        }

   
        setInterval(changeImage, 4500);

        // Initial image load
        changeImage();


 