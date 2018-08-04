
export const addTask = (data) => ({ type: 'ADD_TASK', data})
export const saveTask = (data,index) => ({ type: 'SAVE_TASK', data, index})
export const deleteTask = (key) => ({ type: 'DELETE_TASK', key})
export const editTask = (data) => ({ type: 'EDIT_VALUE', data})
export const editInputTask = (data) => ({ type: 'INPUT_CHANGE', data})
