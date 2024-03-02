import prisma from "@/lib/prisma";
import { TodosGrid } from "@/todos";

export const metadata = {
  title: 'Listado de Todos',
  description: 'SEO Title',
 };

export default async function RestTodosPage() {

  const todos = await prisma.todo.findMany({ orderBy: { description: 'asc' } });

  return (
    <div>
      <TodosGrid todos={ todos } />
    </div>
  );
}