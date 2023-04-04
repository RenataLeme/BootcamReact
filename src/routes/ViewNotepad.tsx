import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../api";
import ButtonDelete from "../components/ButtonDelete";
import { EditLinkButton } from "../components/EditLinkButton";
import { Breadcrumbs } from "../components/Breadcrumbs";
import toast from "react-simple-toasts";

export function ViewNotepad() {
  const params = useParams();
  const navigate = useNavigate();
  const [notepad, setNotepad] = useState({
    id: params.id,
    title: "",
    subtitle: "",
    content: "",
    created_at: "",
  });

  useEffect(() => {
    api.get(`/notepads/${params.id}`).then((res) => {
      const notepad = res.data;
      setNotepad(notepad);
    });
  }, []);

  return (
    <div className="flex flex-col w-[400px] h-[360px] shadow-2xl px-9 py-4 bg-[#68767d] rounded-md mt-[20px] mb-18 mx-12 max-w-screen-md md:w-[1000px] md:mx-20 md:m-4 text-start">
      <span className="pb-0 text-gray-700">#{notepad.id}</span>
      <time
        className="font-bold pb-4 text-gray-700"
        dateTime={notepad.created_at}
      >
        {new Date(notepad.created_at).toLocaleDateString()}
      </time>
      <h1 className="font-bold text-2xl">{notepad.title}</h1>
      <p className="text-lg ">{notepad.subtitle}</p>
      <span className="text-base pt-4">{notepad.content}</span>
      <div>
        <div className=" px-10 md:px-[400px] md:pt-30">
          <Breadcrumbs
            links={[
              { title: "Página inicial", link: "/" },
              { title: notepad.title, link: `/publicacoes/${params.id}` },
            ]}
          />
          <div className="flex flex-row mt-6 gap-3 ">
            <EditLinkButton to={`/publicacoes/editar/${params.id}`}>
              Editar
            </EditLinkButton>
            <ButtonDelete
              onClick={async () => {
                const res = await api.delete(`/notepads/${params.id}`);
                const deleteNotepadResponse = res.data;

                if (deleteNotepadResponse.success) {
                  toast("Item deletado com sucesso");
                  navigate("/");
                } else {
                  toast("Erro ao deletar o ítem");
                }
              }}
            >
              Deletar
            </ButtonDelete>
          </div>
        </div>
      </div>
    </div>
  );
}
