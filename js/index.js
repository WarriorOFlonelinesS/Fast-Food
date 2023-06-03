
const tabs = document.querySelectorAll('.tab__btn');
const main = document.getElementById('main');
const allContents = document.querySelectorAll('.content');
const backgroung = ['./img/visiter1.svg','./img/visiter2.svg','./img/visiter3.svg','./img/visiter4.svg','./img/visiter5.svg']

tabs.forEach((tab, index) =>{
    tab.addEventListener('click', ()=>{
        allContents.forEach(content =>{content.classList.remove('_active')})
        allContents[index].classList.add('_active');
        main.classList.add('_blow');
        const removing = () =>{
            main.classList.remove('_blow')
        }
        setTimeout(removing, 500);
        main.style.background = `url(${backgroung[index]})`;
        main.style.backgroundSize = 'cover';
        main.style.backgroundRepeat = 'no-repeat';
    })
})