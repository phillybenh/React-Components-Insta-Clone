**Composing React Components and Passing Data Via Props**

* [Props Example](https://codesandbox.io/s/props-example-starter-gewvp)
* [Lecture Follow-along](https://codesandbox.io/s/composing-react-components-starter-bun8h)

* React components usually take data through `props`
    * `props` is an object or array of objects
    * data is injected with attribute-like syntax   

* Objects and Functions all the way down...
    * All components return an object
    * functions can be nested together into *component trees*
    * the *props chain* flows top to bottom
    * we need to make sure that we reference props in the proper manner as we pass data from one component to the next
    * this patern is called *props drilling*

* 