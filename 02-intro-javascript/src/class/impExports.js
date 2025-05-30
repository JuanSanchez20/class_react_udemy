import heroes, { owner } from "../data/hero";

export const findHeroForID = (id) => {
    return heroes.find((hero) => hero.id === id)
};

export const findHeroForOwner = ( owner ) => {
	return heroes.filter( (hero) => hero.owner === owner )
}

// console.log(findHeroForID(2));
// console.log(findHeroForOwner(owner));
