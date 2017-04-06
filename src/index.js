const striptags = require('striptags');

export default class {

    constructor({element, options}) {

        this.element = element;
        this.options = options;

        this.element.addEventListener('blur', this._onBlur.bind(this));

    }

    _onBlur() {

        const html = this.element.innerHTML;

        this.options.onBlur.call({}, this.options.stripTags ? striptags(html) : html);
    }

}
