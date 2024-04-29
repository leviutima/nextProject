import Image from 'next/image'
import style from './Aside.module.css'
import logo from './logo.png'

export const Aside = () => {
    return(
        <aside className={style.aside}>
            <Image src={logo} alt='Logo do Code Connect'/>
        </aside>
    )
}