import heroes, { owner } from "../data/hero";

const findHeroForID = (id) => {
    return heroes.find((hero) => hero.id === id)
};

const findHeroForOwner = ( owner ) => {
	return heroes.filter( (hero) => hero.owner === owner )
}

console.log(findHeroForID(2));
console.log(findHeroForOwner(owner));
