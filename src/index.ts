import "./styles/index.css";

import styles from "./index.module.css";

import experiment1 from "./experiment-1";
import { Experiment } from "./@types/common";

const experimentList = [experiment1];

/* -------------------------------------------------------------------------- */
/*                                LAYOUT SETUP                                */
/* -------------------------------------------------------------------------- */
const AppComponent = document.querySelector<HTMLDivElement>("#app")!;

const SelectorPanelComponent = document.createElement("div");
SelectorPanelComponent.classList.add(styles.selectorPanelComponent);

const ExperimentListComponent = document.createElement("div");
ExperimentListComponent.classList.add(styles.experimentListComponent);

const MetaDataComponent = document.createElement('div');
MetaDataComponent.classList.add(styles.metaDataComponent);

experimentList.forEach((experiment) => {
  const ExperimentListItemComponent = document.createElement("div");
  ExperimentListItemComponent.classList.add(styles.experimentListItemComponent);
  ExperimentListItemComponent.textContent = experiment.metaData.title;

  ExperimentListComponent.appendChild(ExperimentListItemComponent);
});

const StageComponent = document.createElement("div");
StageComponent.classList.add(styles.stageComponent);

/* -------------------------------------------------------------------------- */
/*                                 UPDATE DOM                                 */
/* -------------------------------------------------------------------------- */
SelectorPanelComponent.appendChild(ExperimentListComponent);
SelectorPanelComponent.appendChild(MetaDataComponent);

AppComponent.appendChild(SelectorPanelComponent);
AppComponent.appendChild(StageComponent);

/* -------------------------------------------------------------------------- */
/*                               SETUP HANDLERS                               */
/* -------------------------------------------------------------------------- */
function onChangeActiveExperiment({
  metaData: { isAnimated, description },
  initialize,
}: Experiment) {
  const { clientWidth: width, clientHeight: height } = StageComponent;
  MetaDataComponent.textContent = description;

  const { canvas, draw } = initialize({ width, height });

  StageComponent.appendChild(canvas);

  try {
    if (isAnimated) {
      // TODO: use animation loop
    } else {
      draw();
    }
  } catch (error) {
    console.error(error);
  }
}

/* -------------------------------------------------------------------------- */
/*                              START EXPERIMENT                              */
/* -------------------------------------------------------------------------- */
onChangeActiveExperiment(experimentList[0]);
