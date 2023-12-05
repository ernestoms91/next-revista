'use client'

import { BlockNoteEditor } from "@blocknote/core";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import "@blocknote/core/style.css";

const Editor2 = () => {

    const editor: BlockNoteEditor | null = useBlockNote({
    });

    editor.onEditorContentChange(() => {
        // Get and log all top-level, i.e. non-nested blocks in the editor.
        const blocks = editor.topLevelBlocks;
        console.log("Content was changed:", blocks);
      });


  return (
    <BlockNoteView editor={editor} />
  )
}

export default Editor2