window.onload = function () {

    new Vue({
        el: '#exercise',
        data: {
            name: 'Ofer Shaal',
            age: 40,
            imageLink: 'https://i.ytimg.com/vi/kJ2dr9jAThY/maxresdefault.jpg'
        },
        methods: {
            changeAge: function () {
                return this.age * 3;
            },
            randomNumber: function () {
                return Math.random();
            },
            changeGreeting: function () {
                return this.name;
            }
        }
    });
}