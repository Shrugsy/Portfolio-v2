import React from "react";
import Banner from "../components/Banner";

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import ContactItem from "../components/ContactItem";


const Contact = props => {
  return (
    <React.Fragment>
      <Banner title={"Contact"} color={"#F79B00"} />
      <div className="container content">
        <p>Please view my other links and feel free to contact me below:</p>
        <ContactItem 
          icon={<GitHubIcon fontSize="large" />}
          title={'Github'}
          href={'https://github.com/Shrugsy'}
          content={'https://github.com/Shrugsy'}
        />
        <ContactItem 
          icon={<LinkedInIcon fontSize="large" />}
          title={'LinkedIn'}
          href={'https://www.linkedin.com/in/josh-fraser-0533721a1/'}
          content={'https://www.linkedin.com/in/josh-fraser-0533721a1/'}

        />
        <ContactItem
          icon={<PhoneIcon fontSize="large" />}
          title={"Phone"}
          href={"tel:0450-702-072"}
          content={"0450 702 072"}
        />
        <ContactItem
          icon={<EmailIcon fontSize="large" />}
          title={"Email"}
          href={"mailto: joshfraser91@gmail.com"}
          content={"joshfraser91@gmail.com"}
        />
      </div>
    </React.Fragment>
  );
};
export default Contact;
