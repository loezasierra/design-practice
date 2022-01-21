
export default function LabeledSection({ title, children }) {
    return (
        <>
            <h1>{title}</h1>
            {children}
        </>
    )
}
