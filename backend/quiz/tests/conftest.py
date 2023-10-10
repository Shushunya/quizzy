import pytest
from pytest_factoryboy import register

from .factories import QuizFactory, QuestionFactory, AnswerFactory

register(QuizFactory)
register(QuestionFactory)
register(AnswerFactory)

@pytest.fixture
def api_client():
   from rest_framework.test import APIClient
   return APIClient()
