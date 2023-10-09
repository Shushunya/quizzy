from django.db import models

# Create your models here.


class Quiz(models.Model):
    title = models.CharField(max_length=50)

    class Meta:
        verbose_name_plural = "quizzes"

    def __str__(self) -> str:
        return self.title


class Question(models.Model):
    text = models.CharField(max_length=150)
    quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE)


class Answer(models.Model):
    text = models.CharField(max_length=150)
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    is_correct = models.BooleanField(default=False)
