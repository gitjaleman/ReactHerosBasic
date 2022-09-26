import herosDb from '../db/herosDB'

const getHerosByName = (name = '') => { 
  name = name.toString();
  name = name.toLocaleLowerCase().trim();
  if (name.length===0) { return [];}
  return herosDb.filter(
    hero=> hero.superhero.toLocaleLowerCase().includes(name)
  );
  
}

export default getHerosByName