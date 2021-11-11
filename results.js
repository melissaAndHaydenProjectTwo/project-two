const resultsApp = {}

resultsApp.init = () => {
    console.log('hello')
    const result = JSON.parse(window.localStorage.getItem('cardContainer'))
    console.log(result)
}

resultsApp.init()
