const { browser } = require('@wdio/globals')

module.exports = class Page {
    open (path) {
        return browser.url(path) // NOTE: supaya bisa nambah additional url di belakang base url
    }
}
