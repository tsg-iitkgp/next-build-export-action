import * as Icon from "react-feather";

export default function Footer() {
  return (
    <section className="footer">
      <ul>
        <li>
          <p>
            Technology Students' Gymkhana <br /> IIT Kharagpur, Kharagpur <br />
            West Bengal - 721302
          </p>
          <a href="https://www.facebook.com/TSG.IITKharagpur" target="_blank" rel="noreferrer noopener">
            <Icon.Facebook size={24} />
          </a>
          <a href="https://twitter.com/tsg_iitkgp" target="_blank" rel="noreferrer noopener">
            <Icon.Twitter size={24} />
          </a>
          <a href="https://github.com/tsg-iitkgp/tsg-site" target="_blank" rel="noreferrer noopener">
            <Icon.GitHub size={24} />
          </a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="http://www.iitkgp.ac.in/" target="_blank" rel="noopener noreferrer">
            IITKGP Website
          </a>
        </li>
        <li>
          <a href="https://erp.iitkgp.ernet.in/" target="_blank" rel="noopener noreferrer">
            ERP
          </a>
        </li>
        <li>
          <a href="https://iitkgpmail.iitkgp.ac.in/" target="_blank" rel="noopener noreferrer">
            Zimbra webmail
          </a>
        </li>
        <li>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSft9FXZYvLiNt3oy0K3Iu4d6HoE830RhNWFHMXx1R4IjlhHKA/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            Grievance Form
          </a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="https://wiki.metakgp.org/w/Yellow_pages/" target="_blank" rel="noopener noreferrer">
            Your Dost
          </a>
        </li>
        <li>
          <a href="http://www.hmc.iitkgp.ac.in/web/" target="_blank" rel="noopener noreferrer">
            Hall Management Centre
          </a>
        </li>
        <li>
          <a href="https://wiki.metakgp.org/w/Yellow_pages" target="_blank" rel="noopener noreferrer">
            Yellow Pages
          </a>
        </li>
        <li>
          <a href="http://www.counsellingcentre.iitkgp.ac.in/" target="_blank" rel="noopener noreferrer">
            Counselling Centre
          </a>
        </li>
      </ul>
    </section>
  );
}
