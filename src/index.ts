export class BlurImage extends HTMLElement {
    placeholder:string
    srcset:string|null

    constructor () {
        super()

        const pl = this.getAttribute('placeholder')
        if (!pl) throw new Error('Missing placeholder attribute')
        this.placeholder = pl
        this.srcset = this.getAttribute('srcset')

        this.innerHTML = `<img
            ${this.srcset ? `srcset="${this.srcset}"` : ''}
            alt="${this.getAttribute('alt')}"
            content-visibility="${this.getAttribute('content-visibility') || 'auto'}"
            decoding="${this.getAttribute('decoding') || 'async'}"
            loading="${this.getAttribute('loading') || 'lazy'}"
            class="image-element blurry"
            style="background-size: cover; background-image: url('${this.placeholder}')"
            src="${this.getAttribute('src')}"
        />`
    }

    connectedCallback () {
        const img = this.querySelector('img')

        img!.addEventListener('load', (ev) => {
            if (!(ev.target instanceof HTMLImageElement)) {
                throw new Error('not image')  // for TS
            }

            const img = ev.target
            img.style.backgroundImage = 'none'
            img.classList.remove('blurry')
            img.classList.add('sharp')
        })
    }
}

export const name = 'blur-image'

customElements.define('blur-image', BlurImage)
