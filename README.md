# nc-firebase-backend
Firebase backend template: multi hosting, functions, typescript

# Install 
```
npm install
```

# Deploy

## Deploy hosting

### Deploy `frontend-default`

- Create build first
```
cd frontend-default
npm install
npm run build
```

- Deploy 
```
npm run deploy:frontend-default
```

### Deploy `frontend-dashboard`

- Create build first
```
cd frontend-dashboard
npm install
npm run build
```

- Deploy 
```
npm run deploy:frontend-dashboard
```

### Deploy cloud functions

```
cd functions
npm install
npm run build
npm run deploy
```

# Config emulator

https://firebase.google.com/docs/emulator-suite/install_and_configure

```
$ export GOOGLE_APPLICATION_CREDENTIALS="path/to/key.json"
$ npm start
```