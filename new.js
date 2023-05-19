const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const tabs = $$('.tab-item')
const tabcontent = $$('.tab-content-item')




tabs.forEach((tab,index) => {
    const tabcontents = tabcontent[index]
    tab.onclick = function() {
        $('.tab-item.actives').classList.remove('actives')
        $('.tab-content-item.show-item').classList.remove('show-item')

        this.classList.add('actives')
        tabcontents.classList.add('show-item')
    }
})