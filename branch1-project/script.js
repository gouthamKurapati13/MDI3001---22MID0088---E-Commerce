// Dynamic Text Update for Featured Product
document.getElementById('updateTextBtn').addEventListener('click', function () {
    document.getElementById('dynamicText').textContent = 'Featured Product: Amazing Gadget!';
});

// Image Enlarge/Shrink for Featured Product
let featuredImage = document.getElementById('featuredImage');
let featuredCurrentWidth = featuredImage.clientWidth;

document.getElementById('enlargeImageBtn').addEventListener('click', function () {
    featuredCurrentWidth += 50;
    featuredImage.style.width = featuredCurrentWidth + 'px';
});

document.getElementById('shrinkImageBtn').addEventListener('click', function () {
    featuredCurrentWidth -= 50;
    featuredImage.style.width = featuredCurrentWidth + 'px';
});

// Dynamic Text Update for Additional Product
document.getElementById('updateProductTextBtn').addEventListener('click', function () {
    document.getElementById('productDynamicText').textContent = 'Product 1: Incredible Device!';
});

// Image Enlarge/Shrink for Additional Product
let productImage = document.getElementById('productImage');
let productCurrentWidth = productImage.clientWidth;

document.getElementById('enlargeProductImageBtn').addEventListener('click', function () {
    productCurrentWidth += 50;
    productImage.style.width = productCurrentWidth + 'px';
});

document.getElementById('shrinkProductImageBtn').addEventListener('click', function () {
    productCurrentWidth -= 50;
    productImage.style.width = productCurrentWidth + 'px';
});