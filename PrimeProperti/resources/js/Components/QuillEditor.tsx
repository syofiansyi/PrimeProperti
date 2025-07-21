import React from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ImageResize from 'quill-image-resize-module-react';

// Register image resize module
Quill.register('modules/imageResize', ImageResize);

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
    imageResize: {
      modules: ['Resize', 'DisplaySize'],
    },
  };

  const formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike',
    'color', 'background',
    'script', 'super', 'sub',
    'list', 'bullet', 'indent',
    'align', 'direction',
    'link', 'image', 'video',
    'blockquote', 'code-block',
  ];

  return (
    <div
      className="bg-white border border-gray-300 rounded-md overflow-hidden prose max-w-full
                 resize min-h-[200px]
                 [&_.ql-align-center]:text-center
                 [&_.ql-align-right]:text-right
                 [&_.ql-align-left]:text-left
                 [&_.ql-align-justify]:text-justify
                 [&_.ql-align-center>img]:mx-auto
                 [&_.ql-align-center>video]:mx-auto
                 [&_.ql-align-center>iframe]:mx-auto
                 [&_img]:max-w-full 
                 [&_video]:w-full [&_video]:aspect-video 
                 [&_iframe]:w-full [&_iframe]:aspect-video"
    >
      <ReactQuill
        theme="snow"
        value={value}
        onChange={onChange}
        modules={modules}
        formats={formats}
        style={{ height: '100%' }}
      />
    </div>
  );
}
