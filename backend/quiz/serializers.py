from rest_framework import serializers
from .models import Quiz, Question, Answer


class QuizSerializer(serializers.ModelSerializer):
    # TODO: split into list and detail serializer later
    class Meta:
        model = Quiz
        fields = "__all__"

class QuizCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Quiz
        fields = "__all__"

class QuizListSerializer(serializers.ModelSerializer):
    questions_amount = serializers.IntegerField()
    class Meta:
        model = Quiz
        fields = ("title", "complexity", "focus", "description", "questions_amount")

class QuestionSerializer(serializers.ModelSerializer):
    # TODO: split into list and detail serializer later
    class Meta:
        model = Question
        fields = "__all__"


class AnswerSerializer(serializers.ModelSerializer):
    # TODO: split into list and detail serializer later
    class Meta:
        model = Answer
        fields = "__all__"
