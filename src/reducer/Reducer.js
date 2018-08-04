const initialState = []

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK': {
      return state.concat([action.data]);
    }
    case 'SAVE_TASK': {
      const index = action.index 
      state[index].project = action.data.project
      state[index].task = action.data.task
      state[index].hour = action.data.hour
      state[index].type = action.data.type
      return new Array(...state) ;
    }
    case 'DELETE_TASK': {
      console.log(action.index,state)
      return state.filter((post) => post.key !== action.index);
    }
    case 'EDIT_VALUE': {
      const index = action.data.i
      if(action.data.change==='proj')
      state[index].project = action.data.value
      else if(action.data.change==='type')
      state[index].type = action.data.value
     
      return new Array(...state) ;
    }
    case 'INPUT_CHANGE': {
      const index = action.data.index
      if(action.data.change === 'task')
      state[index].task = action.data.changevalue
      if(action.data.change === 'hour')
      state[index].hour = action.data.changevalue
      return new Array(...state) ;
    }
    default:
      return state;
  }

}

export default Reducer;