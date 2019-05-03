What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

    PropTypes checks to see if the props being passed in to a component are a certain type. It's important to type check our data in Javascript because Javascript is a wack language. Most languages would deal with this problem by caring about what type the function is expecting, but Javascript is the Wild West and just starts casting types for no reason until it "works". For example, [1,2]+[3,4] is an invalid operation in Javascript, but instead of throwing an error it starts typecasting things in to strings and returns "1,23,4".

Describe a life-cycle event in React?

    The lifecycle of a React component involves 3 "phases". The mounting phase, updating phase, and unmounting phase. During the mounting phase it runs its constructor, checks its inherited state from props, invokes the render method, and calls ComponentDidMount. The Updating phase runs when new props are passed in, state is updated, or an update is forced. It updates the State then runs the render method again, as well as shouldComponentUpdate. The Unmounting phase takes place when the component is removed from the screen. It runs the componentWillUnmount method.

Explain the details of a Higher Order Component?

    A Higher Order Component is basically a Higher Order Function. It's just a way for us to pass components in to other components and perform operations on them or with them. The example we've used so far is passing two components in to another and allowing that component to decide which gets rendered on the screen.

What are three different ways to style components in React? Explain some of the benefits of each.

    Vanilla CSS pages: You don't need to know anything more than vanilla CSS to check it, and it doesn't have to be compiled by anything.

    Preprocessed CSS: Comes with all the advantages of whichever preprocessor you use. Nesting, variables, "functions", basic logic in SASS, etc.

    Styled Components: The styling for each component can be housed directly in the JS file, which might make it easier to keep track of. THe nice thing is that it prevents other styling pages from messing with your elements, because they're not built with class names.