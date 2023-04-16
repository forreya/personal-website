
const AnimatedText = ({text, className=""}) => {
  return (
    <div className="">
      <h1 className={`inline-block w-full text-dark font-bold capitalize text-8xl ${className}`}>
        {
          text.split(" ").map((word,index) => {
            return (
              <span key={word+'-'+index} className="inline-block ">
                {word}&nbsp;
              </span>
            )
          })
        }
      </h1>
    </div>
  )
}

export default AnimatedText