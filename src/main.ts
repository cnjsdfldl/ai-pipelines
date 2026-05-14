import './styles/tokens.css';
import './styles/base.css';
import './styles/components.css';
import './styles/pages.css';

import { route, start, onNotFound } from './router';
import { renderHome } from './pages/home';
import { renderPipelineList } from './pages/pipeline-list';
import { renderPipelineDetail, renderNotFound } from './pages/pipeline-detail';
import { renderNav } from './components/nav';
import { renderFooter } from './components/footer';

const appEl = document.getElementById('app');
if (!appEl) throw new Error('#app not found');

const navContainer = document.createElement('div');
const pageContainer = document.createElement('div');
pageContainer.id = 'page';
const footerContainer = document.createElement('div');

appEl.appendChild(navContainer);
appEl.appendChild(pageContainer);
appEl.appendChild(footerContainer);

const refreshNav = (currentPath: string) => {
  navContainer.replaceChildren(renderNav(currentPath));
};

footerContainer.appendChild(renderFooter());

route('/', ({ path }) => {
  refreshNav(path);
  renderHome(pageContainer);
});

route('/pipelines', ({ path }) => {
  refreshNav(path);
  renderPipelineList(pageContainer);
});

route('/pipelines/:id', ({ path, params }) => {
  refreshNav(path);
  renderPipelineDetail(pageContainer, params.id);
});

onNotFound(({ path }) => {
  refreshNav(path);
  renderNotFound(pageContainer);
});

start();
