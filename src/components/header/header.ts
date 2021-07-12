import Statistics from '../statistics/statistics';
import { playGm, startGm } from '../play/play';
import main from '../main/main';

function eventNav(e:any) {
    if (e.target.tagName === 'LI') {
        const mainPage:HTMLElement = document.querySelector('#main');
        if (e.target.id === 'liMain' && !e.target.classList.contains('decoration')) {
            document.querySelector('#statistics').classList.remove('show');
            main();
        } else if (e.target.id === 'liStatistics') {
            mainPage.innerHTML = '';
            new Statistics().create();
            document.querySelector('#statistics').classList.add('show');
        } else if (e.target.id !== 'liMain') {
            document.querySelector('#statistics').classList.remove('show');
            mainPage.onclick = null;
            playGm(e.target.id.replace('li', ''));
        }
        const list:HTMLElement = document.querySelector('#list');
        Array.from(list.children).forEach((el) => el.classList.remove('decoration'));
        e.target.classList.add('decoration');
        document.querySelector('#nav').classList.toggle('nav__show');
    }
}

export default function header() {
    const btn:HTMLElement = document.querySelector('#btn');
    btn.addEventListener('click', (e:MouseEvent) => {
        btn.classList.toggle('header__click');
        document.querySelector('#nav').classList.toggle('nav__show');
        e.stopPropagation();
    });

    const nav:HTMLElement = document.querySelector('#nav');
    nav.addEventListener('click', eventNav);
}

function eventFlipSwitcher() {
    const mainPage = document.querySelector('#main');
    const check = document.querySelector('#checkbox');
    if (mainPage.firstElementChild && mainPage.firstElementChild.id === 'category1') {
        mainPage.classList.toggle('change-background');
    }

    const start = document.querySelector('#start');
    if (start) {
        // @ts-ignore

        if (check.checked) {
            start.classList.remove('show');
        } else {
            start.classList.add('show');
        }
    }

    if (mainPage.firstElementChild && mainPage.firstElementChild.id !== 'category1') {
        // @ts-ignore

        if (check.checked) {
            mainPage.classList.remove('state-play');
        } else {
            mainPage.classList.add('state-play');
        }
    }
    // @ts-ignore

    if (check.checked && mainPage.firstElementChild && mainPage.firstElementChild.id !== 'category1') {
        start.classList.remove('btn-started-game');
        start.addEventListener('click', startGm);
        start.innerHTML = 'Start game';
        const imgs:NodeListOf<HTMLElement> = document.querySelectorAll('img');
        for (let i = 0, len = imgs.length; i < len; i += 1) {
            imgs[i].classList.remove('guessed');
        }
        document.querySelector('#containerStars').innerHTML = '';
    }
}

document.querySelector('#checkbox').addEventListener('change', eventFlipSwitcher);
