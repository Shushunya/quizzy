import factory.django


class QuizFactory(factory.django.DjangoModelFactory):
    """Quiz Factory"""
    class Meta:
        model = 'quiz.Quiz'
        django_get_or_create = ("title",)

    title = factory.Sequence(lambda n: f"Quiz title {n}")


class QuestionFactory(factory.django.DjangoModelFactory):
    """Question Factory"""
    class Meta:
        model = 'quiz.Question'
        django_get_or_create = ("text",)

    text = factory.Sequence(lambda n: f"Question text {n}")
    quiz = factory.SubFactory(QuizFactory)


class AnswerFactory(factory.django.DjangoModelFactory):
    """Answer Factory"""
    class Meta:
        model = 'quiz.Answer'
        django_get_or_create = ("text",)

    # text = "Some answer text"
    text = factory.Sequence(lambda n: f"Answer text {n}")
    is_correct = False
    question = factory.SubFactory(QuestionFactory)
