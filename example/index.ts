import { FunctionComponent, render } from 'preact'
import { html } from 'htm/preact'
import Debug from '@bicycle-codes/debug'
import imgUrl from './hundred.jpg'
import '../src/index.js'
const debug = Debug()

const Example:FunctionComponent<unknown> = function () {
    debug('img url', imgUrl)
    return html`<div class="example">
        <image-element
            src="100.jpg"
            placeholder="abc"
        ></image-element>
    </div>`
}

render(html`<${Example} />`, document.getElementById('root')!)
