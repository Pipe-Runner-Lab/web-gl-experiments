import './styles/index.css'

import styles from './index.module.css';

import experiment1 from './experiment-1';

/* -------------------------------------------------------------------------- */
/*                                LAYOUT SETUP                                */
/* -------------------------------------------------------------------------- */
const app = document.querySelector<HTMLDivElement>('#app')!

const selectorPanel = document.createElement('div');
selectorPanel.classList.add(styles.selectorPanel);

const experimentList = document.createElement('div');
experimentList.classList.add(styles.experimentList);

const stage = document.createElement('div');
stage.classList.add(styles.stage);

/* -------------------------------------------------------------------------- */
/*                                 UPDATE DOM                                 */
/* -------------------------------------------------------------------------- */
selectorPanel.appendChild(experimentList);

app.appendChild(selectorPanel);
app.appendChild(stage);
