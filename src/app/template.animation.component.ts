import { trigger,  transition, useAnimation } from '@angular/animations';
import { scaleIn, scaleOut, fadeIn, fadeOut, flipIn, flipOut, jackIn, jackOut } from "./animation.module";


export const fadeInAnimation = trigger("slideAnimation", [
      /* scale */
      transition("void => scale", [
            useAnimation(scaleIn, { params: { time: "500ms" } })
      ]),
      transition("scale => void", [
            useAnimation(scaleOut, { params: { time: "500ms" } })
      ]),

      /* fade */
      transition("void => fade", [
            useAnimation(fadeIn, { params: { time: "500ms" } })
      ]),
      transition("fade => void", [
            useAnimation(fadeOut, { params: { time: "500ms" } })
      ]),

      /* flip */
      transition("void => flip", [
            useAnimation(flipIn, { params: { time: "500ms" } })
      ]),
      transition("flip => void", [
            useAnimation(flipOut, { params: { time: "500ms" } })
      ]),

      /* JackInTheBox */
      transition("void => jackInTheBox", [
            useAnimation(jackIn, { params: { time: "700ms" } })
      ]),
      transition("jackInTheBox => void", [
            useAnimation(jackOut, { params: { time: "700ms" } })
      ])
]);
