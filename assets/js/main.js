console.log('first')

const person = {
    name: 'Kat Klee',
    age: 35,
    sagNameAge: function () {
        // Output with alert is just an only string
        alert(person.name + ', ' + person.age)
        console.log(person.name, person.age)
    }
}

// Calling the function
person.sagNameAge()