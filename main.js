window.onload = function () {
    var app = new Vue({
        el: '#container',
        data: {
            cats: [
                {
                    "name": "Симона",
                    "description": "Ищет надежных хозяев. ",
                    "img": "assets/1.jpg",
                    "breed": "неизвестно",
                    "age": "6 месяцев",
                    "color": "бежевый",
                    "likes": 33
                },
                {
                    "name": "Зита",
                    "description": "Скромная трехцветка ищет дом. ",
                    "img": "assets/2.jpg",
                    "breed": "неизвестно",
                    "age": "6 месяцев",
                    "color": "трехцветный",
                    "likes": 33
                },
                {
                    "name": "Ганс",
                    "description": "Будет приносить удачу своему хозяину)",
                    "img": "assets/3.jpg",
                    "breed": "неизвестно",
                    "age": "6 месяцев",
                    "color": "бело-бежевый",
                    "likes": 33
                },
                {
                    "name": "Нильсин",
                    "description": "Воспитанная умница, очень общительная.",
                    "img": "assets/4.jpg",
                    "breed": "неизвестно",
                    "age": "3 месяца",
                    "color": "трехцветный",
                    "likes": 33
                },
                {
                    "name": "Лила",
                    "description": "Воспитанная и ласковая",
                    "img": "assets/5.jpg",
                    "breed": "неизвестно",
                    "age": "3 месяца",
                    "color": "трехцветный",
                    "likes": 33
                },
                {
                    "name": "Хлоя",
                    "description": "Невероятно ласковая и добрая",
                    "img": "assets/6.jpg",
                    "breed": "неизвестно",
                    "age": "6 месяцев",
                    "color": "трехцветный",
                    "likes": 33
                },
                {
                    "name": "Мия",
                    "description": "Нежная Мия в добрые руки на счастье в Ваш дом.",
                    "img": "assets/7.jpg",
                    "breed": "неизвестно",
                    "age": "6 месяцев",
                    "color": "трехцветный",
                    "likes": 33
                },
                {
                    "name": "Ханни",
                    "description": "Немножко скромная, но ласковая и игривая молодая кошка.",
                    "img": "assets/8.jpg",
                    "breed": "неизвестно",
                    "age": "6 месяцев",
                    "color": "черный",
                    "likes": 33
                },
                {
                    "name": "Фредди",
                    "description": "Красавец и добряк! Молодой котик. ",
                    "img": "assets/9.jpg",
                    "breed": "неизвестно",
                    "age": "6 месяцев",
                    "color": "черный",
                    "likes": 33
                },
                {
                    "name": "Симона",
                    "description": "Ищет надежных хозяев. ",
                    "img": "assets/1.jpg",
                    "breed": "неизвестно",
                    "age": "6 месяцев",
                    "color": "бежевый",
                    "likes": 33
                },
                {
                    "name": "Зита",
                    "description": "Скромная трехцветка ищет дом. ",
                    "img": "assets/2.jpg",
                    "breed": "неизвестно",
                    "age": "6 месяцев",
                    "color": "трехцветный",
                    "likes": 33
                },
                {
                    "name": "Ганс",
                    "description": "Будет приносить удачу своему хозяину)",
                    "img": "assets/3.jpg",
                    "breed": "неизвестно",
                    "age": "6 месяцев",
                    "color": "бело-бежевый",
                    "likes": 33
                },
                {
                    "name": "Нильсин",
                    "description": "Воспитанная умница, очень общительная и нежная.",
                    "img": "assets/4.jpg",
                    "breed": "неизвестно",
                    "age": "3 месяца",
                    "color": "трехцветный",
                    "likes": 33
                },
                {
                    "name": "Лила",
                    "description": "Воспитанная и ласковая",
                    "img": "assets/5.jpg",
                    "breed": "неизвестно",
                    "age": "3 месяца",
                    "color": "трехцветный",
                    "likes": 33
                },
                {
                    "name": "Хлоя",
                    "description": "Невероятно ласковая и добрая",
                    "img": "assets/6.jpg",
                    "breed": "неизвестно",
                    "age": "6 месяцев",
                    "color": "трехцветный",
                    "likes": 33
                },
                {
                    "name": "Мия",
                    "description": "Нежная Мия в добрые руки на счастье в Ваш дом.",
                    "img": "assets/7.jpg",
                    "breed": "неизвестно",
                    "age": "6 месяцев",
                    "color": "трехцветный",
                    "likes": 33
                },
                {
                    "name": "Ханни",
                    "description": "Немножко скромная, но ласковая и игривая молодая кошка.",
                    "img": "assets/8.jpg",
                    "breed": "неизвестно",
                    "age": "6 месяцев",
                    "color": "черный",
                    "likes": 33
                },
                {
                    "name": "Фредди",
                    "description": "Красавец и добряк! Молодой котик. ",
                    "img": "assets/9.jpg",
                    "breed": "неизвестно",
                    "age": "6 месяцев",
                    "color": "черный",
                    "likes": 33
                },


            ]
        }
    })
};

function openMenu() {
    document.getElementById("menu").style.width = "250px";
};

/* Set the width of the side navigation to 0 */
function closeMenu() {
    document.getElementById("menu").style.width = "0";
};


new Vue({
  el: '#container'
});
