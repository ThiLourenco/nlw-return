import { useState } from "react";

import bugImagemUrl from '../../assets/bug.svg';
import ideaImagemUrl from '../../assets/idea.svg';
import thoughtImagemUrl from '../../assets/thought.svg';
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";


export const feedbackTypes = {
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

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetFrom() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)

  function handleRestartFeedback() {
    setFeedbackType(null);
  }
  
  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      
      {!feedbackType ? (
        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
      ) : (
        <FeedbackContentStep
        feedbackType={feedbackType}
        onFeedbackRestartRequested={handleRestartFeedback} />
      )}

      <footer className="text-xs text-neutral-400">
        Feito com ♥ por <a className="underline underline-offset-2" href="#">Thiago Lourenço</a>
      </footer>
    </div>
  );
}