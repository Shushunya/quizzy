from django.db import models

# Create your models here.
class QuizFocus(models.TextChoices):
    PRACTICE = "practice"
    THEORY = "theory"
    BOTH = "both"

class Quiz(models.Model):
    title = models.CharField(max_length=50)
    description = models.TextField(blank=True)
    complexity = models.IntegerField(default=1)
    focus = models.CharField(choices=QuizFocus.choices, max_length=len(QuizFocus.PRACTICE))

    class Meta:
        verbose_name_plural = "quizzes"

    def __str__(self) -> str:
        return self.title
    
    @property
    def questions_amount(self):
        return self.question_set.all().count()


class Question(models.Model):
    text = models.CharField(max_length=150)
    quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE)
    hint = models.CharField(max_length=255, blank=True)

    def __str__(self) -> str:
        return self.text


class Answer(models.Model):
    text = models.CharField(max_length=150)
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    is_correct = models.BooleanField(default=False)

    def __str__(self) -> str:
        return self.text
