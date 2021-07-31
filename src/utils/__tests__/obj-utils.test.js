import {sumar} from '../obj-utils'


describe('obj-utils', () => {

    test('Cuando sumar es llamado', () => {
        const result = sumar(3, 2);
        expect(result).toEqual(5);
    });
})

