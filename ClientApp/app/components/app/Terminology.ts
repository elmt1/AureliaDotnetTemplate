export class Terminology {
    terminologyId: string;
    localeName: string;
    name: string;
    term: string;

    constructor(data) {
        Object.assign(this, data);
    }
}