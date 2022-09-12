import './hello.scss';

function hello() {
  const button = document.createElement('button');
  button.style.width = '120px';
  button.style.height = '40px';
  button.style.cursor = 'pointer';
  button.innerText = 'Hello button';
  button.classList.add('hello');
  const body = document.getElementsByTagName('body')[0];
  body.appendChild(button);
}

export default hello;
