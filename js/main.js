require.config({
    paths: {
        j1:"js1"
    },

    baseUrl:"js"
});
require(["j1"],function(){
    alert(0);
});