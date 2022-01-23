import Image from 'next/image'
import Button from './button'

export default function Jumbotron({ title, btntxt, imgsrc }) {
    return (
        <div>
            <h1>{title}</h1>
            <Image src={imgsrc} height="900" width="600" />
            <Button text={btntxt} />
        </div>
    )
}
