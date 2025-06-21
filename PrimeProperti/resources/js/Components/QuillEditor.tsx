import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function QuillEditor({ value, onChange }: Props) {
const modules = {
  toolbar: [
    [{ font: [] }, { size: [] }],
    [{ header: [1, 2, 3, false] }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ color: [] }, { background: [] }],
    [{ script: 'sub' }, { script: 'super' }],
    [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
    [{ align: [] }, { direction: 'rtl' }],
    ['link', 'image', 'video'],
    ['blockquote', 'code-block'],
    ['clean'],
  ],
};



  return (
    <div className="bg-white border border-gray-300 rounded-md overflow-hidden">
      <ReactQuill
        theme="snow"
        value={value}
        onChange={onChange}
        modules={modules}
       
      />
    </div>
  );
}
