const striptags = require('striptags');

export default class {

    constructor({element, options}) {

        this.element = element;
        this.options = options;

        this.element.setAttribute('data-placeholder', 'Plaveholder text');
        this.element.setAttribute('contenteditable', true);

        this.element.addEventListener('blur', this._onBlur.bind(this));

        require('contenteditable-placeholder')(this.element)
    }

    _onBlur() {

        const html = this.element.innerHTML;

        this.options.onBlur.call({}, this.options.stripTags ? striptags(html) : html);
    }

}
