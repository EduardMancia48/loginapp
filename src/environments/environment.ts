// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: { 
    authDomain: "loginapp-29ed6.firebaseapp.com",
    databaseURL: "https://loginapp-29ed6.firebaseio.com",
    projectId: "loginapp-29ed6",
    storageBucket: "loginapp-29ed6.appspot.com",
    messagingSenderId: "859768790495"
  }
};
