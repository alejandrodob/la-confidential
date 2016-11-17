const expenses = [
  { date: '01/05/2016', description: 'Papel higiénico', amount: 2.75 },
  { date: '10/04/2016', description: 'Limones, café', amount: 3.55 },
  { date: '12/03/2016', description: 'Bolsas basura', amount: 1.85 },
  { date: '27/01/2016', description: 'Cervezas', amount: 6.75 },
];

const payoffs = [
  { who: 'Felipe', whom: 'Aswel', amount: 75.00 }
];

const people = [
  { username: 'felipe.gozalo@gmail.com', name: 'Felipe' },
  { username: 'joseluescudero@gmail.com', name: 'José' },
  { username: 'alejandrodob@gmail.com', name: 'Aswel' }
];

export const getExpenses = () => {
  return new Promise(
    (resolve, reject) => {
      window.setTimeout(
        () => {
            resolve(expenses);
        },
        Math.random() * 1000
      )
    }
  );
};

export const getPayoffs = () => {
  return new Promise(
    (resolve, reject) => {
      window.setTimeout(
        () => {
            resolve(payoffs);
        },
        Math.random() * 1000
      )
    }
  );
};

export const getPeople = () => {
  return new Promise(
    (resolve, reject) => {
      window.setTimeout(
        () => {
            resolve(people);
        },
        Math.random() * 1000
      )
    }
  );
};
