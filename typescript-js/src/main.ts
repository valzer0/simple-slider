class OfficeSlider {

    static run() {
        window.addEventListener('load', () => new OfficeSlider())
    }

    protected src: string
    protected count: number
    protected max: number
    protected stop: boolean
    protected parent: HTMLElement
    protected width: number
    protected height: number
    protected prevBtn: HTMLButtonElement
    protected nextBtn: HTMLButtonElement
    protected wrap: HTMLElement
    protected thumbnail: HTMLElement
    
    constructor() {
        // console.log('office slider start')
        this.parent = document.getElementById('office-slider') as HTMLElement
        this.stop = false
        this.count = 1
        this.max = Number(this.parent.dataset.slide)

        
        
        const child = this.parent.children[0] as HTMLElement

        this.width = child.offsetWidth
        this.height = child.offsetHeight

        this.parent.style.width = this.width + 'px'
        this.parent.style.height = this.height + 'px'
        this.parent.style.overflow = 'hidden'
        this.parent.style.position = 'relative'

        const childimg = child.children[0] as HTMLImageElement
        this.src = childimg.src

        this.wrap = document.createElement('div')
        this.wrap.style.width = (this.width * this.max) + 'px'
        this.wrap.style.height = this.height + 'px'
        this.wrap.style.transition = (this.parent.dataset.anime ? this.parent.dataset.anime : 'all .3s ease-in-out')
        this.wrap.style.position = 'absolute'
        this.wrap.style.display = 'flex'
        this.wrap.style.flexDirection = 'row-reverse'
        this.wrap.style.top = '0'
        this.wrap.style.right = `0px`

        const slide = (i: number) => {
            const slide = document.createElement('div')
            const img = document.createElement('img')
            let src = this.src
            src = src.replace(/(.+office-slide)([0-9]*)\.(.+)/,'$1' + i + '.$3')
            img.src = src
            slide.appendChild(img)
            return slide
        }
        for (let i = 1; i <= this.max; i++) {
            this.wrap.appendChild(slide(i))
        }

        this.parent.textContent = null
        this.parent.appendChild(this.wrap)

        const createBtn = (type: string) => {
            const btn = document.createElement('button')
            btn.className = 'office-slider__btn is-' + type
            return btn 
        }
        this.prevBtn = createBtn('prev')
        this.nextBtn = createBtn('next')

        this.parent.appendChild(this.prevBtn)
        this.parent.appendChild(this.nextBtn)
        
        this.prevBtn.addEventListener('click', () => this.pagenationBtn('prev'))
        this.nextBtn.addEventListener('click', () => this.pagenationBtn('next'))

        this.thumbnail = document.createElement('div')
        this.thumbnail.className = 'office-slider__thumbnail'
        const parentNode = this.parent.parentNode as HTMLElement
        parentNode.insertBefore(this.thumbnail,this.parent.nextSibling)

        const thumbnail = (i: number) => {
            const btn = document.createElement('div')
            btn.className = 'office-slider__thumbnail-item'
            if (this.count === i) btn.classList.add('on')
            const src = this.src.replace(/(.+office-slide)([0-9]*)\.(.+)/,'$1' + i + '.$3')
            btn.style.backgroundImage = `url(${src})`
            btn.addEventListener('click', () => this.thumbnailBtn(i))
            return btn 
        }
        for (let i = 1; i <= this.max; i++) {
            this.thumbnail.appendChild(thumbnail(i))
        }
        
    }

    pagenationBtn(name: string) {
        if (this.stop) return
        // console.log('pagenation ' + name)
        this.stop = true
        if (name === 'next') {
            this.count++
            if (this.count > this.max) this.count = 1
        }
        if (name === 'prev') {
            this.count--
            if (this.count <  1) this.count = this.max
        }
        
        // console.log('pagenation count: ' + this.count)
        this.slideMove()
    }

    thumbnailBtn(num: number) {
        if (this.stop) return
        this.stop = true
        this.count = num
        console.log('thumbnail count: ' + this.count)
        this.slideMove()
    }

    slideMove() {
        this.wrap.style.right = `-${this.width * (this.count - 1)}px`
        setTimeout(() => {
            this.stop = false
        }, 500)
        const elems = this.thumbnail.children as HTMLCollection
        for (let i = 0; i < (this.max); i++) {
            elems[i].classList.contains('on') && elems[i].classList.remove('on')
            if (i === (this.count -1)) elems[i].classList.add('on')
        }
    }
}


OfficeSlider.run()