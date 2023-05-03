import React from "react";

const Blog = () => {
    return (
        <div className="bg-light mt-2 p-2 rounded">
            <h2 className="text-center fst-italic fw-bold text-warning">Some Question and Answer</h2>
            <h3><span className="text-info">Que-1</span> The differences between uncontrolled and controlled components.</h3>
            <h6><span className="text-primary">Ans:</span> In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.</h6>
            <h3><span className="text-info">Que-2</span> How to validate React props using PropTypes?</h3>
            <h6><span className="text-primary">Ans:</span> props is an object passed to the component instance. propTypes is an object were you declare the types of the data under props. PropTypes it is an object packed with some utility - props type checker - functions to include in propTypes, so we don't reinvent the wheel.</h6>
            <h3><span className="text-info">Que-3</span> The difference between nodejs and express js.</h3>
            <h6><span className="text-primary">Ans:</span> NodeJS is a framework of JavaScript which is mainly used for working with the backend of our application or building the backend using JavaScript, whereas ReactJS is a JavaScript front-end library. It is mainly used for building the user interface or the frontend of our application</h6>
            <h3><span className="text-info">Que-4</span> What is a custom hook, and why will you create a custom hook?</h3>
            <h6><span className="text-primary">Ans:</span> A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks. we can reuse stateful logic easily across different components in an optimized and scalable format. Custom Hooks also produce a clean and structured codebase that reduces complexity and redundancy in your React project.</h6>
        </div>
    );
};

export default Blog;