import React, { useState } from 'react'
import herosDb from '../db/herosDB'

const getHerosByPublisher = (publisher) => {

  const validate  = ['DC Comics','Marvel Comics'];
  if (!validate.includes(publisher)) {
    throw new console.error('error   de consulta');
  }
  
  return herosDb.filter(hero=> hero.publisher===publisher);
}

export default getHerosByPublisher