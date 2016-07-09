function Person(fname, lname) {
    this.firstname = fname;
    this.lastname = lname;
}

//prototype
Person.prototype.greet = function() {
    console.log ('Hello, ' + this.firstname + ' ' + this.lastname)
}

var chris = new Person ("Chris", "Z");
console.log(chris.firstname +' '+ chris.lastname);

var bob = new Person ("Bob", "L")
// calling a prototype function
chris.greet()
bob.greet()

console.log(chris.__proto__)
console.log(bob.__proto__)
console.log(chris.__proto__===bob.__proto__)
