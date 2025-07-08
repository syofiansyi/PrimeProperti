import{j as e}from"./app-CSlfTKLv.js";import{H as a,a as i,F as _}from"./HighlightSection-1C4Gs20k.js";import"./index-BctFJj0Y.js";function m({blog:l,users:o,Medsos:s}){const r=s.map(n=>{const t=typeof n.icon=="string"?JSON.parse(n.icon):n.icon;return{id:n.id,username:n.username,medsos:n.medsos,icon:t,image:t!=null&&t[0]?`/storage/${t[0]}`:null,kategori:n.kategori}});return e.jsxs(e.Fragment,{children:[e.jsx(a,{}),e.jsxs("main",{className:"pt-20",children:[e.jsx(i,{}),e.jsx("section",{className:"mx-auto px-4 py-12 bg-white mt-6 rounded-2xl shadow-md",children:e.jsx("div",{className:"mb-8",children:e.jsx("div",{className:`
    space-y-6 text-gray-700 leading-relaxed
    [&_h1]:text-3xl
    [&_h2]:text-2xl
    [&_h3]:text-xl
    [&_h4]:text-lg
    [&_p]:mb-4
    [&_ol]:list-decimal [&_ol]:pl-6
    [&_ul]:list-disc [&_ul]:pl-6
    [&_.ql-align-center]:text-center
    [&_.ql-align-right]:text-right
    [&_.ql-align-justify]:text-justify
    [&_.ql-direction-rtl]:rtl
    [&_.ql-size-small]:text-sm
    [&_.ql-size-large]:text-xl
    [&_.ql-size-huge]:text-3xl
    [&_.ql-font-monospace]:font-mono
    [&_.ql-font-serif]:font-serif
    [&_.ql-font-sansserif]:font-sans
    [&_.ql-indent-1]:ml-4
    [&_.ql-indent-2]:ml-8
    [&_.ql-indent-3]:ml-12
    [&_.ql-indent-4]:ml-16
    [&_.ql-indent-5]:ml-20
    [&_blockquote]:border-l-4 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-gray-500
    [&_pre]:bg-gray-100 [&_pre]:p-4 [&_pre]:rounded [&_pre]:overflow-x-auto
    [&_code]:bg-gray-200 [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded
    [&_a]:text-blue-600 [&_a]:underline
    `,dangerouslySetInnerHTML:{__html:l.content}})})}),e.jsx("br",{})]}),e.jsx(_,{users:o,Medsos:r})]})}export{m as default};
