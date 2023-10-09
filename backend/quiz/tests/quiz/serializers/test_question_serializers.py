import pytest
from quiz.serializers import QuestionSerializer
from quiz.tests.factories import QuestionFactory

pytestmark = pytest.mark.django_db

@pytest.fixture
def question_attrs():
    return {
        'text': "Default Question Text"
    }


@pytest.fixture
def question(question_attrs):
    return QuestionFactory(**question_attrs)


@pytest.fixture
def serializer(question):
    return QuestionSerializer(instance=question)

# TODO: add tests for quiz field 
class TestQuestionSerializer:

    def test_contains_expected_fields(self, serializer):
        self.expected_keys = ['id', 'text', 'quiz']
        data = serializer.data
        assert set(data.keys()) == set(self.expected_keys)

    def test_text_field_content(self, question_attrs, serializer):
        data = serializer.data
        assert data['text'] == question_attrs['text']    
