import herosDb from '../db/herosDB'
const getHerosBySuperhero = (id) => {
  return herosDb.find(hero=> hero.id===id);
}

export default getHerosBySuperhero