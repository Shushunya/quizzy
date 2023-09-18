from django.urls import path
from .views import QuizList, QuizDetail, QuestionList, QuestionDetail, AnswerList, AnswerDetail

app_name = "quizzes"

urlpatterns = [
    path("quizzes", QuizList.as_view(), name="quiz-list"),
    path("quizzes/<int:pk>", QuizDetail.as_view(), name="quiz-detail"),
    path("questions", QuestionList.as_view(), name="question-list"),
    path("questions/<int:pk>", QuestionDetail.as_view(), name="question-detail"),
    path("answers", AnswerList.as_view(), name="answer-list"),
    path("answers/<int:pk>", AnswerDetail.as_view(), name="answer-detail"),

]
