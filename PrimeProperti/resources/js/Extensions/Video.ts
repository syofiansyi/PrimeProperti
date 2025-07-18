import { Node, mergeAttributes } from '@tiptap/core'

export const Video = Node.create({
  name: 'video',

  group: 'block',

  selectable: true,
  draggable: true,

  atom: true,

  addAttributes() {
    return {
      src: {
        default: null,
      },
      controls: {
        default: true,
      },
      width: {
        default: '100%',
      },
    }
  },

  parseHTML() {
    return [
      {
        tag: 'video',
      },
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return ['video', mergeAttributes(HTMLAttributes), 0]
  },

  addNodeView() {
    return ({ node }) => {
      const video = document.createElement('video')
      video.src = node.attrs.src
      video.controls = true
      video.style.maxWidth = '100%'
      return {
        dom: video,
      }
    }
  },
})
