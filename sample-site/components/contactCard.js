import * as Icon from "react-feather";

export default function Card(props) {
  return (
    <div className="card">
      <div className="intro">
        <img src={require(`../public/${props.Path}/${props.RollNo}.png`)} alt={`Picture of ${props.Post}`} />
        <span>{props.Name}</span>
      </div>

      <div className="card-content">
        <h3>
          {props.Post}
        </h3>
        <hr />
        {props.Post === "President" ? (
          <a href={props.Email} target="_blank" rel="noreferrer noopener">
            <Icon.Airplay />
          </a>
        ) : (
          <a href={`mailto:${props.Email}`} target="_blank" rel="noreferrer noopener">
            <Icon.Mail />
          </a>
        )}
      </div>
    </div>
  );
}
