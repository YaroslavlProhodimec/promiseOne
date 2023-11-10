console.log('start');

const promise1 = Promise.resolve().then(() => {
  console.log('promise1');
  const timer2 = setTimeout(() => {
    console.log('timer2')
  }, 0)
});

const timer1 = setTimeout(() => {
  console.log('timer1')
  const promise2 = Promise.resolve().then(() => {
    console.log('promise2')
  })
}, 0)

console.log('end');


const promise = new Promise((resolve, reject) => {
  console.log(1);
  setTimeout(() => {
    console.log('timerStart');
    resolve('success');
    console.log('timerEnd');
  }, 0);
  console.log(2);
});
promise.then((res) => {
  console.log(res);
});
console.log(4);;

const timer1 = setTimeout(() => {
  console.log('timer1');

  const promise1 = Promise.resolve().then(() => {
    console.log('promise1')
  })
}, 0)

const timer2 = setTimeout(() => {
  console.log('timer2')
}, 0)
console.log(‘start’);

const promise1 = Promise.resolve().then(() => {
 console.log(‘promise1’);
 const timer2 = setTimeout(() => {
 console.log(‘timer2’)
 }, 0)
});

const timer1 = setTimeout(() => {
 console.log(‘timer1’)
 const promise2 = Promise.resolve().then(() => {
 console.log(‘promise2’)
 })
}, 0)

console.log(‘end’);;


const p = new Promise((resolve, reject) => {
  reject(Error('Всё сломалось :('));
})
  .catch((error) => console.log('1-я', error.message))
  .catch((error) => console.log('2-я', error.message));





  const p2 = new Promise((resolve, reject) => {
  reject(Error('Всё сломалось :('));
});
// тут обе консоли, потому что нет цепочки, каждый catch отрабатывает отдельно
p2.catch((error) => console.log('3-я', error.message));
p2.catch((error) => console.log('4-я', error.message));


const p3 = new Promise((resolve, reject) => {
  reject(Error('Всё сломалось :('));
})
  .then((error) => console.log('5-я', error.message)) // ? бесполезный обработчик положительного ответа
  .catch((error) => console.log('6-я', error.message)); // ? будет отлов ошибки


  // todo в каком порядке будут выведены консоли и что в них будет?
console.log('script start'); // ? 1) синхронно, script start


setTimeout(function() {
  console.log('setTimeout'); // ? 5) макрозадача, setTimeout
}, 0);


Promise
  .resolve()
  .then(function() {
  console.log('promise1'); // ? 3) микрозадача, promise1
})
  .then(function() {
  console.log('promise2'); // ? 4) микрозадача, promise2
});


console.log('script end'); // ? 2) синхронно, script end



setTimeout(() => {
  console.log('timeout') // 6) макрозадача, timeout
}, 0);
const p = new Promise((resolve, reject) => {
  console.log('Promise creation'); // 1) синхронно, Promise creation
  resolve()
})

const p2 = new Promise((resolve, reject) => {
  console.log(123) // 2) синхронно, 123
})

p.then(() => {
  console.log('Promise resolving'); // 5) пришёл из микрозадачи после всего синхронного кода, Promise resolving
})

console.log('End') // 3) синхронно, End

console.log('p2 =>>', p2) // 4) синхронно, Promise {  }


Promise
    .resolve('a')
    .then((x) => {console.log(x); return 'b'})
    .then((x) => {console.log(x); return 'c'})
    .then((x) => console.log(x));
// a,b,c
2.

Promise
    .resolve()
    .then(() => console.log(1))
    .then(() => console.log(2))
    .then(() => console.log(3));

Promise
    .resolve()
    .then(() => console.log(4))
    .then(() => console.log(5))
    .then(() => console.log(6));
// 1,4,2,5,3,6

    Promise
    .resolve()
    .then(() => console.log(1))
    .then(() => {
        setTimeout(() => {
            console.log(2)
        }, 0)
    })
    .then(() => console.log(3));
// 1,3,2


    console.log(1);

setTimeout(() => {
    console.log(2);
}, 0);

console.log(3);

Promise.resolve().then(() => {
    console.log(4);
})

console.log(5);

while('') {
    console.log(6);
}

console.log(7);

// 1, 3, 5, 7, 4, 2