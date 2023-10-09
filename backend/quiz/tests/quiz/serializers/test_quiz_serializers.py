import pytest
from quiz.serializers import QuizSerializer
from quiz.tests.factories import QuizFactory

pytestmark = pytest.mark.django_db

@pytest.fixture
def quiz_attrs():
    return {
        'title': "Default Quiz Title"
    }


@pytest.fixture
def quiz(quiz_attrs):
    return QuizFactory(**quiz_attrs)


@pytest.fixture
def serializer(quiz):
    return QuizSerializer(instance=quiz)


class TestQuizSerializer:

    def test_contains_expected_fields(self, serializer):
        self.expected_keys = ['id', 'title']
        data = serializer.data
        assert set(data.keys()) == set(self.expected_keys)

    def test_title_field_content(self, quiz_attrs, serializer):
        data = serializer.data
        assert data['title'] == quiz_attrs['title']
