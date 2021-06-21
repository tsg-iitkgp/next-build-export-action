import * as Icon from "react-feather";
import Router from "next/router";
import ImageModal from "./imageModal";

export default function Card(props) {
  return (
    <div
      className="card"
      // onClick={() => Router.push(`/societies/${props.shortform}`)}
    >
      <div className="intro">
        <ImageModal
          images={`societies/${props.shortform}.png`}
          description={props.description}
          title={props.name}
          Heads={props.Heads}
        />
        {/* <img src={require(`../public/societies/${props.shortform}.png`)} alt={`Picture of ${props.name}`} /> */}
      </div>

      <div className="card-content">
        <h3>{props.name}</h3>
        <hr />
        <a href={props.facebook_link} target="_blank" rel="noreferrer noopener">
          <Icon.Facebook />
        </a>
        {props.website ? (
          <a href={props.website} target="_blank" rel="noreferrer noopener">
            <Icon.Airplay />
          </a>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
