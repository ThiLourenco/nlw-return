import { CloseButton } from "./CloseButton";

import bugImagemUrl from '../assets/bug.svg';
import ideaImagemUrl from '../assets/idea.svg';
import thoughtImagemUrl from '../assets/thought.svg';

const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImagemUrl,
      alt: 'Imagem de um inseto'
    },
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: ideaImagemUrl,
      alt: 'Imagem de uma lâmpada'
    },
  },
  OTHER: {
    title: 'Outros',
    image: {
      source: thoughtImagemUrl,
      alt: 'Imagem de um balão de pensamento'
    },
  },
};

// Object.entries(feedbackTypes) =>
/**
 * [
 *  ['BUG', {...}],
 *  ['IDEA', {...}],
 *  ['THOUGHT', {...}]
 * ]
 */

export function WidgetFrom() {
  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>
        <CloseButton />
      </header>

      <div className="flex py-8 gap-8 w-full">
        { Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button>
              <img src={value.image.source} alt={value.image.alt} />
              <span>{value.title}</span>
            </button>
          ) 
        }) }
      </div>

      <footer className="text-xs text-neutral-400">
        Feito com ♥ por <a className="underline underline-offset-2" href="#">Thiago Lourenço</a>
      </footer>
    </div>
  );
}