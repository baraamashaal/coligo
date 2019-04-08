import React from 'react';
import List from '@material-ui/core/List';
import { connect } from 'react-redux';
import Quiz from '../components/quiz/quiz';
import { initQuizzes } from '../store/actions/quizzes-actions';
const Quizzes = props => {
  return (
    <List>
      {props.quizzes.map(quiz => (
        <Quiz key={quiz.id} title={quiz.title} info={quiz.info} />
      ))}
      <div onClick={props.initQuizzes}>click meeeeeeee </div>
    </List>
  );
};

Quizzes.propTypes = {};

const mapStateToProps = state => ({
  quizzes: state.qiz.quizzes
});
const mapDispatchToProps = {
  initQuizzes
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Quizzes);
