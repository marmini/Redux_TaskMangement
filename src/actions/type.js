
export const addTask = (data) => ({ type: 'ADD_TASK', data})
export const saveTask = (data,index) => ({ type: 'SAVE_TASK', data, index})
export const deleteTask = (index) => ({ type: 'DELETE_TASK', index})
export const editTask = (data) => ({ type: 'EDIT_VALUE', data})
export const editInputTask = (data) => ({ type: 'INPUT_CHANGE', data})
