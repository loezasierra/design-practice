import Image from 'next/image'


export default function Clients({ images }) {
    return (
        <>
            {images.map(({ id, filePath }) => (
                <Image id={id} src={filePath} height="200" width="200" />
            ))}
        </>
    )
}
