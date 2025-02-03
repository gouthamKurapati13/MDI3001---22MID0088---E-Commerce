// Dynamic Text Update
function updateText(newText) {
    document.getElementById('dynamicText').textContent = newText;
};

// Image Enlarge/Shrink
let image = document.getElementById('featuredImage');

document.getElementById('enlargeImageBtn').addEventListener('click', function () {
    image.style.width = '500px';
});

document.getElementById('shrinkImageBtn').addEventListener('click', function () {
    image.style.width = '280px';
});