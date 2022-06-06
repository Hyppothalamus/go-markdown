/* Do not change, this code is generated from Golang structs */

export {};

export class Line {


    static createFrom(source: any = {}) {
        return new Line(source);
    }

    constructor(source: any = {}) {
        if ('string' === typeof source) source = JSON.parse(source);

    }
}