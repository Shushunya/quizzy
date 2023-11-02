from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from .serializers import QuizSerializer, QuestionSerializer, AnswerSerializer, QuizListSerializer, QuizCreateSerializer
from .models import Quiz, Question, Answer
# Create your views here.


class QuizList(ListCreateAPIView):
    serializer_class = QuizSerializer
    queryset = Quiz.objects.all()

    def get_serializer_class(self):
        if self.request.method == "GET":
            return QuizListSerializer
        elif self.request.method == "POST":
            return QuizCreateSerializer


class QuizDetail(RetrieveUpdateDestroyAPIView):
    serializer_class = QuizSerializer
    queryset = Quiz.objects.all()


class QuestionList(ListCreateAPIView):
    serializer_class = QuestionSerializer
    queryset = Question.objects.all()


class QuestionDetail(RetrieveUpdateDestroyAPIView):
    serializer_class = QuestionSerializer
    queryset = Question.objects.all()


class AnswerList(ListCreateAPIView):
    serializer_class = AnswerSerializer
    queryset = Answer.objects.all()


class AnswerDetail(RetrieveUpdateDestroyAPIView):
    serializer_class = AnswerSerializer
    queryset = Answer.objects.all()
