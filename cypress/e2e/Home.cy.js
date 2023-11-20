import home from '../e2e/Pages/HomePage'

describe('Blog de notícias AgiBank', () => {

    beforeEach(function () {
        home.go()  
    })

    it('Buscar uma notícia no blog pelo título', function () {

        const articleTitle = 'Agibank tem crescimento de 55% em 2022 e registra recorde ao superar R$10 bilhões de carteira de crédito'

        home.clickSearchIcon()
        home.searchForNews(articleTitle)
        home.clickSearch()
        home.newsViewed(articleTitle)
    })

    it('Buscar por uma notícia pelo texto', function () {
       
        const articleText = 'O volume da emissão foi de R$ 300 milhões e a operação foi liquidada no dia 29 de setembro'

        home.clickSearchIcon()
        home.searchForNews(articleText)
        home.clickSearch()
        home.newsViewed(articleText)
    })
})