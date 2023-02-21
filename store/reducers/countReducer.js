const initialState = {
    count: 15,
  };
   
  export default (state = initialState, action) => {
    
      switch (action.type) {
        case 'COUNT_INCREASE':
          return {
            ...state,
            count: (state.count<90)? state.count + 5:state.count, // A maximum of 90 sec is accepeted
          };
        case 'COUNT_DECREASE':
          return {
            ...state,
            count: (state.count>15)? state.count - 5:state.count, // so no negative value is accepted
          };
        
        default:
          return state;
      }

   
    
  };