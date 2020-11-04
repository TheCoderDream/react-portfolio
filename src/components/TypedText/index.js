import React from 'react';
import './index.scss';

class TypedText extends React.Component {

    state = {
        text: '',
        isDeleting: false,
        loopNum: 1,
        typingSpeed: 150,
        cursor: '|'
    }

    componentDidMount() {
        this.handleType();
        this.handleCursor();
    }

    handleType = () => {
        const { dataText } = this.props;
        const { isDeleting, loopNum, text, typingSpeed } = this.state;
        const i = loopNum % dataText.length;
        const fullText = dataText[i];

        this.setState({
            text: isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1),
            typingSpeed: isDeleting ? 30 : 150
        });

        if (!isDeleting && text === fullText) {
            setTimeout(() => this.setState({ isDeleting: true }), 500);
        } else if (isDeleting && text === '') {
            this.setState({
                isDeleting: false,
                loopNum: loopNum + 1
            });
        }

        setTimeout(this.handleType, typingSpeed);
    };

    handleCursor = () => {
        this.setState(state => ({
            cursor: state.cursor === '|' ? '' : '|'
        }));

        setTimeout(this.handleCursor, 300)
    }

    render() {
        return (
            <>
                <span className="typed-text">{ this.state.text }<span className="typed-cursor">{this.state.cursor}</span></span>
            </>
        );
    }
}

export default TypedText;
