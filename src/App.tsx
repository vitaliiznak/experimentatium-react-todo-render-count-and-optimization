import { memo, useCallback, useMemo, useState } from 'react'
import './App.css'
import { useRenderCount } from './hooks/useRenderCount'

type Todo = {
  id: number
  text: string
  completed: boolean
}

const TodoItem = memo(function TodoItem({
  todo,
  onToggle,
  onDelete
}: {
  todo: Todo
  onToggle: (id: number) => void
  onDelete: (id: number) => void
}) {
  useRenderCount(`TodoItem-${todo.id}`)
  
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  )
})

export default function App() {
  const renderCount = useRenderCount('App')
  const [todos, setTodos] = useState<Todo[]>([])
  const [newTodo, setNewTodo] = useState('')

  const handleToggle = useCallback((id: number) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }, [])

  const handleDelete = useCallback((id: number) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id))
  }, [])

  const handleAdd = useCallback(() => {
    if (newTodo.trim()) {
      setTodos(prevTodos => [
        ...prevTodos,
        {
          id: Date.now(),
          text: newTodo.trim(),
          completed: false
        }
      ])
      setNewTodo('')
    }
  }, [newTodo])

  const handleKeyPress = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter') {
        handleAdd()
      }
    },
    [handleAdd]
  )

  const stats = useMemo(() => {
    const total = todos.length
    const completed = todos.filter(todo => todo.completed).length
    return { total, completed }
  }, [todos])

  return (
    <div className="todo-app">
      <h1>Todo App (Renders: {renderCount})</h1>
      
      <div className="add-todo">
        <input
          value={newTodo}
          onChange={e => setNewTodo(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Add a new todo"
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      <div className="todo-list">
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        ))}
      </div>

      <div className="todo-stats">
        Total: {stats.total} | Completed: {stats.completed}
      </div>
    </div>
  )
}
