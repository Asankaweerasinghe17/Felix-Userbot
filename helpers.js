function successfullMessage(msg) {
    return "✅ *Felix*:  ```" + msg + "```"
}
function errorMessage(msg) {
    return "🛑 *Felix*:  ```" + msg + "```"
}
function infoMessage(msg) {
    return "⏺️ *Felix*:  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}
