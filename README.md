# Dev Stack Builder

Dev Stack Builder is a responsive web application where users can explore different development technologies and build their own technology stack.

## Live Website

[Live Link](YOUR_LIVE_LINK)

## GitHub Repository

https://github.com/sohag54/Assingment-5

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- React-Toastify
- Vite
- JSON

## Features

### 1. Explore Technologies

Users can explore different development technologies including frontend, backend, database, programming languages, styling, DevOps, and tools.

### 2. Build Your Own Stack

Users can add technologies to their stack, remove individual technologies, or remove all selected technologies.

### 3. Responsive Design

The website is responsive and works properly on desktop, tablet, and mobile devices.

## React Questions

### 1. What is JSX, and why is it used?

JSX is a syntax used in React that allows us to write HTML-like code inside JavaScript or TypeScript. It makes React components easier to write and understand.

### 2. What is the difference between State and Props?

Props are used to pass data from a parent component to a child component.

State is used to store and manage data that can change inside a component.

### 3. What is the use of useState in React?

`useState` is a React Hook used to create and manage state inside a component.

### 4. What is the use of useEffect in React?

`useEffect` is a React Hook used to perform side effects in a component, such as fetching data from a JSON file or API.

### 5. How does conditional rendering work in React?

Conditional rendering means showing different UI based on a condition.

For example:

```tsx
{stack.length === 0 ? (
  <p>Your stack is empty.</p>
) : (
  <p>Technologies selected.</p>
)}

###6 What is the purpose of keys in React lists?

Keys help React identify which items in a list have changed, been added, or removed.

For example:

{technologies.map((tech) => (
  <TechnologyCard
    key={tech.id}
    tech={tech}
  />
))}


### 7. What is the difference between controlled and uncontrolled components?

A controlled component has its form data controlled by React state.

An uncontrolled component stores its form data in the DOM itself.