import { FETCH_CHARACTERS, FETCH_FILMS, FETCH_PLANETS, FETCH_SPECIES, FETCH_STARSHIPS, FETCH_VEHICLES } from './categoryType'

export const charactersReducer = (state = { characters: [] }, action) => {
    switch (action.type) {
        case FETCH_CHARACTERS:
            return {
                ...state,
                characters: action.payload,
            }
        default:
            return state
    }
} 

export const filmsReducer = (state = { films: [] }, action) => {
    switch (action.type) {
        case FETCH_FILMS:
            return {
                ...state,
               films: action.payload,
            }
        default:
            return state
    }
} 

export const planetsReducer = (state = { planets: [] }, action) => {
    switch (action.type) {
        case FETCH_PLANETS:
            return {
                ...state,
                planets: action.payload,
            }
        default:
            return state
    }
}

export const speciesReducer = (state = { species: [] }, action) => {
    switch (action.type) {
        case FETCH_SPECIES:
            return {
                ...state,
                species: action.payload,
            }
        default:
            return state
    }
}

export const starshipsReducer = (state = { starships: [] }, action) => {
    switch (action.type) {
        case FETCH_STARSHIPS:
            return {
                ...state,
                starships: action.payload,
            }
        default:
            return state
    }
}

export const vehiclesReducer = (state = { vehicles: [] }, action) => {
    switch (action.type) {
        case FETCH_VEHICLES:
            return {
                ...state,
                vehicles: action.payload,
            }
        default:
            return state
    }
}

