import React, { useContext } from "react";
import Q1 from "./Q1";
import QSelection from "./QSelection";
import "../../styles/Questions.css";
import HeaderTab from "../../components/HeaderTab";
import { QuestionContext } from "../../contexts/QuestionContext";
import FooterTab from "../../components/FooterTab";
import CurrentResults from "../results/CurrentResults";
import FinalResults from "../results/FinalResults";

export default function Questions() {
    const context = useContext(QuestionContext);

    function displayQuestion(number) {
        switch (number) {
            case 1:
                return <Q1 />;
            case 2:
                return (
                    <QSelection
                        text="Select dish type"
                        type="type"
                        values={["soup", "main", "salad", "dessert"]}
                    />
                );
            case 3:
                return (
                    <QSelection
                        text="Want it spicy?"
                        type="spicy"
                        values={["yes", "no"]}
                    />
                );
            case 4:
                return (
                    <QSelection
                        text="Should the dish be vegetarian?"
                        type="veg"
                        values={["yes", "no"]}
                    />
                );
            default:
                return (
                    <FinalResults/>
                );
        }
    }

    function displayCurrentResults(isDisplayingResults) {
        if (isDisplayingResults)
            return (
                <div>
                    {/* Transparent screen helps to prevent user-clicks */}
                    <div className="transparent-screen" />
                    <CurrentResults />
                </div>
            );
    }

    return (
        <div className="questions">
            <div
                className={`questions-bkg + ${
                    context.isDisplayingResults ? "blurred" : ""
                }`}
            >
                <HeaderTab />
                {displayQuestion(context.question)}
                <FooterTab showButtons={context.question !== 1 && context.question < 5} />
            </div>
            {displayCurrentResults(context.isDisplayingResults)}
        </div>
    );
}
