let img = document.querySelector(".IMG")
let nomi = document.querySelector(".NOMI")
let cost = document.querySelector(".COST")
let mavjud = document.querySelector(".MAVJUD")
let btn = document.querySelector(".btn_add")
let wrapper = document.querySelector(".wrapper")

let arr = JSON.parse(localStorage.getItem('users')) || [];

let ReadFunction = () => {
    wrapper.innerHTML = '';
    arr.map((v) => {
        let div = document.createElement("div");
        div.innerHTML = `<img src='${v.img}'> <p>${v.nomi}</p> <p>${v.cost}</p> <p>${v.mavjud}`;
        wrapper.appendChild(div)
    })
}

ReadFunction();

let AddFunction = () => {
    let obj = {
        img: img.value,
        nomi: nomi.value,
        cost: cost.value,
        mavjud: mavjud.value
    }


    arr.push(obj);
    localStorage.setItem('users', JSON.stringify(arr));
    ReadFunction();
}

btn.addEventListener('click', () => {
    AddFunction()
})