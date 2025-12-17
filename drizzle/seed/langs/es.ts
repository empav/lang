import { SeedLanguage } from "@/drizzle/types";

export const spanishSeed: SeedLanguage = {
  title: "Spanish",
  imageSrc: "/es/es.svg",

  units: [
    {
      title: "Unit 1",
      description: "Learn the basics of Spanish",
      order: 1,

      lessons: [
        {
          title: "Nouns",
          order: 1,

          challenges: [
            {
              type: "SELECT",
              order: 1,
              question: 'Which one of these is "the man"?',
              options: [
                {
                  text: "el hombre",
                  correct: true,
                  imageSrc: "/es/svgs/man.svg",
                  audioSrc: "/es/mp3/man.mp3",
                },
                {
                  text: "la mujer",
                  correct: false,
                  imageSrc: "/es/svgs/woman.svg",
                  audioSrc: "/es/mp3/woman.mp3",
                },
                {
                  text: "el robot",
                  correct: false,
                  imageSrc: "/es/svgs/robot.svg",
                  audioSrc: "/es/mp3/robot.mp3",
                },
              ],
            },
            {
              type: "ASSIST",
              order: 2,
              question: '"the man"',
              options: [
                {
                  text: "el hombre",
                  correct: true,
                  audioSrc: "/es/mp3/man.mp3",
                },
                {
                  text: "la mujer",
                  correct: false,
                  audioSrc: "/es/mp3/woman.mp3",
                },
                {
                  text: "el robot",
                  correct: false,
                  audioSrc: "/es/mp3/robot.mp3",
                },
              ],
            },
          ],
        },
        {
          title: "Verbs",
          order: 2,

          challenges: [
            {
              type: "ASSIST",
              order: 1,
              question: '"to eat"',
              options: [
                { text: "comer", correct: true, audioSrc: "/es/mp3/comer.mp3" },
                {
                  text: "beber",
                  correct: false,
                  audioSrc: "/es/mp3/beber.mp3",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
