export default class Person {
    _name;
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }

    constructor(options) {
        this.name = options?.name ? options.name : 'Unknown';
    }
}