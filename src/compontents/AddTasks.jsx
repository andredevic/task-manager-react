import { useState } from "react";

function AddTask({ onAddTaskSubmite }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="space-y-4 p-6   bg-white/10  border-white/40 rounded-md shadow-2xl flex flex-col">
      <input
        type="text"
        placeholder="Digite o título da tarefa"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        type="text"
        placeholder="Digite a descrição da tarefa"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button
        onClick={() => {
          //verificar se o titulo e a descrição estão preenchidos
          if (!title.trim() || !description.trim()){
            return alert ("Preencha o título e a descrição da tarefa.")
          }
          onAddTaskSubmite(title, description);
          setTitle("")
          setDescription("")
        }}
        className="bg-gray-500 text-white px-4 py-2 rounded-md font-medium"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
