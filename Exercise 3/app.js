window.onload = function () {

    new Vue({
        el: '#exercise',
        data: {
            value: 0
        },
        computed: {
            result: function () {
                return this.value ==20 ? 'not there yet' : 'DONE' ;
            }
        },
        watch: {
            result: function(value) {
                var vm = this;
                setTimeout(function() {
                    vm.value = 0;
                }, 2000)
            }
        }
    });
}