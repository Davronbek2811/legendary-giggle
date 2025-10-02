const boxer = document.getElementById('boxer');
const sotibOlingan = document.getElementById('sotibOlingani');
const narx = document.getElementById('narx');

let umumiyNarx = 0;

fetch('https://fakestoreapi.com/products?limit=10')
    .then((res) => res.json())
    .then((data) => data.map((item) => {
        const box = document.createElement('div')
        box.innerHTML = `
    <img class='img' src=${item.image}>
    <h1 class='title'>${item.title}</h1>
    <p class='desc'>${item.description}</p>
    <div class='flexberish'>
        <h3 class='price'>${item.price} $</h3>
        <button class='btn'>Sotib Olish</button>
    </div>`;
        box.classList.add('box');
        boxer.appendChild(box);
    }))
    .catch((error) => console.log(error.message))
    .finally(() => console.log('Finall'));

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn')) {
        const box = e.target.closest('.box');
        const title = box.querySelector('.title').textContent;
        const price = parseFloat(box.querySelector('.price').textContent); // son qilib olish

        let boxTalash = confirm(`Siz "${title}" mahsulotini ${price}$ ga sotib olyapsiz`);
        if (boxTalash == true) {
            sotibOlingan.innerHTML += `<p>Siz "${title}" mahsulotini ${price}$ ga sotib oldingiz</p>`;
            
            umumiyNarx += price;
            narx.innerHTML = `Umumiy narx: ${umumiyNarx.toFixed(2)} $`;
        }
    }
});
