import fetchMock from 'jest-fetch-mock';
import CUD from './http-client';
import { faker } from '@faker-js/faker';

fetchMock.enableMocks();

describe('HTTP Client', () => {
  describe.each([
    ['GET', CUD.get],
    //  [CUD.delete],
    //  [CUD.post]
  ])('Test method %s', (name, method) => {
    beforeEach(() => {
      //@ts-ignore
      fetch.resetMocks(); // Reset the mock before each test
    });

    it('fetches json', async () => {
      const payload = { information: 'Mocked data' };

      //@ts-ignore
      fetch.mockResponseOnce(JSON.stringify(payload), {
        headers: { 'Content-Type': 'application/json' },
      });

      const { data, error } = await method<typeof payload>('test');

      expect(data).toStrictEqual(payload);
      expect(error).toBeUndefined();
    });

    it('fetches pdf', async () => {
      //@ts-ignore
      fetch.mockResponseOnce('fake-pdf', {
        headers: { 'Content-Type': 'application/pdf' },
      });

      const { data, error } = await method<File>('test');

      expect(data!.name).toEqual(
        `${process.env.REACT_APP_APP_API_BASE_URL}/test`,
      );
      expect(error).toBeUndefined();
    });

    it('fetchs something unknown', async () => {
      const type = faker.string.uuid();

      //@ts-ignore
      fetch.mockResponseOnce('fake-pdf', {
        headers: { 'Content-Type': type },
      });

      const { data, error } = await method('test');

      expect(data).toBeUndefined();
      expect(error!.message).toEqual(`Unsuppported content type: ${type}`);
    });

    it('process a non-okay code', async () => {
      const statusText = 'status differnt than 200';

      //@ts-ignore
      fetchMock.mockResponse('', { status: 500, statusText });

      const { data, error } = await method('test');

      expect(data).toBeUndefined();
      expect(error!.message).toContain(statusText);
    });

    it('process an error', async () => {
      const message = 'throwed error';

      //@ts-ignore
      fetch.mockReject(new Error(message));

      const { data, error } = await method('test');

      expect(data).toBeUndefined();
      expect(error!.message).toEqual(message);
    });
  });
});
