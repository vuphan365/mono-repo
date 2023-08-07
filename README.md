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
lerna version
lerna publish
```

## Versioning

- Use `^x.y.z` to link workspace version
- Use `x.y.z` to link to the old version in NPM Registry

## Code Owner

## Detect changes packages

## Bump version
