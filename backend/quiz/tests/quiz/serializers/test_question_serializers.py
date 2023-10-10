import pytest
from quiz.serializers import QuestionSerializer
from quiz.tests.factories import QuestionFactory, QuizFactory

pytestmark = pytest.mark.django_db


@pytest.fixture
def quiz():
    return QuizFactory()


@pytest.fixture
def question_attrs(quiz):
    return {
        'text': "Default Question Text",
        'quiz': quiz
    }


@pytest.fixture
def question(question_attrs):
    return QuestionFactory(**question_attrs)


@pytest.fixture
def serializer(question):
    return QuestionSerializer(instance=question)


class TestQuestionSerializer:

    def test_contains_expected_fields(self, serializer):
        self.expected_keys = ['id', 'text', 'quiz']
        data = serializer.data
        assert set(data.keys()) == set(self.expected_keys)

    def test_text_field_content(self, question_attrs, serializer):
        data = serializer.data
        assert data['text'] == question_attrs['text']

    def test_quiz_field_content(self, question_attrs, serializer):
        data = serializer.data
        assert data['quiz'] == question_attrs['quiz'].pk
