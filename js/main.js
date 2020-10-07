(function(d) {
  const htmlInput = d.querySelector('#html-input');
  const output = d.querySelector('#output');
  const convertBtn = d.querySelector('#convert-btn');

  convertBtn.addEventListener('click', generateOutput);

  function generateOutput(e) {
    let parser = new DOMParser();
    let doc = parser.parseFromString(htmlInput.value, 'text/html');

    let listItems = doc.querySelectorAll('li');
    listItems.forEach(listItem => {
      if (!listItem.querySelector('p') && listItem.classList.length === 0) {
        listItem.innerHTML = `<p>${listItem.innerHTML}</p>`
      }
    })

    output.value = doc.querySelector('body').innerHTML;
    output.value = output.value.replace(/<p><\/p>/g, '');
  }
})(document)
