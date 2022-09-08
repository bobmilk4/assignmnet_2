Vue.component('component1', {
    template: '<div>{{ message }}</div>',
    data: function(){
        return {
            message: 'This is component 1',
        };
    },
});
Vue.component('component2', {
    template: '<div>This is component 2</div>',
});

Vue.component('global', {
    template: '<div>this is global</div>',
});

var component1 = {
    template: '<div><global></global>This is component 1</div>',
}
var component2 = {
    template: '<div><component1></component1> This is component 2</div>',
    components:{
        component1,
    },
}



var app = new Vue({
 el: '#app',
 data: {
    text: 'hello vue',
 },
 components: {
    component1,
    component2,
 },
});