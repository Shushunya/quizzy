import pytest
from quiz.serializers import QuizSerializer, QuestionSerializer
from quiz.models import Quiz
from quiz.tests.factories import QuizFactory

pytestmark = pytest.mark.django_db


# class Fruit:
#     def __init__(self, name):
#         self.name = name

#     def __eq__(self, other):
#         return self.name == other.name


# @pytest.fixture
# def my_fruit():
#     return Fruit("apple")


# @pytest.fixture
# def fruit_basket(my_fruit):
#     return [Fruit("banana"), my_fruit]


# def test_my_fruit_in_basket(my_fruit, fruit_basket):
#     assert my_fruit in fruit_basket

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
