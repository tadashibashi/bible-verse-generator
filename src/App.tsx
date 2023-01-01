import React, { Dispatch, MouseEvent, AnimationEvent } from "react";
import ReactDOM from "react-dom/client"
import { connect, Provider } from "react-redux"
import { store, StoreState } from "./store";
import { VerseState, VerseAction, verseActions } from "./VerseSlice"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { colorActions, ColorState } from "./ColorSlice";
import { Action } from "redux";
import { Color, colorToString, genRandColor, genRandNonLightColor, } from "./Color";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

interface AppProps {
    setRandVerse(): void;
    setColor(color: Color): void;
    setTargetColor(color: Color): void;
    verse: VerseState;
    color: ColorState;
}

class App extends React.Component<AppProps, {error: any}> {
    constructor(props) {
        super(props);

        this.handleNextVerseClick = this.handleNextVerseClick.bind(this);
        this.handleAnimationEnd = this.handleAnimationEnd.bind(this);

        this.state = {
            error: null
        }
    }

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
    }

    handleNextVerseClick(event: MouseEvent<HTMLDivElement>) {
        this.props.setRandVerse();
        this.props.setTargetColor(genRandNonLightColor());
    }

    handleAnimationEnd(event: AnimationEvent<HTMLDivElement>) {
        const target = event.target as HTMLDivElement;
        try {
            if (target.classList.contains("fade-out")) {
                target.classList.remove("fade-out");
                target.classList.add("fade-in");
                target.querySelector(".text").textContent = this.props.verse.text;
                target.querySelector(".author").innerHTML = this.props.verse.ref + "<span class='version'> " + this.props.verse.version + "</span>";
                
            } else if (target.classList.contains("fade-in")) {
                target.classList.remove("fade-in");
            }
        } catch(e) {

        }
        void target.offsetWidth;
    }

    static getDerivedStateFromError(error) {
        return {
            error
        };
    }

    makeTwitterLink() {
        let link = "https://twitter.com/intent/tweet?text=\"";
        link += this.props.verse.text + "\" ";
        link += this.props.verse.ref + "&hashtags=";
        link += "bible," + this.props.verse.type;
        return link;
    }

    componentDidMount() {
        // this.props.setRandVerse();
        // this.props.setTargetColor(genRandColor());
        const newVerseButton = document.getElementById("new-quote");
        newVerseButton.click();
        newVerseButton.click();

    }

    
    override componentDidUpdate() {
        const quote = document.querySelector(".quote") as HTMLDivElement;

        if (!quote) return;

        quote.classList.remove("fade-out", "fade-in");
        void quote.offsetWidth;
        quote.classList.add("fade-out");
    }

    override render() {
        const colorString = colorToString(this.props.color.target);

        return (

            <div id="verses-app" style={{backgroundColor: colorString}}>
                <div id="quote-box">
                    <div className="quote"
                        onAnimationEnd={this.handleAnimationEnd}
                        style={{color: colorString}}>
                        <p id="text" className="text">{this.props.verse.lastState.text}</p>
                        <p id="author" className="author">{this.props.verse.lastState.ref} 
                            <span className="version">{" " + this.props.verse.lastState.version}</span>
                        </p>
                    </div>
                    <div className="buttons fade-in">
                        <div id="tweet-quote-button" className="button share-button">
                            <a id="tweet-quote" href={this.makeTwitterLink()} target="_blank">
                                <FontAwesomeIcon icon={faTwitter} color={colorString} className="icon" />
                            </a>
                        </div>
                        <div className="button share-button">
                            <FontAwesomeIcon icon={faCopy} style={{color: colorString}} className="icon" />
                        </div>
                        <div className="button" id="new-quote" onClick={this.handleNextVerseClick}
                            style={{backgroundColor: colorString}}
                            >Next</div>
                    </div>

                </div>
            </div>
        );
    }
}

// ===== Redux integration ====================================================

function mapStateToProps(state: StoreState): Partial<AppProps> {
    return {
        verse: state.verse,
        color: state.color
    };
}

function mapDispatcherToProps(dispatch: Dispatch<Action>): Partial<AppProps> {
    return {
        setRandVerse() {
            dispatch(verseActions.setRandVerse());
        },
        setColor(color: Color) {
            dispatch(colorActions.setColor(color));
        },
        setTargetColor(color: Color) {
            dispatch(colorActions.setTargetColor(color));
        }
    }
}

const Container = connect(mapStateToProps, mapDispatcherToProps)(App);

class AppWrapper extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Provider store={store}>
                <Container />
            </Provider>
        );
    }
}

// ===== Entry-point ==========================================================

export function render() {
    const el = document.getElementById("app");
    if (!el) {
        console.error("Failed to load app, could not find app element");
        return;
    }
    const root = ReactDOM.createRoot(el);
    root.render(<AppWrapper />);
}
function querySelector(arg0: string) {
    throw new Error("Function not implemented.");
}

