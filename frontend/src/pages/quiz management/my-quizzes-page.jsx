import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Navigate, useNavigate } from "react-router-dom";

const QUIZZES = [
  {
    id: 1,
    title: "Quiz 1",
    rating: 3,
    category: "Math",
    description:
      "Test your understanding of basic best practices, including DRY, KISS, YAGNI etc",
  },
  {
    id: 2,
    title: "Quiz 2",
    rating: 3,
    category: "Math",
    description:
      "Test your understanding of basic best practices, including DRY, KISS, YAGNI etc",
  },
  {
    id: 3,
    title: "Quiz 3",
    rating: 3,
    category: "Math",
    description:
      "Test your understanding of basic best practices, including DRY, KISS, YAGNI etc",
  },
  {
    id: 4,
    title: "Quiz 4",
    rating: 3,
    category: "Math",
    description:
      "Test your understanding of basic best practices, including DRY, KISS, YAGNI etc",
  },
  {
    id: 5,
    title: "Quiz 5",
    rating: 3,
    category: "Math",
    description:
      "Test your understanding of basic best practices, including DRY, KISS, YAGNI etc",
  },
  {
    id: 6,
    title: "Quiz 6",
    rating: 3,
    category: "Math",
    description:
      "Test your understanding of basic best practices, including DRY, KISS, YAGNI etc",
  },
];

export function MyQuizzesPage(props) {
    const navigate = useNavigate();
  return (
    <div className="card">
      <DataTable
        value={QUIZZES}
        tableStyle={{ minWidth: "50rem" }}
        stripedRows
        selectionMode="single"
        onSelectionChange={(e) => navigate("/t")}
      >
        <Column field="id" header="ID"></Column>
        <Column field="title" header="Title"></Column>
        <Column field="category" header="Category"></Column>
        <Column field="rating" header="Rating"></Column>
      </DataTable>
    </div>
  );
}
