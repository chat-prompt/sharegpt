
function createBtn() {
  const button = document.createElement("button");

  button.className = "absolute p-1 rounded-md text-black text-sm";

  button.style.backgroundColor = "yellow";

  button.style.right = '2.5em';

  button.style.bottom = '0';

  button.innerHTML = `번역해서<br/>보내기`;

  return button;
}

(function() {

  const translateButton = createBtn();

  function appendShareButton() {
    const buttonsWrapper = document.querySelector(
      "#__next main form button.absolute"
    );

    const parentWrapper = document.querySelector(
      "#__next main form div.flex.flex-col"
    );

    //buttonsWrapper.appendChild(translateButton);
    parentWrapper.insertBefore(translateButton, buttonsWrapper);
  }

  appendShareButton();

})();
