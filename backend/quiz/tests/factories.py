import factory.django


class QuizFactory(factory.django.DjangoModelFactory):
    """Quiz Factory"""
    class Meta:
        model = 'quiz.Quiz'
        django_get_or_create = ("title",)
    
    title = factory.Sequence(lambda n: f"Quiz {n+1}")
