import "./styles/index.css";

import styles from "./index.module.css";

import experiment1 from "./experiment-1";
import { Experiment } from "./@types/common";

const experimentList = [experiment1];

/* -------------------------------------------------------------------------- */
/*                                LAYOUT SETUP                                */
/* -------------------------------------------------------------------------- */
const App = document.querySelector<HTMLDivElement>("#app")!;

const SelectorPanel = document.createElement("div");
SelectorPanel.classList.add(styles.selectorPanel);

const ExperimentList = document.createElement("div");
ExperimentList.classList.add(styles.experimentList);

experimentList.forEach((experiment) => {
  const ExperimentListItem = document.createElement("div");
  ExperimentListItem.classList.add(styles.experimentListItem);
  ExperimentListItem.textContent = experiment.metaData.title;

  ExperimentList.appendChild(ExperimentListItem);
});

const Stage = document.createElement("div");
Stage.classList.add(styles.stage);

/* -------------------------------------------------------------------------- */
/*                                 UPDATE DOM                                 */
/* -------------------------------------------------------------------------- */
SelectorPanel.appendChild(ExperimentList);

App.appendChild(SelectorPanel);
App.appendChild(Stage);

/* -------------------------------------------------------------------------- */
/*                               SETUP HANDLERS                               */
/* -------------------------------------------------------------------------- */
function onChangeActiveExperiment({ canvas }: Experiment) {
  const { clientWidth: width, clientHeight: height } = Stage;
  canvas.width = width;
  canvas.height = height;

  Stage.appendChild(canvas);
}

/* -------------------------------------------------------------------------- */
/*                              START EXPERIMENT                              */
/* -------------------------------------------------------------------------- */
onChangeActiveExperiment(experimentList[0]);
