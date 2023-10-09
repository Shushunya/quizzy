import pytest
from ..factories import QuizFactory, QuestionFactory, AnswerFactory

pytestmark = pytest.mark.django_db

class TestQuizFactory:
    def test_factory(self, quiz_factory):
        assert quiz_factory is QuizFactory

    def test_factory_fixtures(self, quiz_factory):
        quiz = quiz_factory()
        assert quiz.title


class TestQuestionFactory:
    def test_factory(self, question_factory):
        assert question_factory is QuestionFactory

    def test_factory_fixtures(self, question_factory):
        question = question_factory()
        assert question.text
        assert question.quiz


class TestAnswerFactory:
    def test_factory(self, answer_factory):
        assert answer_factory is AnswerFactory

    def test_factory_fixtures(self, answer_factory):
        answer = answer_factory()
        assert answer.text
        assert answer.is_correct is False
        assert answer.question
        assert answer.question.text
        assert answer.question.quiz
        assert answer.question.quiz.title
