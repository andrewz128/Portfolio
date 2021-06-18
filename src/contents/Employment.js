import React, { Component } from "react";
import Widecard from "../components/Widecard";

class Education extends Component {
  render() {
    return (
      <div className="condiv">
        <h1 className="subtopic">Employment History</h1>
        <Widecard
          title="Electronic Systems Specialist"
          where="Donetsk National Technical Univercity"
          from="2007"
          to="2012"
        />
        <Widecard
          title="Web Developer, Co-founder"
          where="Aheading-gaming"
          from="May 2012"
          to="Sep 2014"
        />
        <Widecard
          title="Frontend Developer"
          where="Esportsfield"
          from="Jul 2016"
          to="May 2017"
        />
        <Widecard
          title="Frontend Developer"
          where="Empeek - enterprise-level web development"
          from="Sep 2017"
          to="Jan 2018"
        />
        <Widecard
          title="Software Engineering"
          where="Ummannu"
          from="Jun 2019"
          to="Present"
        />
      </div>
    );
  }
}

export default Education;
