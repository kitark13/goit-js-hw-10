import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
form.addEventListener('submit', event => {
  event.preventDefault();
  const radioState = event.target.elements.state.value;
  const delay = event.target.elements.delay.value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (radioState === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, Number(delay));
  });

  promise
    .then(delay => {
      iziToast.success({
        title: 'Success',
        message: `✅ Fulfilled promise in ${delay}ms`,
        position: 'topRight',
      });
    })
    .catch(delay => {
      iziToast.error({
        title: 'Error',
        message: `❌ Rejected promise in ${delay}ms`,
        position: 'topRight',
      });
    });
});
