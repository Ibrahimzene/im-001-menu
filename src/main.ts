import './style.scss';
import { getMenu, getCurrentPage } from './Router';

document.querySelector<HTMLDivElement>('#app')!.innerHTML =/* html */`
<header>
	<h1>menu-site</h1>
	${getMenu()}
</header>
<main>
	${getCurrentPage()}
</main>
<footer>
	<img src="images/logo.png" class="img-footer" alt=""/>
	<p>hier kommt ein text</p>
</footer>
`;