import { SeedLanguage } from "@/drizzle/types";

export const spanishSeed: SeedLanguage = {
  title: "Español",
  imageSrc: "/es/es.svg",

  units: [
    {
      title: "Unidad 1",
      description: "Aprende lo básico del español",
      order: 1,

      lessons: [
        {
          title: "Sustantivos (personas)",
          order: 1,

          challenges: [
            {
              type: "SELECT",
              order: 1,
              question: '¿Cuál de estos es "el hombre"?',
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
              type: "SELECT",
              order: 2,
              question: '¿Cuál de estos es "la mujer"?',
              options: [
                {
                  text: "la mujer",
                  correct: true,
                  imageSrc: "/es/svgs/woman.svg",
                  audioSrc: "/es/mp3/woman.mp3",
                },
                {
                  text: "el hombre",
                  correct: false,
                  imageSrc: "/es/svgs/man.svg",
                  audioSrc: "/es/mp3/man.mp3",
                },
                {
                  text: "el zombi",
                  correct: false,
                  imageSrc: "/es/svgs/zombie.svg",
                  audioSrc: "/es/mp3/zombie.mp3",
                },
              ],
            },
            {
              type: "ASSIST",
              order: 3,
              question: '"el hombre"',
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
            {
              type: "ASSIST",
              order: 4,
              question: '"la mujer"',
              options: [
                {
                  text: "la mujer",
                  correct: true,
                  audioSrc: "/es/mp3/woman.mp3",
                },
                {
                  text: "el hombre",
                  correct: false,
                  audioSrc: "/es/mp3/man.mp3",
                },
                {
                  text: "el zombi",
                  correct: false,
                  audioSrc: "/es/mp3/zombie.mp3",
                },
              ],
            },
          ],
        },
        {
          title: "Sustantivos (niños)",
          order: 2,

          challenges: [
            {
              type: "SELECT",
              order: 1,
              question: '¿Cuál de estos es "el niño"?',
              options: [
                {
                  text: "el niño",
                  correct: true,
                  imageSrc: "/es/svgs/boy.svg",
                  audioSrc: "/es/mp3/boy.mp3",
                },
                {
                  text: "la niña",
                  correct: false,
                  imageSrc: "/es/svgs/girl.svg",
                  audioSrc: "/es/mp3/girl.mp3",
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
              type: "SELECT",
              order: 2,
              question: '¿Cuál de estos es "la niña"?',
              options: [
                {
                  text: "la niña",
                  correct: true,
                  imageSrc: "/es/svgs/girl.svg",
                  audioSrc: "/es/mp3/girl.mp3",
                },
                {
                  text: "el niño",
                  correct: false,
                  imageSrc: "/es/svgs/boy.svg",
                  audioSrc: "/es/mp3/boy.mp3",
                },
                {
                  text: "la mujer",
                  correct: false,
                  imageSrc: "/es/svgs/woman.svg",
                  audioSrc: "/es/mp3/woman.mp3",
                },
              ],
            },
            {
              type: "ASSIST",
              order: 3,
              question: '"el niño"',
              options: [
                { text: "el niño", correct: true, audioSrc: "/es/mp3/boy.mp3" },
                {
                  text: "la niña",
                  correct: false,
                  audioSrc: "/es/mp3/girl.mp3",
                },
                {
                  text: "el zombi",
                  correct: false,
                  audioSrc: "/es/mp3/zombie.mp3",
                },
              ],
            },
            {
              type: "ASSIST",
              order: 4,
              question: '"la niña"',
              options: [
                {
                  text: "la niña",
                  correct: true,
                  audioSrc: "/es/mp3/girl.mp3",
                },
                {
                  text: "el niño",
                  correct: false,
                  audioSrc: "/es/mp3/boy.mp3",
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
      ],
    },
    {
      title: "Unidad 2",
      description: "Objetos y criaturas",
      order: 2,

      lessons: [
        {
          title: "El robot",
          order: 1,
          challenges: [
            {
              type: "SELECT",
              order: 1,
              question: '¿Cuál de estos es "el robot"?',
              options: [
                {
                  text: "el robot",
                  correct: true,
                  imageSrc: "/es/svgs/robot.svg",
                  audioSrc: "/es/mp3/robot.mp3",
                },
                {
                  text: "el hombre",
                  correct: false,
                  imageSrc: "/es/svgs/man.svg",
                  audioSrc: "/es/mp3/man.mp3",
                },
                {
                  text: "el zombi",
                  correct: false,
                  imageSrc: "/es/svgs/zombie.svg",
                  audioSrc: "/es/mp3/zombie.mp3",
                },
              ],
            },
            {
              type: "ASSIST",
              order: 2,
              question: '"el robot"',
              options: [
                {
                  text: "el robot",
                  correct: true,
                  audioSrc: "/es/mp3/robot.mp3",
                },
                {
                  text: "el hombre",
                  correct: false,
                  audioSrc: "/es/mp3/man.mp3",
                },
                {
                  text: "la mujer",
                  correct: false,
                  audioSrc: "/es/mp3/woman.mp3",
                },
              ],
            },
          ],
        },
        {
          title: "El zombi",
          order: 2,
          challenges: [
            {
              type: "SELECT",
              order: 1,
              question: '¿Cuál de estos es "el zombi"?',
              options: [
                {
                  text: "el zombi",
                  correct: true,
                  imageSrc: "/es/svgs/zombie.svg",
                  audioSrc: "/es/mp3/zombie.mp3",
                },
                {
                  text: "el niño",
                  correct: false,
                  imageSrc: "/es/svgs/boy.svg",
                  audioSrc: "/es/mp3/boy.mp3",
                },
                {
                  text: "la niña",
                  correct: false,
                  imageSrc: "/es/svgs/girl.svg",
                  audioSrc: "/es/mp3/girl.mp3",
                },
              ],
            },
            {
              type: "ASSIST",
              order: 2,
              question: '"el zombi"',
              options: [
                {
                  text: "el zombi",
                  correct: true,
                  audioSrc: "/es/mp3/zombie.mp3",
                },
                {
                  text: "el robot",
                  correct: false,
                  audioSrc: "/es/mp3/robot.mp3",
                },
                {
                  text: "la mujer",
                  correct: false,
                  audioSrc: "/es/mp3/woman.mp3",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      title: "Unidad 3",
      description: "Repaso",
      order: 3,

      lessons: [
        {
          title: "Mezcla",
          order: 1,
          challenges: [
            {
              type: "SELECT",
              order: 1,
              question: '¿Cuál de estos es "el hombre"?',
              options: [
                {
                  text: "el hombre",
                  correct: true,
                  imageSrc: "/es/svgs/man.svg",
                  audioSrc: "/es/mp3/man.mp3",
                },
                {
                  text: "el niño",
                  correct: false,
                  imageSrc: "/es/svgs/boy.svg",
                  audioSrc: "/es/mp3/boy.mp3",
                },
                {
                  text: "el zombi",
                  correct: false,
                  imageSrc: "/es/svgs/zombie.svg",
                  audioSrc: "/es/mp3/zombie.mp3",
                },
              ],
            },
            {
              type: "SELECT",
              order: 2,
              question: '¿Cuál de estos es "la niña"?',
              options: [
                {
                  text: "la niña",
                  correct: true,
                  imageSrc: "/es/svgs/girl.svg",
                  audioSrc: "/es/mp3/girl.mp3",
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
              order: 3,
              question: '"la mujer"',
              options: [
                {
                  text: "la mujer",
                  correct: true,
                  audioSrc: "/es/mp3/woman.mp3",
                },
                {
                  text: "el hombre",
                  correct: false,
                  audioSrc: "/es/mp3/man.mp3",
                },
                {
                  text: "el robot",
                  correct: false,
                  audioSrc: "/es/mp3/robot.mp3",
                },
              ],
            },
            {
              type: "ASSIST",
              order: 4,
              question: '"el zombi"',
              options: [
                {
                  text: "el zombi",
                  correct: true,
                  audioSrc: "/es/mp3/zombie.mp3",
                },
                {
                  text: "el niño",
                  correct: false,
                  audioSrc: "/es/mp3/boy.mp3",
                },
                {
                  text: "la niña",
                  correct: false,
                  audioSrc: "/es/mp3/girl.mp3",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
