const initialState = {
  users: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return { ...state, users: [...state.users, action.payload] };
    case "DELETE_USER":
      const filterUser = state.users.filter((user) => {
        return user.id !== action.payload;
      });
      return { ...state, users: filterUser };
    case "EDIT_USER":
      const updateUser = state.users.map((user) => {
        if (user.id === action.payload.userId) {
          return action.payload.updateUser
        }
        return user
      })
      return {...state, users: updateUser}
      case "GET_ALL_USERS":
        return {users: action.payload}
       
    default:
      return state;
  }
};

export default usersReducer;
