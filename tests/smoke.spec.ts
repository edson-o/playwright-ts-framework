import { test } from '../fixtures/test-fixture';

let name: string = 'testEdson';
let lastname: string = 'Ortiz';
let code: string = '123456';

test('login test @smoke', async ({ loginpage, homepage }) => {
    await loginpage.webSite();
    await loginpage.credential();
    await homepage.list(name,lastname,code);
})
