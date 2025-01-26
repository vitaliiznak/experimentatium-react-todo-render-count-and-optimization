# React Todo App with Optimized Rendering

A lightweight Todo application built with React, TypeScript, and Vite that demonstrates performance optimization techniques through minimal re-renders.

## Features

- Add, toggle, and delete todos
- Render count tracking for performance monitoring
- Optimized component re-renders using:
  - `useMemo` for computed values
  - `useCallback` for event handlers
  - `memo` for component memoization
- Real-time render count visualization

## Performance Optimizations

The app implements several React performance best practices:

1. The `TodoItem` component is wrapped in `memo` to prevent unnecessary re-renders when other todos change
2. Event handlers are memoized using `useCallback`
3. Todo statistics are computed efficiently using `useMemo`
4. Each component tracks its render count for demonstration purposes
5. Component boundaries are strategically placed to minimize render scope

## Technical Stack

- React 18.3
- TypeScript
- Vite
- CSS Modules

## Purpose

This project was created as a quick programming exercise to demonstrate React optimization techniques in a practical context. It's meant to be educational and fun, showing how to build a performant React application with minimal re-renders.

The application serves as an interactive learning tool where developers can:
- Observe real-time render counts for each component
- Understand the impact of React's memoization techniques
- Learn practical implementation of React performance patterns

Feel free to use this as a reference for implementing performance optimizations in your own React applications!

## Getting Started

```bash
npm install
npm run dev
```

## Live Demo

Check out the [live demo](https://vitaliiznak.github.io/experimentatium-react-todo-render-count-and-optimization/) to see the optimization techniques in action.

 

