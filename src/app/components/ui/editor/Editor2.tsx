"use client";

import {
  BlockNoteEditor,
  Block,
  uploadToTmpFilesDotOrg_DEV_ONLY,
} from "@blocknote/core";
import {
  BlockNoteView,
  useBlockNote,
  ReactSlashMenuItem,
  getDefaultReactSlashMenuItems,
  createReactBlockSpec,
  createReactInlineContentSpec,
} from "@blocknote/react";
import "@blocknote/core/style.css";
import { useState } from "react";
import { useFormikContext } from "formik";
import { S3Client, _Object, PutObjectCommand } from "@aws-sdk/client-s3";
import { uploadImage } from "@/app/lib/helpers/aws";

type uploadFile = (file: File) => Promise<string>;


const Editor2 = ({contenido,setContenido,setContent_html}:any) => {
  // const formik = useFormikContext();
  // const { values, setFieldValue } = formik;


  const subir: uploadFile = async (file: File) => {
    let url = await uploadImage(file);
    // Verificar si la respuesta es undefined
    if (url === undefined) {
      // Manejar el caso de respuesta undefined, lanzar un error o devolver un valor predeterminado según sea necesario
      throw new Error("La carga de la imagen falló o devolvió undefined.");
    }
    return url;
  };

  const [blocks, setBlocks] = useState<Block[] | null>(null);
  const editor: BlockNoteEditor | null = useBlockNote({
    initialContent: contenido ,
    uploadFile: subir,
  });

  editor.onEditorContentChange(() => {
      // Get and log all top-level, i.e. non-nested blocks in the editor.
      const blocks = editor.topLevelBlocks;
      setBlocks(editor.topLevelBlocks)
      // setFieldValue('contenido', blocks);
      setContenido(editor.topLevelBlocks)
    });


  const handleBlur = () => {
    const saveBlocksAsHTML = async () => {
      const html: string = await editor.blocksToHTMLLossy(editor.topLevelBlocks);
      // setFieldValue("content_html", html);
      setContent_html(html)
    };
    // El editor ha perdido el foco, realiza la acción que desees
    saveBlocksAsHTML();
    const blocks = editor?.topLevelBlocks || [];
    setBlocks(blocks);
    // setFieldValue("contenido", blocks);
  };

  return (
    <>
      <BlockNoteView editor={editor}  onBlur={handleBlur}
      // <BlockNoteView editor={editor} onBlur={handleBlur} 
      />
      {/* <pre>{JSON.stringify(blocks, null, 2)}</pre> */}
    </>
  );
};

export default Editor2;
