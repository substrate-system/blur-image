import Debug from '@bicycle-codes/debug'
const debug = Debug()

export class ImageElement extends HTMLElement {
    placeholder:string

    constructor () {
        super()

        const pl = this.getAttribute('placeholder')
        if (!pl) throw new Error('Missing placeholder attribute')
        this.placeholder = pl

        debug('placeholder', pl)

        this.innerHTML = `<img
            laoding="lazy"
            class="image-element blurry"
            style="background-size: cover; background-image: url('${this.placeholder}')"
            src="${this.getAttribute('src')}"
        />`
    }

    connectedCallback () {
        const img = this.querySelector('img')

        img!.addEventListener('load', (ev) => {
            debug('loaded', ev)
            if (!(ev.target instanceof HTMLImageElement)) {
                throw new Error('not image')  // for TS
            }

            const img = ev.target
            img.style.backgroundImage = 'none'
            img.classList.remove('blurry')
            img.classList.add('sharp')
            img.classList.add('loaded')
        })
    }

    // src="100.jpg"
}

customElements.define('image-element', ImageElement)

// <img
//     src="${this.getAttribute('src')}"
//     style="background-image: url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAgICAgJCAkKCgkNDgwODRMSEBASEx0VFhUWFR0sHCAcHCAcLCcvJiQmLydGNzExN0ZRREBEUWJYWGJ8dnyiotkBCAgICAkICQoKCQ0ODA4NExIQEBITHRUWFRYVHSwcIBwcIBwsJy8mJCYvJ0Y3MTE3RlFEQERRYlhYYnx2fKKi2f/AABEIADIAMgMBIgACEQEDEQH/xAB4AAACAwEBAQAAAAAAAAAAAAAABgQFBwIDARAAAgEEAQMBBQYHAAAAAAAAAQIDAAQFERIGEzFyBxQhQVEVIiNhsbIzNTZxdIGRAQEBAQEAAAAAAAAAAAAAAAACAQMAEQEBAQEBAQEBAAAAAAAAAAABAAJBMRESIf/aAAwDAQACEQMRAD8A1vLJuKL1VRzQco6ZMov4cPqNVipsaoPrLknTmCGPlPMsY3rbECki/wA52LqVYJEkj7Z4EEnRP1q7v+nZ8xlLuRsiqRQvwijC8iBoE7rsez661aFUnfveSQvq2KgFaPHl8UURHuwW0AWIIBNOPSsI+0pXHjsmk296Js4feBcXFzB2zsq3H4BqfuhcbJZ45OcolO3UP9VHioB9EaM68aK9uNFaxoWSH4cXqqBCu9VYZL+EnqqBEwVdmi+15U5tYIbi5lRdM7EtTxYzRnH2bsVLCFCPy+FZXL1NiffXtvel7nMrrR8iuhkcUH7e4OXILrQ8kbo/0fpLky5NIrq7yYcbUlV/4gq5w8EcOPt0QaGm/Ws9yGdx+Ogcc4g7LyEYIBan7AXSXWIspk8PEDVyRWttUV9op0q7IEdlf70hdR9SW+NtzCjBp28LTll45ZrN0il7bkHT63qsCsMI2b6kvsdHkhIYFLyzkedEAgVO1o2NiEj3Vzw+4geWQn5/PVNvRlxDm7+XuKAibdtj6DVJucu0wuUzOPtotxyRwopJ8aQbP+91dezq5t7RsrJNKFkeJEiG6eRULPaZytK6sxdvLeCKIBHHxQ/Xl4Wnv2b3ofECzL7kgLbH5E7pD6pmN1KX1w3GVX5HY8EVc9Av3stFfIw43NnLzUfKRCvOlr1jh/WS2jdFeW6KztZc6od4+n8o6OVZbWUgg6IPGsT9k/8APb7/AAH/AHrRRVul/rH+p8h6o/2CukVfszfEb2aKKePWz3yYevI0jx+FMaBSyNvQ1v7oq69kvi6/KT9VooocnbbRRRUrf//Z');"
// />

// customElements.define('image-element', ImageElement)

// export class ImageElement extends HTMLElement {
//     constructor () {
//         super()

//         // Set the base64 URL for the blurry placeholder
//         // const url = this.getAttribute('placeholder')
//         // this.style.setProperty('--paceholder', url)

//         this.innerHTML = `
//             <div>
//                 hello
//             </div>
//         `

//         // this.innerHTML = `
//         // <img
//         //     decoding="async"
//         //     src=""
//         //     style="background-image: url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAgICAgJCAkKCgkNDgwODRMSEBASEx0VFhUWFR0sHCAcHCAcLCcvJiQmLydGNzExN0ZRREBEUWJYWGJ8dnyiotkBCAgICAkICQoKCQ0ODA4NExIQEBITHRUWFRYVHSwcIBwcIBwsJy8mJCYvJ0Y3MTE3RlFEQERRYlhYYnx2fKKi2f/AABEIADIAMgMBIgACEQEDEQH/xAB4AAACAwEBAQAAAAAAAAAAAAAABgQFBwIDARAAAgEEAQMBBQYHAAAAAAAAAQIDAAQFERIGEzFyBxQhQVEVIiNhsbIzNTZxdIGRAQEBAQEAAAAAAAAAAAAAAAACAQMAEQEBAQEBAQEBAAAAAAAAAAABAAJBMRESIf/aAAwDAQACEQMRAD8A1vLJuKL1VRzQco6ZMov4cPqNVipsaoPrLknTmCGPlPMsY3rbECki/wA52LqVYJEkj7Z4EEnRP1q7v+nZ8xlLuRsiqRQvwijC8iBoE7rsez661aFUnfveSQvq2KgFaPHl8UURHuwW0AWIIBNOPSsI+0pXHjsmk296Js4feBcXFzB2zsq3H4BqfuhcbJZ45OcolO3UP9VHioB9EaM68aK9uNFaxoWSH4cXqqBCu9VYZL+EnqqBEwVdmi+15U5tYIbi5lRdM7EtTxYzRnH2bsVLCFCPy+FZXL1NiffXtvel7nMrrR8iuhkcUH7e4OXILrQ8kbo/0fpLky5NIrq7yYcbUlV/4gq5w8EcOPt0QaGm/Ws9yGdx+Ogcc4g7LyEYIBan7AXSXWIspk8PEDVyRWttUV9op0q7IEdlf70hdR9SW+NtzCjBp28LTll45ZrN0il7bkHT63qsCsMI2b6kvsdHkhIYFLyzkedEAgVO1o2NiEj3Vzw+4geWQn5/PVNvRlxDm7+XuKAibdtj6DVJucu0wuUzOPtotxyRwopJ8aQbP+91dezq5t7RsrJNKFkeJEiG6eRULPaZytK6sxdvLeCKIBHHxQ/Xl4Wnv2b3ofECzL7kgLbH5E7pD6pmN1KX1w3GVX5HY8EVc9Av3stFfIw43NnLzUfKRCvOlr1jh/WS2jdFeW6KztZc6od4+n8o6OVZbWUgg6IPGsT9k/8APb7/AAH/AHrRRVul/rH+p8h6o/2CukVfszfEb2aKKePWz3yYevI0jx+FMaBSyNvQ1v7oq69kvi6/KT9VooocnbbRRRUrf//Z')
//         // />
//         // `

//         //     // Render the component with all the data ready
//         //     this.innerHTML = `
//         //     <div class="image-element">
//         //         <div class="progress-indicator__visual">
//         //             <div data-progress-count class="progress-indicator__count"></div>

//         //             <svg
//         //                 fill="none"
//         //                 viewBox="0 0 ${this.viewBox} ${this.viewBox}"
//         //                 width="${this.viewBox}"
//         //                 height="${this.viewBox}"
//         //                 focusable="false"
//         //                 class="progress-indicator__circle"
//         //             >
//         //                 <circle
//         //                     r="${normalisedRadius}"
//         //                     cx="${radius}"
//         //                     cy="${radius}"
//         //                     stroke-width="${this.stroke}"
//         //                     class="progress-indicator__background-circle"
//         //                 />
//         //                 <circle
//         //                     r="${normalisedRadius}"
//         //                     cx="${radius}"
//         //                     cy="${radius}"
//         //                     stroke-dasharray="${this.calculatedCircumference} ${this.calculatedCircumference}"
//         //                     stroke-width="${this.stroke}"
//         //                     class="progress-indicator__progress-circle"
//         //                     data-progress-circle
//         //                 />
//         //             </svg>

//     //             <svg
//     //                 class="progress-indicator__check"
//     //                 focusable="false"
//     //                 viewBox="0 0 20 20"
//     //                 fill="none"
//     //             >
//     //                 <path d="m8.335 12.643 7.66-7.66 1.179 1.178L8.334 15 3.032 9.697 4.21 8.518l4.125 4.125Z" fill="currentColor"/>
//     //             </svg>
//     //         </div>
//     //     </div>
//     //   `
//     }
// }

// //     static get observedAttributes () {
// //         return ['progress']
// //     }

// //     get viewBox ():number {
// //         return (this.getAttribute('viewbox') ?
// //             parseInt(this.getAttribute('viewbox')!) :
// //             100)
// //     }

// //     get stroke ():number {
// //         return (this.getAttribute('stroke') ?
// //             parseInt(this.getAttribute('stroke')!) :
// //             5)
// //     }

// //     get label ():string {
// //         return this.getAttribute('label') || 'Current progress'
// //     }

// //     attributeChangedCallback (name:string, _oldValue, newValue:number):void {
// //         if (name === 'progress') {
// //             this.setProgress(newValue)
// //         }
// //     }

// //     setProgress (percent:number) {
// //         // Always make sure the percentage passed never exceeds the max
// //         if (percent > 100) {
// //             percent = 100
// //         }

// //         // Set the aria role value for screen readers
// //         this.setAttribute('aria-valuenow', '' + percent)

// //         const circle = this.querySelector('[data-progress-circle]') as
// //             HTMLElement
// //         const progressCount = this.querySelector('[data-progress-count]') as
// //             HTMLElement

// //         // Calculate a dash offset value based on the calculated circumference
// //         // and the current percentage
// //         circle.style.strokeDashoffset = '' +
// //             (this.calculatedCircumference -
// //             (percent / 100) * this.calculatedCircumference)

// //         // A human readable version for the text label
// //         progressCount.innerText = `${percent}%`

// //         // Set a complete or pending state based on progress
// //         if (percent === 100) {
// //             this.setAttribute('data-progress-state', 'complete')
// //         } else {
// //             this.setAttribute('data-progress-state', 'pending')
// //         }
// //     }
// // }
