import CheckList from "@editorjs/checklist";
import Code from "@editorjs/code";
import Delimiter from "@editorjs/delimiter";
import Image from "@editorjs/image";
import InlineCode from "@editorjs/inline-code";
import Link from "@editorjs/link";
import List from "@editorjs/list";
import Quote from "@editorjs/quote";
import SimpleImage from "@editorjs/simple-image";
import Paragraph from "@editorjs/paragraph";
import Header from "@editorjs/header";



export const EDITOR_TOOLS = {
  code: {
    class: Code,
    toolbox: {
      title: "Código",
    },
    config: {
      placeholder: "Introduce tu código aquí",
    },
  },
  header: {
    class: Header,
    toolbox: {
      title: "Título",
    },
    config: {
      placeholder: "Introduce título",
      levels: [2, 3, 4],
      defaultLevel: 2,
    },
  },
  paragraph: {
    class: Paragraph,
    toolbox: {
      title: "Párrafo",
    },
    config: {
      placeholder: "Introduce tu párrafo aquí",
    },
  },
  checklist: {
    class: CheckList,
    toolbox: {
      title: "Lista de verificación",
    },
    config: {
      placeholder: "Introduce tu lista de verificación aquí",
    },
  },
  image: {
    class: Image,
    toolbox: {
      title: "Imagen",
    },
    config: {
      captionPlaceholder: "Introduce la descripción de la imagen",
    },
  },
  inlineCode: {
    class: InlineCode,
    toolbox: {
      title: "Código en línea",
    },
    config: {
      placeholder: "Introduce tu código en línea aquí",
    },
  },
  link: {
    class: Link,
    toolbox: {
      title: "Enlace",
    },
    config: {
      placeholder: "Introduce tu enlace aquí",
    },
  },
  list: {
    class: List,
    toolbox: {
      title: "Lista",
    },
    config: {
      placeholder: "Introduce tu lista aquí",
    },
  },
  quote: {
    class: Quote,
    toolbox: {
      title: "Cita",
    },
    config: {
      quotePlaceholder: "Introduce tu cita aquí",
      captionPlaceholder: "Introduce la fuente de la cita",
    },
  },
  simpleImage: {
    class: SimpleImage,
    toolbox: {
      title: "Imagen simple",
    },
    config: {
      placeholder: "Introduce la URL de la imagen",
    },
  },
  delimiter: {
    class: Delimiter,
    toolbox: {
      title: "Delimitador",
    },
    config: {},
  },
    autores: {
    class: class CustomAutores {
      constructor({ data, api }) {
        this.data = data;
        this.api = api;
        this.wrapper = undefined;
      }

      static get toolbox() {
        return {
          title: 'Autores',
          icon: 'A'
        };
      }

      render() {
        this.wrapper = document.createElement('div');
        this.wrapper.innerHTML = '<input type="text" placeholder="Introduce el nombre del autor">';
        this.wrapper.style.border = 'none'
        return this.wrapper;
      }

      save() {
        const input = this.wrapper.querySelector('input');
        return {
          autor: input.value
        };
      }

      static get isReadOnlySupported() {
        return true;
      }
    }
  }
};