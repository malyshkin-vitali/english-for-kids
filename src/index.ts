import './style/style.css';
import main from './components/main/main';
import header from './components/header/header';

window.addEventListener('load', () => {
    main();
    header();
    const nav: HTMLElement = document.getElementById('nav');
    document.getElementById('liMain').classList.add('decoration');

    document.body.addEventListener('click', (e) => {
        // @ts-ignore

        if (nav.classList.length > 1 && !(e.target.tagName === 'NAV' || !e.target.tagName === 'LI')) {
            nav.classList.remove('nav__show');
        }
    });
});
