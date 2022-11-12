import { FETCH_CHARACTERS, FETCH_FILMS, FETCH_PLANETS, FETCH_SPECIES, FETCH_STARSHIPS, FETCH_VEHICLES } from './categoryType'

export const fetchCharacters = (data) => {
    return {
        type: FETCH_CHARACTERS,
        payload: data
    }
}

export const fetchFilms = (data) => {
    return {
        type: FETCH_FILMS,
        payload: data
    }
}

export const fetchPlanets = (data) => {
    return {
        type: FETCH_PLANETS,
        payload: data
    }
}

export const fetchSpecies = (data) => {
    return {
        type: FETCH_SPECIES,
        payload: data
    }
}

export const fetchStarships = (data) => {
    return {
        type: FETCH_STARSHIPS,
        payload: data
    }
}

export const fetchVehicles = (data) => {
    return {
        type: FETCH_VEHICLES,
        payload: data
    }
}