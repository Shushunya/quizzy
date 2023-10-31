export function QuizResults({ results }) {
  const { score, correctAnswers, wrongAnswers } = results;
  return (
    <div>
      <p>You finished the quiz!</p>
      <p>You score: {score}</p>
      <p>Correct answers: {correctAnswers} </p>
      <p>Wrong answers: {wrongAnswers}</p>
    </div>
  );
}
