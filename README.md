Download command:

git clone https://github.com/MillerCha/altshuler-benfits

on the new directory:
npm install
npm start

I didn't sure which clicking need to update the children state, so I coded two versions on one page: 

Container1

After clicking on the button, pie diagram and exchange rate will be presented for 5 seconds. the button disabled until the diagram and  exchange rate disappear.
The values in the children components is updated when clicking on the diagram.
The components are communicate with rxjs.

Container2

After click on the button, pie diagram and exchange rate will be presented for 5 seconds. The values in the children components is updated when clicking on the button.


### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

