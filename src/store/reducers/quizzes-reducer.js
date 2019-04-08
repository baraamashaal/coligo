import { QuizzesActionsTypes } from '../actions/quizzes-actions';
const initialState = {
  quizzes: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case QuizzesActionsTypes.set:
      return {
        quizzes: action.quizzes
      };

    default:
      return state;
  }
};


