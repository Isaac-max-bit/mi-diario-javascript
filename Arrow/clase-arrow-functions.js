const greeting = function (name){
    return `Hi, ${name}`
}

const newGreeting = (name) =>{
    return `Hi, ${name}`
}

// Arrow function - implicit return

const newGreetingImplicit = name => `Hi, ${name}`
const newGreetingImplicitWithTwoParameters = (name, lastname) => `Hi, I'm  ${name} ${lastname}`

// Lexical Binding 

const finctionalCharacter = {
    name: 'Joel Miller',
    messageWithTraditionalFunction: function (message){
        console.log(`${this.name} says: ${message}`)
    },
    messageWithArrowFunction: (message) => {
        console.log(`${this.name} says: ${message}`)
    }
}

finctionalCharacter.messageWithTraditionalFunction('You have no idea what loss is.')
finctionalCharacter.messageWithArrowFunction('Everything happens for a reason.')