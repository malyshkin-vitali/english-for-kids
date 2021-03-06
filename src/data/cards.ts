interface card {
    english: string;
    russian: string;
    image: string;
    audio:string
}


const cards: any = [
    ['Action (set A)', 'Action (set B)', 'Animal (set A)', 'Animal (set B)', 'Clothes', 'Emotions', 'Eat', 'Fruit', 'Furniture', 'Nature', 'Transport', 'Vegetables'],
    [
        {
            english: 'cry',
            russian: 'плакать',
            image: './images/cry.jpg',
            audio: './audio/cry.mp3',
        },
        {
            english: 'dance',
            russian: 'танцевать',
            image: './images/dance.jpg',
            audio: './audio/dance.mp3',
        },
        {
            english: 'dive',
            russian: 'нырять',
            image: './images/dive.jpg',
            audio: './audio/dive.mp3',
        },
        {
            english: 'draw',
            russian: 'рисовать',
            image: './images/draw.jpg',
            audio: './audio/draw.mp3',
        },
        {
            english: 'walk',
            russian: 'идти',
            image: './images/walk.jpg',
            audio: './audio/walk.mp3',
        },
        {
            english: 'fly',
            russian: 'летать',
            image: './images/fly.jpg',
            audio: './audio/fly.mp3',
        },
        {
            english: 'hug',
            russian: 'обнимать',
            image: './images/hug.jpg',
            audio: './audio/hug.mp3',
        },
        {
            english: 'jump',
            russian: 'прыгать',
            image: './images/jump.jpg',
            audio: './audio/jump.mp3',
        },
    ],
    [
        {
            english: 'open',
            russian: 'открывать',
            image: './images/open.jpg',
            audio: './audio/open.mp3',
        },
        {
            english: 'play',
            russian: 'играть',
            image: './images/play.jpg',
            audio: './audio/play.mp3',
        },
        {
            english: 'point',
            russian: 'указывать',
            image: './images/point.jpg',
            audio: './audio/point.mp3',
        },
        {
            english: 'ride',
            russian: 'ездить',
            image: './images/ride.jpg',
            audio: './audio/ride.mp3',
        },
        {
            english: 'run',
            russian: 'бегать',
            image: './images/run.jpg',
            audio: './audio/run.mp3',
        },
        {
            english: 'sing',
            russian: 'петь',
            image: './images/sing.jpg',
            audio: './audio/sing.mp3',
        },
        {
            english: 'skip',
            russian: 'перепрыгивать',
            image: './images/skip.jpg',
            audio: './audio/skip.mp3',
        },
        {
            english: 'swim',
            russian: 'плавать',
            image: './images/swim.jpg',
            audio: './audio/swim.mp3',
        },
    ],
    [
        {
            english: 'cat',
            russian: 'кот',
            image: './images/cat.jpg',
            audio: './audio/cat.mp3',
        },
        {
            english: 'chick',
            russian: 'цыплёнок',
            image: './images/chick.jpg',
            audio: './audio/chick.mp3',
        },
        {
            english: 'chicken',
            russian: 'курица',
            image: './images/chicken.jpg',
            audio: './audio/chicken.mp3',
        },
        {
            english: 'dog',
            russian: 'собака',
            image: './images/dog.jpg',
            audio: './audio/dog.mp3',
        },
        {
            english: 'horse',
            russian: 'лошадь',
            image: './images/horse.jpg',
            audio: './audio/horse.mp3',
        },
        {
            english: 'pig',
            russian: 'свинья',
            image: './images/pig.jpg',
            audio: './audio/pig.mp3',
        },
        {
            english: 'rabbit',
            russian: 'кролик',
            image: './images/rabbit.jpg',
            audio: './audio/rabbit.mp3',
        },
        {
            english: 'sheep',
            russian: 'овца',
            image: './images/sheep.jpg',
            audio: './audio/sheep.mp3',
        },
    ],
    [
        {
            english: 'bird',
            russian: 'птица',
            image: './images/bird.jpg',
            audio: './audio/bird.mp3',
        },
        {
            english: 'fish',
            russian: 'рыба',
            image: './images/fish.jpg',
            audio: './audio/fish.mp3',
        },
        {
            english: 'frog',
            russian: 'жаба',
            image: './images/frog.jpg',
            audio: './audio/frog.mp3',
        },
        {
            english: 'giraffe',
            russian: 'жираф',
            image: './images/giraffe.jpg',
            audio: './audio/giraffe.mp3',
        },
        {
            english: 'lion',
            russian: 'лев',
            image: './images/lion.jpg',
            audio: './audio/lion.mp3',
        },
        {
            english: 'mouse',
            russian: 'мышь',
            image: './images/mouse.jpg',
            audio: './audio/mouse.mp3',
        },
        {
            english: 'turtle',
            russian: 'черепаха',
            image: './images/turtle.jpg',
            audio: './audio/turtle.mp3',
        },
        {
            english: 'dolphin',
            russian: 'дельфин',
            image: './images/dolphin.jpg',
            audio: './audio/dolphin.mp3',
        },
    ],
    [
        {
            english: 'skirt',
            russian: 'юбка',
            image: './images/skirt.jpg',
            audio: './audio/skirt.mp3',
        },
        {
            english: 'pants',
            russian: 'брюки',
            image: './images/pants.jpg',
            audio: './audio/pants.mp3',
        },
        {
            english: 'blouse',
            russian: 'блузка',
            image: './images/blouse.jpg',
            audio: './audio/blouse.mp3',
        },
        {
            english: 'dress',
            russian: 'платье',
            image: './images/dress.jpg',
            audio: './audio/dress.mp3',
        },
        {
            english: 'boot',
            russian: 'ботинок',
            image: './images/boot.jpg',
            audio: './audio/boot.mp3',
        },
        {
            english: 'shirt',
            russian: 'рубашка',
            image: './images/shirt.jpg',
            audio: './audio/shirt.mp3',
        },
        {
            english: 'coat',
            russian: 'пальто',
            image: './images/coat.jpg',
            audio: './audio/coat.mp3',
        },
        {
            english: 'shoe',
            russian: 'туфли',
            image: './images/shoe.jpg',
            audio: './audio/shoe.mp3',
        },
    ],
    [
        {
            english: 'sad',
            russian: 'грустный',
            image: './images/sad.jpg',
            audio: './audio/sad.mp3',
        },
        {
            english: 'angry',
            russian: 'сердитый',
            image: './images/angry.jpg',
            audio: './audio/angry.mp3',
        },
        {
            english: 'happy',
            russian: 'счастливый',
            image: './images/happy.jpg',
            audio: './audio/happy.mp3',
        },
        {
            english: 'tired',
            russian: 'уставший',
            image: './images/tired.jpg',
            audio: './audio/tired.mp3',
        },
        {
            english: 'surprised',
            russian: 'удивлённый',
            image: './images/surprised.jpg',
            audio: './audio/surprised.mp3',
        },
        {
            english: 'scared',
            russian: 'испуганный',
            image: './images/scared.jpg',
            audio: './audio/scared.mp3',
        },
        {
            english: 'smile',
            russian: 'улыбка',
            image: './images/smile.jpg',
            audio: './audio/smile.mp3',
        },
        {
            english: 'laugh',
            russian: 'смех',
            image: './images/laugh.jpg',
            audio: './audio/laugh.mp3',
        },
    ],
    [
        {
            english: 'bread',
            russian: 'хлеб',
            image: './images/bread.jpg',
            audio: './audio/bread.mp3',
        },
        {
            english: 'butter',
            russian: 'масло',
            image: './images/butter.jpg',
            audio: './audio/butter.mp3',
        },
        {
            english: 'cake',
            russian: 'пирожное',
            image: './images/cake.jpg',
            audio: './audio/cake.mp3',
        },
        {
            english: 'cheese',
            russian: 'сыр',
            image: './images/cheese.jpg',
            audio: './audio/cheese.mp3',
        },
        {
            english: 'chocolate',
            russian: 'шоколад',
            image: './images/chocolate.jpg',
            audio: './audio/chocolate.mp3',
        },
        {
            english: 'egg',
            russian: 'яйцо',
            image: './images/egg.jpg',
            audio: './audio/egg.mp3',
        },
        {
            english: 'hamburger',
            russian: 'гамбургер',
            image: './images/hamburger.jpg',
            audio: './audio/hamburger.mp3',
        },
        {
            english: 'milk',
            russian: 'молоко',
            image: './images/milk.jpg',
            audio: './audio/milk.mp3',
        },
    ],
    [
        {
            english: 'apple',
            russian: 'яблоко',
            image: './images/apple.jpg',
            audio: './audio/apple.mp3',
        }, {
            english: 'apricot',
            russian: 'абрикос',
            image: './images/apricot.jpg',
            audio: './audio/apricot.mp3',
        }, {
            english: 'banana',
            russian: 'банан',
            image: './images/banana.jpg',
            audio: './audio/banana.mp3',
        },
        {
            english: 'lemon',
            russian: 'лимон',
            image: './images/lemon.jpg',
            audio: './audio/lemon.mp3',
        },
        {
            english: 'orange',
            russian: 'апельсин',
            image: './images/orange.jpg',
            audio: './audio/orange.mp3',
        },
        {
            english: 'pineapple',
            russian: 'ананас',
            image: './images/pineapple.jpg',
            audio: './audio/pineapple.mp3',
        },
        {
            english: 'plum',
            russian: 'слива',
            image: './images/plum.jpg',
            audio: './audio/plum.mp3',
        },
        {
            english: 'tangerine',
            russian: 'мандарин',
            image: './images/tangerine.jpg',
            audio: './audio/tangerine.mp3',
        },
    ],
    [
        {
            english: 'armchair',
            russian: 'кресло',
            image: './images/armchair.jpg',
            audio: './audio/armchair.mp3',
        },
        {
            english: 'bath',
            russian: 'ванна',
            image: './images/bath.jpg',
            audio: './audio/bath.mp3',
        },
        {
            english: 'chair',
            russian: 'стул',
            image: './images/chair.jpg',
            audio: './audio/chair.mp3',
        },
        {
            english: 'mirror',
            russian: 'зеркало',
            image: './images/mirror.jpg',
            audio: './audio/mirror.mp3',
        },
        {
            english: 'phone',
            russian: 'телефон',
            image: './images/phone.jpg',
            audio: './audio/phone.mp3',
        },
        {
            english: 'pillow',
            russian: 'подушка',
            image: './images/pillow.jpg',
            audio: './audio/pillow.mp3',
        },
        {
            english: 'sofa',
            russian: 'диван',
            image: './images/sofa.jpg',
            audio: './audio/sofa.mp3',
        },
        {
            english: 'table',
            russian: 'стол',
            image: './images/table.jpg',
            audio: './audio/table.mp3',
        },
    ],
    [
        {
            english: 'cloud',
            russian: 'облако',
            image: './images/cloud.jpg',
            audio: './audio/cloud.mp3',
        },
        {
            english: 'forest',
            russian: 'лес',
            image: './images/forest.jpg',
            audio: './audio/forest.mp3',
        },
        {
            english: 'ice',
            russian: 'лёд',
            image: './images/ice.jpg',
            audio: './audio/ice.mp3',
        },
        {
            english: 'rain',
            russian: 'дождь',
            image: './images/rain.jpg',
            audio: './audio/rain.mp3',
        },
        {
            english: 'rainbow',
            russian: 'радуга',
            image: './images/rainbow.jpg',
            audio: './audio/rainbow.mp3',
        },
        {
            english: 'snow',
            russian: 'снег',
            image: './images/snow.jpg',
            audio: './audio/snow.mp3',
        },
        {
            english: 'sun',
            russian: 'солнце',
            image: './images/sun.jpg',
            audio: './audio/sun.mp3',
        },
        {
            english: 'water',
            russian: 'вода',
            image: './images/water.jpg',
            audio: './audio/water.mp3',
        },
    ],
    [
        {
            english: 'airplane',
            russian: 'самолёт',
            image: './images/airplane.jpg',
            audio: './audio/airplane.mp3',
        },
        {
            english: 'bicycle',
            russian: 'велосипед',
            image: './images/bicycle.jpg',
            audio: './audio/bicycle.mp3',
        },
        {
            english: 'boat',
            russian: 'лодка',
            image: './images/boat.jpg',
            audio: './audio/boat.mp3',
        },
        {
            english: 'bus',
            russian: 'автобус',
            image: './images/bus.jpg',
            audio: './audio/bus.mp3',
        },
        {
            english: 'car',
            russian: 'машина',
            image: './images/car.jpg',
            audio: './audio/car.mp3',
        },
        {
            english: 'ship',
            russian: 'корабль',
            image: './images/ship.jpg',
            audio: './audio/ship.mp3',
        },
        {
            english: 'train',
            russian: 'поезд',
            image: './images/train.jpg',
            audio: './audio/train.mp3',
        },
        {
            english: 'tram',
            russian: 'трамвай',
            image: './images/tram.jpg',
            audio: './audio/tram.mp3',
        },
    ],
    [
        {
            english: 'cabbage',
            russian: 'капуста',
            image: './images/cabbage.jpg',
            audio: './audio/cabbage.mp3',
        },
        {
            english: 'carrot',
            russian: 'марковка',
            image: './images/carrot.jpg',
            audio: './audio/carrot.mp3',
        },
        {
            english: 'cucumber',
            russian: 'огурец',
            image: './images/cucumber.jpg',
            audio: './audio/cucumber.mp3',
        },
        {
            english: 'garlic',
            russian: 'чеснок',
            image: './images/garlic.jpg',
            audio: './audio/garlic.mp3',
        },
        {
            english: 'onion',
            russian: 'лук',
            image: './images/onion.jpg',
            audio: './audio/onion.mp3',
        },
        {
            english: 'potato',
            russian: 'картошка',
            image: './images/potato.jpg',
            audio: './audio/potato.mp3',
        },
        {
            english: 'radish',
            russian: 'редиска',
            image: './images/radish.jpg',
            audio: './audio/radish.mp3',
        },
        {
            english: 'tomato',
            russian: 'помидор',
            image: './images/tomato.jpg',
            audio: './audio/tomato.mp3',
        },
    ],
];

export default cards;
