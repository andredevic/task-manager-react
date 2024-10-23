import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  return (
    <div className=" bg-slate-950 w-screen h-screen absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)] flex justify-center p-6">
      <div className="space-y-4 w-[500px]">
        <div className="flex justify-center relative mb-6">
          <button
            onClick={() => navigate(-1)}
            className="bg-white/10  border-white/40 shadow-2xl p-1 rounded-md absolute left-0 top-0 bottom-0 text-slate-100"
          >
            <ChevronLeftIcon />
          </button>
          <h1 className="text-3xl text-slate-100 font-bold text-center">
            Detalhes da Tarefa
          </h1>
        </div>
        <div className=" bg-white/10 p-4 border-white/40 rounded-md shadow-2xl flex flex-col">
          <h2 className="text-xl text-white font-bold">{title}</h2>
          <p className="text-white">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
