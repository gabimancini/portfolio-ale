const Sticky = ({ className, text, title }) => {
    return (
        <div className={className}>
            <h3 className="font-size-18 text-center">{title}</h3>
            <p className="font-size-paragraph color-black-aplha-6">{text}</p>
        </div>
    )
}
export default Sticky;