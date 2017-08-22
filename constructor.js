var details = (function () {
    function details(name, age) {
        this.name = name;
        this.age = age;
    }
    details.prototype.person = function () {
        document.write("*******<br><br>");
        document.write("--- Your name is: " + this.name + "---<br><br>");
        document.write("*******<br><br>");
        document.write("--- Your age is: " + this.age + "---");
    };
    return details;
}());
var detailObj = new details("gurpreet", 20);
