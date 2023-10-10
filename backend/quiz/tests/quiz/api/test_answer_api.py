import pytest
from quiz.tests.factories import AnswerFactory, QuestionFactory

pytestmark = pytest.mark.django_db


def assert_status_code(response, expected_code):
    assert response.status_code == expected_code, f"Expected {expected_code}, but got {response.status_code}"


def assert_data_count(response, expected_length):
    # TODO: change after pagination added
    assert len(
        response.data) == expected_length, f"Expected: {expected_length}, but got {len(response.data)}"

# TODO: make url constants


class TestAnswerList:
    def test_get_all(self, api_client):
        n = 5
        AnswerFactory.create_batch(5)
        response = api_client.get('/api/v0/answers')
        assert_status_code(response, 200)
        assert_data_count(response, n)

    def test_create(self, api_client):
        question = AnswerFactory()
        data = {
            'text': 'test question create',
            'question': question.pk
            }
        response = api_client.post('/api/v0/answers', data)
        assert_status_code(response, 201)
        


class TestAnswerDetail:
    def test_retrieve(self, api_client):
        answer = AnswerFactory()
        expected_json = {
            'id': answer.pk,
            'text': answer.text,
            'is_correct': answer.is_correct,
            'question': answer.question.pk
        }
        response = api_client.get('/api/v0/answers/1')
        assert_status_code(response, 200)
        assert response.data == expected_json

    def test_partial_update(self, api_client):
        answer = AnswerFactory(text="answer update")
        data = {'text': 'test answer'}
        response = api_client.patch('/api/v0/answers/1', data)
        expected_json = {
            'id': answer.pk,
            'text': answer.text,
            'is_correct': answer.is_correct,
            'question': answer.question.pk
        }
        expected_json.update(data)
        assert_status_code(response, 200)
        assert response.data == expected_json
    
    def test_update(self, api_client):
        answer = AnswerFactory(text="answer update")
        data = {
            'text': 'test answer',
            'is_correct': True,
            'question': QuestionFactory().pk
            }
        expected_json = {
            'id': answer.pk,
            'text': answer.text,
            'is_correct': answer.is_correct,
            'question': answer.question.pk
        }
        response = api_client.put('/api/v0/answers/1', data)
        expected_json.update(data)
        assert_status_code(response, 200)
        assert response.data == expected_json

    def test_delete(self, api_client):
        AnswerFactory()
        response = api_client.delete('/api/v0/answers/1')
        assert_status_code(response, 204)
