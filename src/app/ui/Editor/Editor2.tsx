'use client'

import { BlockNoteEditor, Block, PartialBlock, defaultInlineContentSpecs ,  defaultBlockSchema,defaultBlockSpecs, defaultProps } from '@blocknote/core';
import { BlockNoteView, useBlockNote, ReactSlashMenuItem, getDefaultReactSlashMenuItems, createReactBlockSpec, createReactInlineContentSpec, } from '@blocknote/react';
import "@blocknote/core/style.css";
import {useState} from 'react';
import { useFormikContext } from 'formik';



const Editor2 = () => {
  const formik = useFormikContext();
  const { values, setFieldValue } = formik;
  
      const [blocks, setBlocks] = useState<Block[] | null>(null);
      const editor: BlockNoteEditor | null = useBlockNote({ });  
  
      // editor.onEditorContentChange(() => {
      //     // Get and log all top-level, i.e. non-nested blocks in the editor.
      //     const blocks = editor.topLevelBlocks;
      //     setBlocks(editor.topLevelBlocks)  
      //     // setFieldValue('contenido', blocks);    
      //   });
        const handleBlur = () => {
          // El editor ha perdido el foco, realiza la acción que desees
          const blocks = editor?.topLevelBlocks || [];
          setBlocks(blocks);
          setFieldValue('contenido', blocks);
        };

  return (
    <>
    <BlockNoteView editor={editor} 
    onBlur={handleBlur}
    />
    {/* <pre>{JSON.stringify(blocks, null, 2)}</pre> */}
    </>
  )
}

export default Editor2