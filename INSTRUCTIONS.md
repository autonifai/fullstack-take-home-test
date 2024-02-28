# FE test

## Development

### Setup

We're using [asdf](https://asdf-vm.com/) to develop this app. Assuming you've installed it, run the following.

```bash
$ asdf install #install the correct version of node
$ npm install #install the FE's dependencies
```

After this, you should be able to run the commands available further in this document.

### Bootstrap

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run any of the scripts available in the [package.json](/package.json):

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Architecture

The intention here is to create an architecture inspired by (clean architecutre)[https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html]. For this, a folder will be roughfly equivalent to a layer.

Most folders will be numbered, and this numbers indicates how the files within that folder use[1] files on other folders.

Usage can only happen between same-number folders (N), or on a folder that has a number immediatly lower (N - 1). This way we mimick the dependency rule.

Cross-cutting concern files will be put in a zero-nuber folder (N = 0), and can be used by any other numbered folder.

## Type integrity is prefered over the dependency rule

An important exception for this rule is refering to the models. Our models are on the lowest non-zero folder but to keep type integrity they might be refed on other folders.

## React is the dictating framework

This app is tied to react. This is obvious on the ui layer, but keep in mind that other layers might take advantage of this too.

In in this case, the stores are also related to react but conceptually they are not UI-related, so they are in difffernt folders

[1]: Using `index.{ts,tsx}` files within a folder indicate that that file is the public API, which, in most cases, should be the only file accessed in the folder. And because it's an index file, we can import just the folder it stands for.
