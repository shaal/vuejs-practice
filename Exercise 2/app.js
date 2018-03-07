window.onload = function () {

    new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
            alertButtonClicked: function () {
                alert('Button just got clicked!');
            },
            saveInputValue: function () {
                this.value = event.target.value;
            }
        }
    });
}