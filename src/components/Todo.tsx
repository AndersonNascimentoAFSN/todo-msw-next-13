'use client'

import { useEffect, useState } from 'react'

import { getTodo, ITodo } from '@/http/getTodo'

import styles from './styles.module.css'

export function Todo() {
    const [todos, setTodos] = useState<ITodo[]>([])
  
    useEffect(() => {
      async function fetchTodoList() {
        const todos = await getTodo()
        if (todos) {
          setTodos(todos)
        }
      }
  
      void fetchTodoList()
    }, [])

  return (
    <div className={styles.container}>
    {todos.map((todo) => (
      <div key={todo.id} className={styles.card}>
        <h2>{todo.title}</h2>
        <p>{todo.description}</p>
        <button type="button" className={styles.button}>Remove</button>
      </div>
    ))}
  </div>
  )
}
