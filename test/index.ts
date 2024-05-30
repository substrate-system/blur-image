import { test } from '@bicycle-codes/tapzero'
import { waitFor } from '@bicycle-codes/dom'
import '../src/index.js'

test('example', async t => {
    const el = await waitFor('image-element')
    t.ok(el, 'should find an `image-element` tag')
    const srcset = el?.getAttribute('srcset')
    t.ok(srcset?.includes('100.jpg'), 'should render with a srcset attribute')
    t.ok(srcset?.includes('800w'), 'should render with a srcset attribute')
    const img = el?.querySelector('img')
    t.equal(img?.getAttribute('loading'), 'lazy',
        'should have loading=lazy attribute')
    t.equal(img?.getAttribute('decoding'), 'async',
        'should have async decoding attribute')
})
