CREATE APPLICATION
JS 
- npx create-react-app rx-1louve-fan
TYPESCRIPT
- npx create-react-app rx-1louve-fan-tsx --typescript


STATE MANAGEMENT
- npm i redux
- npm install react-redux

- REDUX MIDDLEWARES
	npm i redux-thunk
	npm i redux-logger

ROUTER
- npm install react-router-dom

UI COMPONENTS
- https://react-bootstrap.github.io/
- npm i bootstrap
- npm install react-bootstrap 


RESOURCES
SSR - https://alligator.io/react/server-side-rendering/

REACT-DEPLOY-FIREBASE 
- https://medium.com/swlh/how-to-deploy-a-react-app-with-firebase-hosting-98063c5bf425

BEST GUIDE FOUND FOR FOLDER STRUCTURE
- https://levelup.gitconnected.com/structure-your-react-redux-project-for-scalability-and-maintainability-618ad82e32b7

- https://www.freecodecamp.org/news/scaling-your-redux-app-with-ducks-6115955638be/



FIREBASE INTEGRATION -
Follow https://css-tricks.com/building-a-real-time-chat-app-with-react-and-firebase/




FAQ's

Should I put form state or other UI state in my store?
The same rules of thumb for deciding what should go in the Redux store apply for this question as well.
Based on those rules of thumb, most form state doesn't need to go into Redux, as it's probably not being shared between components. However, that decision is always going to be specific to you and your application. You might choose to keep some form state in Redux because you are editing data that came from the store originally, or because you do need to see the work-in-progress values reflected in other components elsewhere in the application. On the other hand, it may be a lot simpler to keep the form state local to the component, and only dispatch an action to put the data in the store once the user is done with the form.
Based on this, in most cases you probably don't need a Redux-based form management library either. We suggest trying these approaches, in this order:
	•	Even if the data is coming from the Redux store, start by writing your form logic by hand. It's likely this is all you'll need. (See Gosha Arinich's posts on working with forms in React for some excellent guidance on this.)
	•	If you decide that writing forms "manually" is too difficult, try a React-based form library like Formik or React-Final-Form.
	•	If you are absolutely sure you must use a Redux-based form library because the other approaches aren't sufficient, then you may finally want to look at Redux-Form and React-Redux-Form.
