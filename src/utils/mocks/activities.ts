import { TransactionType } from '../../models/Transaction';
import users from './users';

const allActivities: TransactionType[] = [
  {
    type: 'receive',
    amount: 67933,
    currency: 'Kzs',
    transactionDate: '29/08/2022',
    message:
      'suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam',
    origin: users[1],
  },
  {
    type: 'receive',
    amount: 9263,
    currency: 'Kzs',
    transactionDate: '10/12/2021',
    message:
      'eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient',
    origin: users[5],
  },
  {
    type: 'payment',
    amount: 96516,
    currency: 'Kzs',
    transactionDate: '27/01/2021',
    entityName: 'Fivechat',
  },
  {
    type: 'receive',
    amount: 70029,
    currency: 'Kzs',
    transactionDate: '22/09/2022',
    message:
      'dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo',
    origin: users[5],
  },
  {
    type: 'send',
    amount: 15335,
    currency: '$',
    transactionDate: '05/10/2021',
    message: 'amet justo morbi ut odio cras mi pede malesuada in imperdiet',
    destination: users[2],
  },
  {
    type: 'send',
    amount: 21403,
    currency: 'Kzs',
    transactionDate: '12/12/2021',
    message:
      'nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit eu est',
    destination: users[3],
  },
  {
    type: 'send',
    amount: 29284,
    currency: '$',
    transactionDate: '01/05/2021',
    destination: users[1],
  },
  {
    type: 'receive',
    amount: 53046,
    currency: 'Kzs',
    transactionDate: '11/03/2022',
    message:
      'eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum',
    origin: users[3],
  },
  {
    type: 'receive',
    amount: 47409,
    currency: '$',
    transactionDate: '05/11/2022',
    message: 'vel ipsum praesent blandit lacinia erat vestibulum sed magna at',
    origin: users[1],
  },
  {
    type: 'payment',
    amount: 14127,
    currency: '$',
    transactionDate: '28/01/2022',
    entityName: 'Devcast',
  },
  {
    type: 'receive',
    amount: 73089,
    currency: 'Kzs',
    transactionDate: '16/09/2021',
    message:
      'lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem',
    origin: users[1],
  },
  {
    type: 'receive',
    amount: 95246,
    currency: 'Kzs',
    transactionDate: '05/01/2021',
    message:
      'at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel',
    origin: users[2],
  },
  {
    type: 'receive',
    amount: 62804,
    currency: '$',
    transactionDate: '04/07/2022',
    message:
      'sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices',
    origin: users[7],
  },
  {
    type: 'receive',
    amount: 42640,
    currency: 'Kzs',
    transactionDate: '27/10/2021',
    message:
      'faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo',
    origin: users[5],
  },
  {
    type: 'send',
    amount: 47204,
    currency: 'Kzs',
    transactionDate: '10/01/2022',
    message:
      'in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis',
    destination: users[7],
  },
];

export default allActivities;
