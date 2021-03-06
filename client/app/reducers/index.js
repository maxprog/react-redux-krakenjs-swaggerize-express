import * as ACTIONS from '../constants/actiontypes';
import { combineReducers } from 'redux';

const rootReducer = (state = { pets: [], pet: {} }, action) => {
    switch (action.type) {
        case ACTIONS.FIND_ALL_PETS:
            return {
                ...state,
                pets: action.pets
            };
        case ACTIONS.FIND_PET_BY_ID:
        case ACTIONS.ADD_PET:
        case ACTIONS.ADD_NEW_PET:
            return {
                ...state,
                pet: action.pet
            };
        case ACTIONS.ADD_TO_CART:
        case ACTIONS.REMOVE_FROM_CART:
            let newState = ({
                ...state
            });
            newState.pets = newState.pets.map(pet => {
                if (pet.id === action.id) {
                    pet.cartText = action.cartText;
                    pet.cartAction = action.type
                }
                return pet
            });
            return newState
        case ACTIONS.FIND_PETS_FROM_CART:
            return {
                pets: action.pets
            };
        case ACTIONS.CLEAR_FROM_CART:
            let clearCartState = ({
                ...state
            });
            clearCartState.pets = clearCartState.pets.filter(pet => pet.id !== action.id);
            return clearCartState;
        default:
            return state;
    }
}

export default rootReducer
