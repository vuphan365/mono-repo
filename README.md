## Install

```
npm install -g lerna
lerna init && npm install
lerna create lib-a
cd packages/ && npx create-next-app@latest
npm install lib-a -w my-app
npx lerna run dev --scope=lib-a
npx lerna watch -- lerna run dev --scope=my-app
```

## Publish

```
npm install --global verdaccio
```

TO DO

- install
- build
- dev
- publish
