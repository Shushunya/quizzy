import pytest
from django.core.exceptions import ObjectDoesNotExist
from ...models import Quiz

pytestmark = pytest.mark.django_db


class TestQuizModel:
    def test_quiz_create_and_read(self, quiz_factory):
        quiz = quiz_factory(title="test")
        assert isinstance(quiz, Quiz)
        assert Quiz.objects.get(title="test") == quiz
        assert quiz_factory(title="test") == quiz
    
    def test_quiz_update(self, quiz_factory):
        quiz = quiz_factory(title="test")
        quiz.title = "new title"
        quiz.save()
        assert quiz.title == "new title"
    
    def test_quiz_delete(self, quiz_factory):
        quiz = quiz_factory(title="del")
        quiz.delete()
        with pytest.raises(ObjectDoesNotExist):
            Quiz.objects.get(title="del")

    def test_string_representation(self, quiz_factory):
        quiz = quiz_factory(title="string")
        assert str(quiz) == quiz.title
    
    def test_verbose_name_plural(self):
        assert str(Quiz._meta.verbose_name_plural) == "quizzes"