import factory.django


class QuizFactory(factory.django.DjangoModelFactory):
    """Quiz Factory"""
    class Meta:
        model = 'quiz.Quiz'
        django_get_or_create = ("title",)

    title = "Quiz title"


class QuestionFactory(factory.django.DjangoModelFactory):
    """Question Factory"""
    class Meta:
        model = 'quiz.Question'
        django_get_or_create = ("text",)

    text = "Some question text"
    quiz = factory.SubFactory(QuizFactory)


class AnswerFactory(factory.django.DjangoModelFactory):
    """Answer Factory"""
    class Meta:
        model = 'quiz.Answer'
        django_get_or_create = ("text",)

    text = "Some answer text"
    is_correct = False
    question = factory.SubFactory(QuestionFactory)
