import { GET_DOGS, 
		 GET_TEMPERAMENTS, 
		 GET_DOGS_BY_NAME, 
		 GET_DOG_DETAIL, 
		 POST_DOG,
		 FILTER_BY_TEMPERAMENT, 
		 FILTER_CREATED,
		 ORDER_BY_NAME, 
		 ORDER_BY_WEIGHT, 
		 CLEAN_FILTERS } from '../assets/constants';


const initialState = {
	dogs: [], 
	dogsfiltered: [],
	detail: [],
    temperaments: [],
}

function rootReducer (state = initialState, action) {
    switch ( action.type ) {

		case GET_DOGS:
			return {
				...state,
				dogs: action.payload,    
				dogsfiltered: action.payload 
			}

		case GET_TEMPERAMENTS:
			return { 
				...state,
				temperaments: action.payload
			}

		case GET_DOGS_BY_NAME:
				return { 
					...state,
					dogs:  action.payload
				}

		case GET_DOG_DETAIL:
			return { 
					...state,
					detail:  action.payload
			}
		case POST_DOG:
			console.log(state)
			return { 
					...state,
			}
		

		case FILTER_BY_TEMPERAMENT:
			
		 const dogsfiltered = state.dogsfiltered;
		 const temperamentsFiltered = dogsfiltered.filter(el => el.temperament?.includes(action.payload));
								
			return {
				...state,
				dogs: temperamentsFiltered
			}

		case FILTER_CREATED:
		 const createdFilter = action.payload === 'Created' ? 
		 					   state.dogsfiltered.filter(el => el.createdInDb) :
		 					   state.dogsfiltered.filter(el => !el.createdInDb);

			return { 
				...state,
				dogs:  createdFilter
			}
		
		case ORDER_BY_NAME:										
			const sortedArr = action.payload === 'asc' ?            
			                        /* Ascendente */              
			                  state.dogs.sort(function(a,b){ 
								if (a.name > b.name) {
									return 1;
								}
								if (a.name < b.name) {
								 return -1;
								}
								return 0;
							  }) :
							      /* Descendente */                
							  state.dogs.sort(function(a,b){ 
								if (a.name > b.name) {
									return -1;
								}
								if (a.name < b.name) {
								 return 1;
								}
								return 0;
							  })
				return { 
					...state,
					dogs: sortedArr
				}

				case ORDER_BY_WEIGHT:										
				const sortedArray = action.payload === '+weight' ?            
										/* + Pesados*/              
								  state.dogs.sort(function(a,b){ 
									if (parseInt(a.weight[0]) > parseInt(b.weight[0])) {
										return 1;
									}
									if (parseInt(a.weight[0]) < parseInt(b.weight[0])) {
									 return -1;
									}
									return 0;
								  }) :
									  /* - Pesados */                
								  state.dogs.sort(function(a,b){ 
									if (parseInt(a.weight[0]) > parseInt(b.weight[0])) {
										return -1;
									}
									if (parseInt(a.weight[0]) < parseInt(b.weight[0])) {
									 return 1;
									}
									return 0;
								  })
					return { 
						...state,
						dogs: sortedArray
					}
				
				case CLEAN_FILTERS:
					return { 
						...state,
						dogs: state.dogsfiltered
					}


		default: {
			return state;
			}
	}
}
export default rootReducer;