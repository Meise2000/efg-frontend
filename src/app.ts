import { Lang } from './labels';
import { Welcome } from './welcome';
import { About } from './about';
import { Sermons } from './sermons';
import { Page } from './page';
import { Appointments } from './appointments';
import { Support } from './support';
import { Nav } from './nav';

export default class App {

    #language: Lang;

    constructor() {
        const lang = document.querySelector('html').getAttribute('lang') as unknown as Lang;
        this.#language = lang;
    }

    init(): void {
        // Nav
        const nav = new Nav();

        this.#register(nav, 'welcome', (element, app) => new Welcome(element, app));
        this.#register(nav, 'about', (element, app) => new About(element, app));
        this.#register(nav, 'sermons', (element, app) => new Sermons(element, app));
        this.#register(nav, 'events', (element, app) => new Appointments(element, app));
        this.#register(nav, 'support', (element, app) => new Support(element, app));
    }

    #register(nav: Nav, id: string, creator: (element: HTMLElement, app: App) => Page): void {
        const element = document.querySelector(`#${id}`) as HTMLElement;
        const screen = creator(element, this) as Page;
        nav.register(id, screen);
    }

    translate(key: Lang): string {
        const lang = this.#language as unknown;
        return key[lang as string];
    }
} 

document.addEventListener("DOMContentLoaded", () => {
    const app = new App();
    app.init();
});