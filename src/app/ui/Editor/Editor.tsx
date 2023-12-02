import { useRef, useMemo } from 'react'
import JoditEditor from 'jodit-react'
import dynamic from 'next/dynamic';

const Jodit = ({ content, setContent }:any) => {
  const editor = useRef(null)
  const JoditEditor = dynamic(() => import('jodit-react'), { ssr: false });
  
  return (
    <JoditEditor
       ref={editor}
        value={content}
        onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
        onChange={(newContent) => setContent(newContent)}
    />
  )
}
export default Jodit