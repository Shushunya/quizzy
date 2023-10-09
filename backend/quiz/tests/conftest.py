from pytest_factoryboy import register

from .factories import QuizFactory, QuestionFactory, AnswerFactory

register(QuizFactory)
register(QuestionFactory)
register(AnswerFactory)
