import {describe, it} from 'node:test';
import assert from 'node:assert';
import {add} from './calc-service.js';

describe('calc-service', () => {
    it('should return a result of adding 2 numbers', () => {
        const result = add(1, 2);
        assert.equal(result, 3);
    });
});
