interface UIElement {
    addEventListener(onclick: (this: void, e: Event) => void): void;
}

class Handle {
    type: string | undefined;

    constructor(type?: string) {
        this.type = type;
    }

    onclickBad = (e: Event) =>
        this.type = e.type;
    }
}

let h = new Handle();
let ui: UIElement = {
    addEventListener() {
        console.log('addEventListener__');
    }
}

ui.addEventListener(h.onclickBad)