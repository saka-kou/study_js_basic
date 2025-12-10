const photos = document.querySelectorAll("#photo li");
console.log(photo[1]);
count = 0;
// const photoArray = [photo];
setInterval(() => {
    // console.log(count);
    photos.forEach(photo => photo.style.zIndex = 0);
    photos[count].style.zIndex = 10;
    count++;
    if (count >= photos.length) {
        count = 0;
        // photos[count].style.zIndex = numArray[count];
    }
}, 1000);