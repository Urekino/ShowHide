var element = document.getElementById('textResize');



element.style.width = '10px';
element.style.maxWidth = '200px';
element.style.height = '10px';
element.style.maxHeight = '100px';
element.style.background = 'red';
element.style.position = 'absolute';
element.style.cursor = 'se-resize';

element.addEventListener('mousedown' , initResize, false);

function initResize(e) {
   window.addEventListener('mousemove', Resize, false);
   window.addEventListener('mouseup', stopResize, false);
}

function Resize(e) {
   element.style.width = (e.clientX - element.offsetLeft) + 'px';
   element.style.height = (e.clientY - element.offsetTop) + 'px';
}

function stopResize(e) {
    window.removeEventListener('mousemove', Resize, false);
    window.removeEventListener('mouseup', stopResize, false);
}