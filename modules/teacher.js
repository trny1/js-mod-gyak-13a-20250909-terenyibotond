import Person from "./pesron";
import Student from "./student";

export default class Teacher extends Person {
    _students = [];
    get students() {
        return [...this._students];
    }
    set students(value) {
        this._students = [...value];
    }

    constructor(options) {
        super(options);
        this.students = options?.students ? options.students : [];
    }
}