import { test } from '@bicycle-codes/tapzero'
import { waitFor } from '@bicycle-codes/dom'
import { name } from '../src/index.js'

test('blur-image element', async t => {
    const el = await waitFor('blur-image')
    t.ok(el, 'should find an `blur-image` tag')
    const srcset = el?.getAttribute('srcset')
    t.ok(srcset?.includes('100.jpg'), 'should render with a srcset attribute')
    t.ok(srcset?.includes('800w'), 'should render with a srcset attribute')
    const img = el?.querySelector('img')
    t.equal(img?.getAttribute('loading'), 'lazy',
        'should have loading=lazy attribute')
    t.equal(img?.getAttribute('decoding'), 'async',
        'should have async decoding attribute')
    t.equal(img?.getAttribute('alt'), 'testing',
        'should have an "alt" attribute')
})

test('exports component name', t => {
    t.equal(name, 'blur-image', 'should export the component name')
})
