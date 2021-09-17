import React from "react";
import classNames from "classnames";

import './styles.scss';

type NewsStage = "complete" | "progress" | "planning";

type Props = {
    newsData: {
        planningDate: string;
        description: string;
        stage: NewsStage;
    }
}

const NewsRow = ({newsData}: Props) => {
    const {planningDate, description, stage} = newsData;
    
    return (
        <div className={classNames("news-row", `${stage}`)}>
            <span className="row-date">{planningDate}</span>
            <img className="row-image" src={`/svg/${stage}.svg`} alt="stageIcon" />
            <span className="row-description">{description}</span>
        </div>
    )
}

export default NewsRow;