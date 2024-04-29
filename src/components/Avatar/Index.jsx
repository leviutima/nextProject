import Image from "next/image"
import style from './Avatar.module.css'

export const Avatar = ({name, imageSrc}) => {
    return(
        <ul className={style.avatarContainer}>
            <li>
                <Image src={imageSrc} width={32} height={32} alt={`avatar do(da)${name}`}/>
            </li>
            <li>
                @{name}
            </li>
        </ul>
    )
}