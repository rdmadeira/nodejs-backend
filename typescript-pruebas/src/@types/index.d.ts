declare module 'UserModule' {
  interface Usertype {
    name: string = 'Rodrigo';
    email: string;
  }
  declare namespace User {
    let name: string = 'Rodrigo';
    let email: string;
  }
}

declare namespace User2 {
  let name: string;
  let email: string;
}
