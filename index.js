/**
 * Returns translation of the words with the alias.
 * @param {String} text The text or words to be translated.
 * @param {String} alias The alias to use.
 * @return return the translated text.
 */
const bahasa_planet = (text, alias) => {
    let result = ''
    text.split``.map(v => {
        result += (
            (
                (/A|a/.test(v)) ? v.replace(/A|a/g, `${v}${alias}${v}`) :
                (/I|i/.test(v)) ? v.replace(/I|i/g, `${v}${alias}${v}`) :
                (/U|u/.test(v)) ? v.replace(/U|u/g, `${v}${alias}${v}`) :
                (/E|e/.test(v)) ? v.replace(/E|e/g, `${v}${alias}${v}`) :
                (/O|o/.test(v)) ? v.replace(/O|o/g, `${v}${alias}${v}`) :
                v
            )
        )
    })
    return result
}

module.exports = { bahasa_planet }
