import TitleLetterContainer from "./TitleLetterContainer"

const HeaderTitle = ({ firstWord, secondWord }) => {
  return (
    <div data-scroll data-scroll-speed="-5">
      <TitleLetterContainer word={firstWord} variantsDelay={0.5} />
      <TitleLetterContainer
        word={secondWord}
        className="second-word"
        variantsDelay={0.7}
      />
    </div>
  )
}

export default HeaderTitle
