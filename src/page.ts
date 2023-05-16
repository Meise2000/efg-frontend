import App from "./app";
import { Lang } from "./labels";

export abstract class Page {

    #section: HTMLElement;
    #title: Lang;
    #app: App;

    constructor(section: HTMLElement, app: App, title: Lang) {
        this.#section = section;
        this.#title = title;
        this.#app = app;
    }

    hide(): void {
        this.#section.hidden = true;
    }

    show(): void {
        this.#section.hidden = false;
        window.document.title = this.#app.translate(this.#title);
        this.display();
    }

    abstract display(): void;
}