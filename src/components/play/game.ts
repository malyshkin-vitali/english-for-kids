import cards from '../../data/cards';

const categories = document.getElementById('main');

export default class Game {
    idCategory: any;
    count: number;
    start: boolean;
    words: any[];
    message: string;
    constructor(idCategory) {
        this.idCategory = idCategory;
        this.count = 0;
        this.start = false;
        this.words = []
        this.createWords();
    }

    createWords() {
        try {
            this.words = [];
            let category = new Array(cards[this.idCategory].length).fill(0);
            category = category.map((item, index) => index);
            while (category.length > 0) {
                const id = Math.floor(Math.random() * category.length);
                this.words.push(category[id]);
                category.splice(id, 1);
            }
        } catch (error) {
            this.message = error.message;
        }
    }

    nextWord(id) {
        try {
            this.count += 1;
            const img = document.createElement('img');
            img.className = 'star';
            img.src = './images/star-win.svg';
            document.querySelector('#containerStars').append(img);
            const audio = new Audio();
            audio.src = './audio/correct.mp3';
            audio.autoplay = true;
            this.words.shift();
            if (this.words.length === 0) {
                this.endGame();
            }
            this.addStoragePlay(id);
            this.repeatWord();
        } catch (error) {
            this.message = error.message;
        }
    }

    wrong(id) {
        try {
            this.count += 1;
            const audio = new Audio();
            audio.src = './audio/error.mp3';
            audio.autoplay = true;
            const img = document.createElement('img');
            img.className = 'star';
            img.src = './images/star.svg';
            document.querySelector('#containerStars').append(img);
            this.addStoragePlay(id);
            this.addStorageError(id);
        } catch (error) {
            this.message = error.message;
        }
    }

    repeatWord() {
        setTimeout(() => {
            try {
                if (this.words && this.words.length > 0) {
                    const audio = new Audio();
                    audio.src = cards[this.idCategory][this.words[0]].audio;
                    audio.autoplay = true;
                }
            } catch (error) {
                this.message = error.message;
            }
        }, 400);
    }

    endGame() {
        setTimeout(() => {
            try {
                categories.innerHTML = '';
                categories.classList.remove('state-play');
                const message = document.createElement('p');
                message.className = 'message';
                const img = document.createElement('img');
                img.className = 'end-game';
                const wrap = document.createElement('div');
                wrap.className = 'wrap';
                const audio = new Audio();
                if (this.count !== cards[this.idCategory].length) {
                    message.innerHTML = `Error count: ${this.count - cards[this.idCategory].length}`;
                    img.src = './images/failure.png';
                    audio.src = './audio/failure.mp3';
                } else {
                    message.innerHTML = 'You Won!';
                    img.src = './images/success.png';
                    audio.src = './audio/success.mp3';
                }
                audio.autoplay = true;
                wrap.append(message);
                wrap.append(img);
                categories.append(wrap);
                document.querySelector('#header').classList.add('hide');
            } catch (error) {
                this.message = error.message;
            }
        }, 700);
        setTimeout(() => {
            document.querySelector('#header').classList.remove('hide');
            if (document.querySelector('#liMain')) document.getElementById('liMain').click();
        }, 4000);
    }

    addStoragePlay(id) {
        try {
            const word = document.querySelector(`#label${id}`).innerHTML;
            const storage = localStorage.getItem(word) || false;
            if (storage) {
                const words = storage.split(',');
                console.log(words)

                words[3] = String(+words[3] + 1);
                console.log(words)

                words[5] = (+words[4]) ? String( Math.ceil((100 * Number(words[4])) / Number(words[3]))) : '0';
                localStorage.setItem(word, words.join(','));
            }
        } catch (error) {
            this.message = error.message;
        }
    }

    addStorageError(id) {
        try {
            const word = document.querySelector(`#label${id}`).innerHTML;
            const storage = localStorage.getItem(word);
            const words = storage.split(',');
            words[4] = String(+words[4] + 1);
            words[5] = (+words[4]) ? String(Math.ceil((100 * Number(words[4])) / Number(words[3]))): '0';
            localStorage.setItem(word, words.join(','));
        } catch (error) {
            this.message = error.message;
        }
    }

    addStorageTrain(id) {
        try {
            const word = document.querySelector(`#label${id}`).innerHTML;
            const storage = localStorage.getItem(word);
            const words = storage.split(',');
            words[2] = String(+words[2] + 1);
            localStorage.setItem(word, words.join(','));
        } catch (error) {
            this.message = error.message;
        }
    }
}
