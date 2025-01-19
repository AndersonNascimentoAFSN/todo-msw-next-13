import { ITodo } from "@/http/getTodo"
import { http, HttpResponse } from "msw"
import { todoData } from "../data/todoData"

type Params = never
type RequestBody = never

export const domainTodo = [
  http.get<Params, RequestBody, ITodo[]>('*/todo', ({ request }) => {
      return HttpResponse.json(todoData, {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      })
    }
  ),
]