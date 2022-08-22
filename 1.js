let visible = []
let array = ['🎟', '🎠', '🎭', '🥽', '🎐', '🎏', '🎋', '🖼', '🎞', '🥼', '👔', '🎈', '🎉', '✨',
'🎟', '🎠', '🎭', '🥽', '🎐', '🎏', '🎋', '🖼', '🎞', '🥼', '👔', '🎈', '🎉', '✨']
let actulizar = ()=>{
    document.getElementById('array').innerHTML = visible
}
function get() {
    return document.getElementById('insert').value
}
function get2() {
    return document.getElementById('remove').value
}

function push() {
    visible.push(array.shift())
    actulizar()
}
function unshift() {
    visible.unshift(array.shift())
    actulizar()
}
function insert() {
    visible.splice(get(), 0, array.shift())
    actulizar()
}

function pop() {
    array.push(visible.pop())
    actulizar()
}
function shift() {
    array.push(visible.shift())
    actulizar()
}
function remove() {
    visible.splice(get2(), 1)
    actulizar()
}