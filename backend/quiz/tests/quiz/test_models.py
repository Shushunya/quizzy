import pytest
from django.core.exceptions import ObjectDoesNotExist
from ...models import Quiz, Question, Answer

pytestmark = pytest.mark.django_db


class TestQuizModel:
    def test_create_and_read(self, quiz_factory):
        quiz = quiz_factory(title="test")
        assert isinstance(quiz, Quiz)
        assert Quiz.objects.get(title="test") == quiz
        assert quiz_factory(title="test") == quiz

    def test_update(self, quiz_factory):
        quiz = quiz_factory(title="test")
        quiz.title = "new title"
        quiz.save()
        assert quiz.title == "new title"

    def test_delete(self, quiz_factory):
        quiz = quiz_factory(title="del")
        quiz.delete()
        with pytest.raises(ObjectDoesNotExist):
            Quiz.objects.get(title="del")

    def test_string_representation(self, quiz_factory):
        quiz = quiz_factory(title="string")
        assert str(quiz) == quiz.title

    def test_verbose_name_plural(self):
        assert str(Quiz._meta.verbose_name_plural) == "quizzes"


class TestQuestionModel:
    def test_create_and_read(self, question_factory):
        question = question_factory(text="test")
        assert isinstance(question, Question)
        assert Question.objects.get(text="test") == question
        assert question_factory(text="test") == question

    def test_update(self, question_factory):
        question = question_factory(text="test")
        question.text = "new title"
        question.save()
        assert question.text == "new title"

    def test_delete(self, question_factory):
        question = question_factory(text="del")
        question.delete()
        with pytest.raises(ObjectDoesNotExist):
            Question.objects.get(text="del")

    def test_string_representation(self, question_factory):
        question = question_factory(text="string")
        assert str(question) == question.text


class TestAnswerModel:
    def test_create_and_read(self, answer_factory):
        answer = answer_factory(text="test")
        assert isinstance(answer, Answer)
        assert Answer.objects.get(text="test") == answer
        assert answer_factory(text="test") == answer

    def test_update(self, answer_factory):
        answer = answer_factory(text="test")
        answer.text = "new title"
        answer.save()
        assert answer.text == "new title"

    def test_delete(self, answer_factory):
        answer = answer_factory(text="del")
        answer.delete()
        with pytest.raises(ObjectDoesNotExist):
            Answer.objects.get(text="del")

    def test_string_representation(self, answer_factory):
        answer = answer_factory(text="string")
        assert str(answer) == answer.text
