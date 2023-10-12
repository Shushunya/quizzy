import { useParams } from "react-router-dom";
import { BreadCrumb } from "primereact/breadcrumb";
import { QuizDetail } from "../components/quiz/detail/quiz-detail";

export function QuizDetailPage() {
  const { pk } = useParams();
  const home = { icon: "pi pi-home", url: "/" };
  const QUIZ = {
    id: pk,
    title: "Quiz 6",
    rating: 3,
    category: "Math",
    description:
      "Test your understanding of basic best practices, including DRY, KISS, YAGNI etc",
  };
  const items = [{ label: "Quizzes", url: "/quizzes" }, { label: QUIZ.title }];
  // TODO: change to the data fetching
  return (
    <div className="w-full p-3">
      <div className="max-w-max">
        <BreadCrumb model={items} home={home} />
      </div>
      <QuizDetail quiz={QUIZ} />
    </div>
  );
}
