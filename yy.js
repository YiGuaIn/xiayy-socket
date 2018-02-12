this.name = "windowsName";
var a = {
    name : null,
    fn : function () {
        console.log(module.exports); 
    }
}

var f = a.fn;
f();
console.log(this.name)