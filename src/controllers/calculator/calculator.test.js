import request from 'supertest';
import app from '../../app';

const OPERATIONS = {
  ADD: 'Suma',
  SUB: 'Resta',
  MUL: 'Multiplicación',
  DIV: 'División',
};

const TEST = {
  ADD: {
    a: 1,
    b: 2,
    result: 3,
  },
  SUB: {
    a: 2,
    b: 1,
    result: 1,
  },
  MUL: {
    a: 2,
    b: 5,
    result: 10,
  },
  DIV: {
    a: 6,
    b: 2,
    result: 3,
  },
  DIV_ZERO: {
    a: 10,
    b: 0,
  },
};

const ACCEPT_JSON = ['Accept', 'application/json'];

describe('/calc', () => {
  const controller = 'calc';
  describe('/add', () => {
    const resource = 'add';
    const endpoint = `/${controller}/${resource}`;
    test('Código de respuesta 200', async () => {
      const { status } = await request(app)
        .post(endpoint)
        .set(...ACCEPT_JSON)
        .send(TEST.ADD);

      expect(status).toBe(200);
    });

    test(`'operation' debería de ser '${OPERATIONS.ADD}'`, async () => {
      const { status, body } = await request(app)
        .post(endpoint)
        .set(...ACCEPT_JSON)
        .send(TEST.ADD);

      expect(status).toBe(200);
      expect(typeof body.operation).toBe('string');
      expect(body.operation).toBe(OPERATIONS.ADD);
    });

    test(`'result' debería de ser = ${TEST.ADD.a} + ${TEST.ADD.b} = ${TEST.ADD.result}`, async () => {
      const { status, body } = await request(app)
        .post(endpoint)
        .set(...ACCEPT_JSON)
        .send(TEST.ADD);

      expect(status).toBe(200);
      expect(typeof body.operation).toBe('string');
      expect(body.operation).toBe(OPERATIONS.ADD);
      expect(typeof body.result).toBe('number');
      expect(body.result).toBe(TEST.ADD.result);
    });
  });

  describe('/sub', () => {
    const resource = 'sub';
    const endpoint = `/${controller}/${resource}`;
    test('Código de respuesta 200', async () => {
      const { status } = await request(app)
        .post(endpoint)
        .set(...ACCEPT_JSON)
        .send(TEST.SUB);

      expect(status).toBe(200);
    });

    test(`'operation' debería de ser '${OPERATIONS.SUB}'`, async () => {
      const { status, body } = await request(app)
        .post(endpoint)
        .set(...ACCEPT_JSON)
        .send(TEST.SUB);

      expect(status).toBe(200);
      expect(typeof body.operation).toBe('string');
      expect(body.operation).toBe(OPERATIONS.SUB);
    });

    test(`'result' debería de ser = ${TEST.SUB.a} - ${TEST.SUB.b} = ${TEST.SUB.result}`, async () => {
      const { status, body } = await request(app)
        .post(endpoint)
        .set(...ACCEPT_JSON)
        .send(TEST.SUB);

      expect(status).toBe(200);
      expect(typeof body.operation).toBe('string');
      expect(body.operation).toBe(OPERATIONS.SUB);
      expect(typeof body.result).toBe('number');
      expect(body.result).toBe(TEST.SUB.result);
    });
  });

  describe('/mul', () => {
    const resource = 'mul';
    const endpoint = `/${controller}/${resource}`;
    test('Código de respuesta 200', async () => {
      const { status } = await request(app)
        .post(endpoint)
        .set(...ACCEPT_JSON)
        .send(TEST.MUL);

      expect(status).toBe(200);
    });

    test(`'operation' debería de ser '${OPERATIONS.MUL}'`, async () => {
      const { status, body } = await request(app)
        .post(endpoint)
        .set(...ACCEPT_JSON)
        .send(TEST.MUL);

      expect(status).toBe(200);
      expect(typeof body.operation).toBe('string');
      expect(body.operation).toBe(OPERATIONS.MUL);
    });

    test(`'result' debería de ser = ${TEST.MUL.a} * ${TEST.MUL.b} = ${TEST.MUL.result}`, async () => {
      const { status, body } = await request(app)
        .post(endpoint)
        .set(...ACCEPT_JSON)
        .send(TEST.MUL);

      expect(status).toBe(200);
      expect(typeof body.operation).toBe('string');
      expect(body.operation).toBe(OPERATIONS.MUL);
      expect(typeof body.result).toBe('number');
      expect(body.result).toBe(TEST.MUL.result);
    });
  });

  describe('/div', () => {
    const resource = 'div';
    const endpoint = `/${controller}/${resource}`;
    test('Código de respuesta 200', async () => {
      const { status } = await request(app)
        .post(endpoint)
        .set(...ACCEPT_JSON)
        .send(TEST.DIV);

      expect(status).toBe(200);
    });

    test(`'operation' debería de ser '${OPERATIONS.DIV}'`, async () => {
      const { status, body } = await request(app)
        .post(endpoint)
        .set(...ACCEPT_JSON)
        .send(TEST.DIV);

      expect(status).toBe(200);
      expect(typeof body.operation).toBe('string');
      expect(body.operation).toBe(OPERATIONS.DIV);
    });

    test(`'result' debería de ser = ${TEST.DIV.a} / ${TEST.DIV.b} = ${TEST.DIV.result}`, async () => {
      const { status, body } = await request(app)
        .post(endpoint)
        .set(...ACCEPT_JSON)
        .send(TEST.DIV);

      expect(status).toBe(200);
      expect(typeof body.operation).toBe('string');
      expect(body.operation).toBe(OPERATIONS.DIV);
      expect(typeof body.result).toBe('number');
      expect(body.result).toBe(TEST.DIV.result);
    });

    test('No debería permitir divion por 0', async () => {
      const { status, body } = await request(app)
        .post(endpoint)
        .set(...ACCEPT_JSON)
        .send(TEST.DIV_ZERO);

      expect(status).toBe(400);
      expect(typeof body.operation).toBe('string');
      expect(body.operation).toBe(OPERATIONS.DIV);
      expect(typeof body.error).toBe('string');
      expect(body.error).toBe('No se permite división por cero');
    });
  });
});
