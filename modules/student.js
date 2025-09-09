import Person from "./pesron";

export default class Student extends Person {
    _marks = [];
    get marks() {
        return [...this._marks];
    }
    set marks(value) {
        this._marks = [...value];
    }

    constructor(options) {
        super(options);
        this.marks = options?.marks ? options.marks : [];
    }
}