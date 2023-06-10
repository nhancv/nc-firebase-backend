# nc-firebase-backend

Firebase backend template: multi hosting, functions, typescript

https://firebase.google.com/docs/functions/get-started?gen=1st

# Init setup

## Create Firebase app

- Visit https://console.firebase.google.com
- Create new project
- Go to project -> All products ->
  - Active hosting: Hosting -> Get started -> Continue
  - Active function: Functions -> Get started -> Continue
  - Active firestore: Firestore -> Create database -> Start in test mode -> Enable
- Project Overview -> Add new App -> Select Web
  - Fill app nickname
  - Check to 'Also setup Firebase hosting for this app'
  - Fill the site id
  - Register app

**Note**: For this demo, I'm using 2 sites: `frontend1` and `frontend2`

## Install libs

```
npm install -g firebase-tools
firebase login
```

## Update config

Change project default to Firebase app id in `.firebaserc` file

# Install

```
# at root
yarn install
```

# Deploy

## Deploy hosting

Here I'm using one `frontend` source code for multi sites.

### Prepare build first

```
cd frontend
yarn install
yarn build
cd ..
```

### Deploy `frontend1`

```
# at root
yarn deploy:frontend1
```

### Deploy `frontend2`

```
# at root
yarn deploy:frontend2
```

## Deploy cloud functions

### Develop function with emulator

https://firebase.google.com/docs/emulator-suite/install_and_configure

Start all emulators: auth, functions, firestore, hosting, pubsub, storage

```
# at root
export GOOGLE_APPLICATION_CREDENTIALS="path/to/key.json"
npm start
```

### Deploy functions to cloud

```
cd functions
yarn install
yarn build
yarn deploy
```

# Create new site

Assume the site name: `frontend-{site}`

## Generate template

```
npx create-react-app frontend-{site} --template typescript
```

## Install sass

Docs: https://create-react-app.dev/docs/adding-a-sass-stylesheet/

- Install sass

```
yarn add sass
```

- Rename `src/App.css` to `src/App.scss` and update `src/App.tsx` to import `src/App.scss`

## Develop

- Development

```
yarn install
yarn start
```

- Prepare to deploy

Remember build source before to deploy hosting

```
yarn build
```

## Define new hosting to Firebase

- Go to Firebase console -> Add new `Web` app -> Enable hosting -> Fill site id = `frontend-{site}` -> Register app
- Update `firebase.json` -> Add new hosting
- You now can run `firebase deploy --only hosting:frontend-{site}` to deploy or add shortcut to `package.json`
