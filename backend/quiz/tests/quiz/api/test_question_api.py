import pytest
from quiz.tests.factories import QuizFactory, QuestionFactory


pytestmark = pytest.mark.django_db


def assert_status_code(response, expected_code):
    assert response.status_code == expected_code, f"Expected {expected_code}, but got {response.status_code}"


def assert_data_count(response, expected_length):
    # TODO: change after pagination added
    assert len(
        response.data) == expected_length, f"Expected: {expected_length}, but got {len(response.data)}"

# TODO: make url constants


class TestQuestionList:
    def test_get_all(self, api_client):
        n = 5
        QuestionFactory.create_batch(5)
        response = api_client.get('/api/v0/questions')
        assert_status_code(response, 200)
        assert_data_count(response, n)

    def test_create(self, api_client):
        quiz = QuizFactory()
        data = {
            'text': 'test question create',
            'quiz': quiz.pk
            }
        response = api_client.post('/api/v0/questions', data)
        assert_status_code(response, 201)
        


class TestQuestionDetail:
    def test_retrieve(self, api_client):
        question = QuestionFactory()
        expected_json = {
            'id': question.pk,
            'text': question.text,
            'quiz': question.quiz.pk
        }
        response = api_client.get('/api/v0/questions/1')
        assert_status_code(response, 200)
        assert response.data == expected_json

    def test_partial_update(self, api_client):
        question = QuestionFactory(text="question update")
        data = {'text': 'test question'}
        response = api_client.patch('/api/v0/questions/1', data)
        expected_json = {
            'id': question.pk,
            'text': question.text,
            'quiz': question.quiz.pk
        }
        expected_json.update(data)
        assert_status_code(response, 200)
        assert response.data == expected_json
    
    def test_update(self, api_client):
        question = QuestionFactory(text="question update")
        data = {
            'text': 'test question',
            'quiz': QuizFactory().pk
                }
        response = api_client.put('/api/v0/questions/1', data)
        expected_json = {
            'id': question.pk,
            'text': question.text,
            'quiz': question.quiz.pk
        }
        expected_json.update(data)
        assert_status_code(response, 200)
        assert response.data == expected_json

    def test_delete(self, api_client):
        question = QuestionFactory()
        response = api_client.delete('/api/v0/questions/1')
        assert_status_code(response, 204)
