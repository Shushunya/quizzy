import pytest
from quiz.tests.factories import QuizFactory


pytestmark = pytest.mark.django_db


def assert_status_code(response, expected_code):
    assert response.status_code == expected_code, f"Expected {expected_code}, but got {response.status_code}"


def assert_data_count(response, expected_length):
    # TODO: change after pagination added
    assert len(
        response.data) == expected_length, f"Expected: {expected_length}, but got {len(response.data)}"

# TODO: make url constants


class TestQuizList:
    def test_get_all(self, api_client):
        n = 5
        QuizFactory.create_batch(n)
        response = api_client.get('/api/v0/quizzes')
        assert_status_code(response, 200)
        assert_data_count(response, n)

    def test_create(self, api_client):
        data = {'title': 'test quiz create'}
        response = api_client.post('/api/v0/quizzes', data)
        assert_status_code(response, 201)


class TestQuizDetail:
    def test_retrieve(self, api_client):
        quiz = QuizFactory(title="quiz retrieve")
        expected_json = {
            'id': quiz.pk,
            'title': quiz.title
        }
        response = api_client.get('/api/v0/quizzes/1')
        assert_status_code(response, 200)
        assert response.data == expected_json

    def test_update(self, api_client):
        quiz = QuizFactory(title="quiz update")
        data = {'title': 'test quiz'}
        response = api_client.put('/api/v0/quizzes/1', data)
        expected_json = {
            'id': quiz.pk,
            'title': quiz.title
        }
        expected_json.update(data)
        assert_status_code(response, 200)
        assert response.data['title'] == data['title']
        assert response.data == expected_json

    def test_delete(self, api_client):
        quiz = QuizFactory()
        response = api_client.delete('/api/v0/quizzes/1')
        assert_status_code(response, 204)
