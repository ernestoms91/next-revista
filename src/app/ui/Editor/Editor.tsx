import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import SimpleImage from "@editorjs/simple-image";
import List from "@editorjs/list";

const Editor = () => {
  const editor = new EditorJS({
    holderId: "editorjs",
    autofocus: false,
    placeholder: "Empieza a crear contenido dinámico con texto e imágenes",
    data: {},
    tools: {
      image: SimpleImage,
      header: Header,
      list: {
        class: List,
        inlineToolbar: true,
        config: {
          defaultStyle: "unordered",
        },
      },
    },
  });

  editor.isReady
    .then(() => {
      console.log("Editor.js is ready to work!");
      /** Do anything you need after editor initialization */
    })
    .catch((reason) => {
      console.log(`Editor.js initialization failed because of ${reason}`);
    });

  const onSave = () => {
    editor
      .save()
      .then((outputData) => {
        console.log("Article data: ", outputData);
      })
      .catch((error) => {
        console.log("Saving failed: ", error);
      });
  };

  return (
    <>
      <div className="h-64  overflow-y-scroll">
        <div className="bg-gris-claro  rounded-lg w-full " id="editorjs"></div>
      </div>
      <div className="flex  justify-center items-center">
        <button className="bg-azul-claro  p-2 rounded-lg" onClick={()=>onSave()}>Salvar</button>
      </div>
    </>
  );
};

export default Editor;
