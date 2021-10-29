import { Engine as BabylonEngine, ILoadingScreen } from "@babylonjs/core";

export class CustomLoadingScreen implements ILoadingScreen {
    private readonly _loadingDiv: HTMLDivElement;
    private readonly _loadingTextDiv: HTMLDivElement;

    constructor(engine: BabylonEngine) {
        engine.loadingScreen = this;
        this._loadingDiv = document.getElementById('loading') as HTMLDivElement;
        this._loadingTextDiv = document.getElementById('loadingText') as HTMLDivElement;
    }

    set loadingUIText(e: string) {
        this._loadingTextDiv.innerHTML = e;
    }

    set loadingUIBackgroundColor(e: string) {
        this._loadingDiv.style.backgroundColor  = e;
    }

    displayLoadingUI() {
        this._loadingDiv.style.display = 'block';
    }

    hideLoadingUI() {
        this._loadingDiv.style.display = 'none';
    }
}