import pytest
from quiz.serializers import AnswerSerializer
from quiz.tests.factories import QuestionFactory, AnswerFactory


pytestmark = pytest.mark.django_db


@pytest.fixture
def question():
    return QuestionFactory()


@pytest.fixture
def answer_attrs(question):
    return {
        'text': "Default Answer Text",
        'is_correct': False,
        'question': question
    }


@pytest.fixture
def answer(answer_attrs):
    return AnswerFactory(**answer_attrs)


@pytest.fixture
def serializer(answer):
    return AnswerSerializer(instance=answer)


class TestAnswerSerializer:

    def test_contains_expected_fields(self, serializer):
        self.expected_keys = ['id', 'text', 'is_correct', 'question']
        data = serializer.data
        assert set(data.keys()) == set(self.expected_keys)

    def test_text_field_content(self, answer_attrs, serializer):
        data = serializer.data
        assert data['text'] == answer_attrs['text']

    def test_question_field_content(self, answer_attrs, serializer):
        data = serializer.data
        assert data['question'] == answer_attrs['question'].pk
