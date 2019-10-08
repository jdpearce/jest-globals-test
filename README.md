A repo that illustrates clobbering of the `globals` preset with the local configuration.

## To reproduce :

```bash
yarn #install dependencies
yarn test
```

You should see this error :

```
    Expected: 10
    Received: undefined

       6 |
       7 | test('expect global radix to be 10', () => {
    >  8 |   expect(global.config.radix).toBe(10);
         |                               ^
       9 | });
      10 |
      11 | test('expect PI to be 22/7', () => {
```
