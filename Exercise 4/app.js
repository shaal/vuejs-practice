window.onload = function () {

    new Vue({
        el: '#exercise',
        data: {
            effectClass: 'hello'
        },
        watch: {
            effectClass: function() {
                setTimeout(function () {
                    return this.startEffect();
                },500)
            }
        },

        methods: {
            startEffect: function() {
                if (this.effectClass == 'highlight') {
                    this.effectClass = 'shrink';
                } else {
                    this.effectClass = 'highlight';
                }
            },
            startProgress: function () {
                
            }
        }
    });
}