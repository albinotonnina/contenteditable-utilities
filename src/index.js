const striptags = require('striptags');
//const placeholder = require('contenteditable-placeholder');

export default class {

    constructor({element, options}) {

        this.element = element;
        this.options = options;

        this.element.setAttribute('data-placeholder', options.placeholderText);
        this.element.setAttribute('contenteditable', true);

        this.element.addEventListener('blur', this._onBlur.bind(this));
        this.element.addEventListener('focus', this._onFocus.bind(this));

        // var update = function () {
        //
        // };
        //
        // new MutationObserver(update).observe(element, { childList: true });
        //
        // update();
        // dom.on(element, 'focus', update);
        // dom.on(element, 'blur', update);
        //

        if (this.isEmpty(this.element) && document.activeElement !== this.element) {
            this.element.classList.add('placeholder');
        } else {
            this.element.classList.remove('placeholder');
        }

    }

    isEmpty (element) {
        return element.textContent === '' && element.children.length === 0;
    }

    _onBlur() {


        const html = this.element.innerHTML;

        this.options.onBlur.call({}, this.options.stripTags ? striptags(html) : html);


        if (this.isEmpty(this.element)) {
            this.element.classList.add('placeholder');
        } else {
            this.element.classList.remove('placeholder');
        }
    }

    _onFocus() {

        if (this.isEmpty(this.element) && document.activeElement !== this.element) {
            this.element.classList.add('placeholder');
        } else {
            this.element.classList.remove('placeholder');
        }
    }

}
