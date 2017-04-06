const expect = require('chai').expect;

const jsdom = require('jsdom');
global.document = jsdom.jsdom('<body></body>');
global.window = document.defaultView;

// import ContentEditable from '../dist/index';
const ContentEditable = require('../dist/index');

describe('index', () => {

    let dummyElement;

    const mouseBlurEvent = new window.MouseEvent('blur');

    beforeEach(() => {

        dummyElement = document.createElement('div');

        window.document.body.appendChild(dummyElement);

    });

    afterEach(() => {
        window.document.body.innerHTML = '';
    });

    it('should tr', (done) => {

        dummyElement.innerHTML = 'Lorem ipsum';

        new ContentEditable({
            element: dummyElement,
            options: {
                onBlur: (value) => {
                    expect(value).to.equal('Lorem ipsum');
                    done();
                }
            }
        });

        dummyElement.dispatchEvent(mouseBlurEvent);

    });


    it('should tr', (done) => {

        dummyElement.innerHTML = '<div><br>Lorem <br>ipsum</div>';

        new ContentEditable({
            element: dummyElement,
            options: {
                onBlur: (value) => {
                    expect(value).to.equal('<div><br>Lorem <br>ipsum</div>');
                    done();
                }
            }
        });

        dummyElement.dispatchEvent(mouseBlurEvent);

    });


    it('should tr', (done) => {

        dummyElement.innerHTML = '<div><br>Lorem <br>ipsum</div>';

        new ContentEditable({
            element: dummyElement,
            options: {
                stripTags: true,
                onBlur: (value) => {
                    expect(value).to.equal('Lorem ipsum');
                    done();
                }
            }
        });

        dummyElement.dispatchEvent(mouseBlurEvent);

    });

});
