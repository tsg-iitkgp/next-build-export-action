import * as Icon from "react-feather";
import ImageModal from "./imageModal";

export default function Card(props) {
  return (
    <div
      className="card"
      // onClick={() => Router.push(`/societies/${props.shortform}`)}
    >
      <div className="intro">
        <ImageModal images={`awards/${props.RollNo}.png`} description={props.Proposal} />
        {/* <img src={require(`../public/societies/${props.shortform}.png`)} alt={`Picture of ${props.name}`} /> */}
      </div>

      <div className="card-content">
        <h3>
          <span>
            {props.Name} | {props.Hall} {props.Description}
          </span>
        </h3>
        <hr />
        <a href={props.FacebookLink} target="_blank" rel="noreferrer noopener">
          <Icon.Facebook />
        </a>
        <a href={props.ProposalLink} target="_blank" rel="noreferrer noopener">
          &thinsp;&thinsp;
          <Icon.Airplay />
        </a>
        <a href={`mailto:${props.Email}`} target="_blank" rel="noreferrer noopener">
          &thinsp;&thinsp;
          <Icon.Mail />
        </a>
      </div>
    </div>
  );
}
