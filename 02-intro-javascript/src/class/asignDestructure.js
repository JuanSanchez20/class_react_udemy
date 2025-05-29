const persona = {
    name: 'Juan',
    age: 21,
    country: 'Spain'
};

const userContext = ({name, age, country}) => {
    return {name, age, country};
}

const {name, age} = userContext(persona);

console.log(name, age);
