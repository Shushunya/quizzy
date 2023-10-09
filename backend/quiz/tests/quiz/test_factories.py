import pytest
from ..factories import QuizFactory

pytestmark = pytest.mark.django_db

class TestQuizFactory:
    def test_quiz_factory(self, quiz_factory):
        assert quiz_factory is QuizFactory

    def test_quiz_factory_fixtures(self, quiz_factory):
        quiz = quiz_factory()
        assert quiz.title
