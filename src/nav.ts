import { Page } from "./page";

export class Nav {
    #nav: HTMLElement;
    #pages: Map<HTMLAnchorElement, Page>;

    constructor() {
        this.#nav = document.querySelector('header');
        this.#pages = new Map<HTMLAnchorElement, Page>();
    }

    register(key: string, page: Page) {
        const a = this.#nav.querySelector(`a[href="#${key}"]`) as HTMLAnchorElement;
        if (a) {
            this.#pages.set(a, page)
            a.addEventListener('click', (e) => this.#changeScreen(e));
        }
    }

    #changeScreen(e: Event) {
        e.preventDefault();
        const a = e.currentTarget as HTMLAnchorElement;
        this.#pages.forEach((entry, key) => {
            if (key === a) {
                entry.show();
            } else {
                entry.hide();
            }
        });
    }
}