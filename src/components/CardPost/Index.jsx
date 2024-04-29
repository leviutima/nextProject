import Image from "next/image"
import { Avatar } from "../Avatar/Index"
import style from './CardPost.module.css'

export const CardPost = ({ post }) => {
    return(
        <article className={style.articleContainer}>
            <header className={style.headerContainer}>
                <figure >
                    <Image className={style.image} src={post.cover} width={438} height={133} alt={`capa do post do titulo ${post.title}`}/>
                </figure>
            </header>
            <section className={style.sectionContainer}>
                <div className={style.textContainer}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            </section>
            <footer className={style.footerContainer}>
                <Avatar 
                    imageSrc={post.author.avatar} 
                    name={post.author.username}
                />
            </footer>
        </article>
    )
}