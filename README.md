# React Todo App with Optimized Rendering

A lightweight Todo application built with React, TypeScript, and Vite that demonstrates performance optimization techniques through minimal re-renders.

## Features

- Add, toggle, and delete todos
- Render count tracking for performance monitoring
- Optimized component re-renders using:
  - `useMemo` for computed values
  - `useCallback` for event handlers
  - `memo` for component memoization

## Performance Optimizations

The app implements several React performance best practices:

1. The `TodoItem` component is wrapped in `memo` to prevent unnecessary re-renders when other todos change
2. Event handlers are memoized using `useCallback`
3. Todo statistics are computed efficiently using `useMemo`
4. Each component tracks its render count for demonstration purposes

## Technical Stack

- React 18.3
- TypeScript
- Vite
- CSS Modules

## Purpose

This project was created as a quick programming exercise to demonstrate React optimization techniques in a practical context. It's meant to be educational and fun, showing how to build a performant React application with minimal re-renders.

Feel free to use this as a reference for implementing performance optimizations in your own React applications!

## Getting Started

```bash
npm install
npm run dev
```

 

