import { Factory } from 'rosie';
import { faker } from '@faker-js/faker';
import { Invoice } from './invoice.schema';

const factory = Factory.define<Invoice>('Invoice')
  .attrs({
    id: faker.number.int,
    vendor: faker.company.name,
    description: faker.commerce.product,
    date_of_issue: () => faker.date.past({ years: 0.5 }),
    due_date: () => faker.date.past({ years: 0.5 }),
    total_amount: () =>
      faker.number.float({ fractionDigits: 2, min: 100, max: 10_000 }),
    currency: faker.finance.currencyCode,
  })
  .attr('number', ['id'], (id) => `INV-${id}`);

const possibilities = {
  random(size: number) {
    return factory.buildList(size);
  },
};

export default possibilities;
