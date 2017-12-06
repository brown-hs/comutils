describe('Class API:', function () {
    describe('#addClass()', function () {
        let $ele = null
        before(function () {
            let div = document.createElement('div')
            div.id = 'J_addClass'
            document.body.appendChild(div)
            $ele = document.querySelector('#J_addClass')
        })
        it(`comUtils.addClass($ele, 'test') should return true`, function () {
            comUtils.addClass($ele, 'test')
            assert(comUtils.hasClass($ele, 'test'))
        });
        after(function () {
            document.body.removeChild($ele)
        })
    });

    describe('#hasClass()', function () {
        let $ele = null
        before(function () {
            let div = document.createElement('div')
            div.id = 'J_hasClass'
            document.body.appendChild(div)
            $ele = document.querySelector('#J_hasClass')
            comUtils.addClass($ele, 'test')
        })
        it(`comUtils.hasClass($ele, 'test') should return true`, function () {
            assert(comUtils.hasClass($ele, 'test'))
        });
        after(function () {
            document.body.removeChild($ele)
        })
    });

    describe('#removeClass()', function () {
        let $ele = null
        before(function () {
            let div = document.createElement('div')
            div.id = 'J_removeClass'
            document.body.appendChild(div)
            $ele = document.querySelector('#J_removeClass')
            comUtils.addClass($ele, 'test')
        })
        it(`comUtils.removeClass($ele, 'test') should return false`, function () {
            comUtils.removeClass($ele, 'test')
            assert.notEqual(comUtils.hasClass($ele, 'test'))
        });
        after(function () {
            document.body.removeChild($ele)
        })
    });
});