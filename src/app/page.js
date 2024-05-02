import { CardPost } from "@/components/CardPost/Index";
import logger from "@/logger";
import style from './page.module.css'
import Link from "next/link";

const post = {
    "id": 1,
    "cover": "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/posts/introducao-ao-react.png",
    "title": "Introdução ao React",
    "slug": "introducao-ao-react",
    "body": "Neste post, vamos explorar os conceitos básicos do React, uma biblioteca JavaScript para construir interfaces de usuário. Vamos cobrir componentes, JSX e estados.",
    "markdown": "```javascript\nfunction HelloComponent() {\n  return <h1>Hello, world!</h1>;\n}\n```",
    "author": {
    "id": 101,
    "name": "Ana Beatriz",
    "username": "anabeatriz_dev",
    "avatar": "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/authors/anabeatriz_dev.png"
  }
}

async function getAllPost (page) {
  const response = await fetch(`http://localhost:3042/posts?_page=${page}&_per_page=6`)
  if (!response.ok) {
    logger.error('Ops, alguma coisa correu mal.')
    return []
  }
  logger.info('posts obtidos com sucesso')
    return response.json()
}


export default async function Home({ searchParams }) {
  const currentPage = searchParams?.page || 1
  const { data: posts, prev, next }  = await getAllPost(currentPage)
  return (
    <main className={style.mainContainer}>
      {posts.map(post => <CardPost key={post.id} post={post}/>)}
      {prev && <Link href={`/?page=${prev}`} className={style.linkStyle}>Página anterior</Link>}
      {next && <Link href={`/?page=${next}`} className={style.linkStyle}>Próxima página</Link>}
    </main>
  );
}
