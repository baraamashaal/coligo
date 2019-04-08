import axios from 'axios';
import firestore from '../../firestore';

export const QuizzesActionsTypes = {
  set: 'SET_QUIZZES'
};

export const setQuizzes = quizzes => ({
  type: QuizzesActionsTypes.set,
  quizzes
});

export const initQuizzess = () => dispatch => {
  firestore.firestore().collection('quizzes');
};

export const initQuizzes = () => {
  const db = firestore.firestore();
  return dispatch => {
    db.collection('quizzes')
      .get()
      .then(res => {
        let quizzes = res.docs.map(doc => ({
          ...doc.data(),
          id: doc.id
        }));
        dispatch(setQuizzes(quizzes));
        console.log(quizzes);
        
      });
  };
};

// export const toggleSidenav = () => dispatch => {
//   setTimeout(() => {
//     dispatch(togglesSidenav());
//   }, 2000);
// }
