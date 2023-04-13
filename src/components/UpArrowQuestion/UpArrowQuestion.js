import PropTypes from "prop-types";

const UpArrowQuestion = (props) => {
    const { upArrowButton } = props
    const handleChatBot = (e) => {
        e.preventDefault();
        window.zE('messenger', 'open');
    }

    return (
        <>
            {upArrowButton &&
                <div className="pullUp" onClick={(e) => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <b className="icon-arrow-right" />
                </div>}
            <div className="quickFAQ" onClick={(e) => handleChatBot(e)}>
                <p>Questions?</p>
                <span>Talk to Us</span>
            </div>
        </>
    )
}

UpArrowQuestion.prototype = {
    upArrowButton: PropTypes.bool
}

UpArrowQuestion.defaultProps = {
    upArrowButton: true
}

export default UpArrowQuestion;