import React, { Component } from 'react';
import SkillList from './components/SkillList.js'
import Skills from './components/Skills.js'
import {skills, eduList, jobsList} from './data/datasource.js'
import Education from './components/Education.js'
import Jobs from './components/Jobs.js'

class App extends Component {

_generateSkillJsx(){
  const skillsArrayJsx = this.props.skillList.map(function(skillStr, i){
    return <Skills mariaSkill={skillStr} key={i}/>
  })
  return skillsArrayJsx
}

__generateEducation(){
  const educationArrayJsk = this.props.completeEdu.map(function(eduObj, i){
    //console.log(eduObj.institute)
    return <Education
    school = {eduObj.institute}
    degree = {eduObj.fieldOfStudy}
    year = {eduObj.dates}
    key = {i}
    />
  })
  return educationArrayJsk
}

__generateJob(){
  const jobsArrayJsx = this.props.fullCv.map(function(jobsObj, i){
  console.log(jobsObj.description)
  return <Jobs
  end = {jobsObj.years.end}
  start = {jobsObj.years.start}
  jobTitle = {jobsObj.title}
  company = {jobsObj.company}
  description = {jobsObj.description}
  key = {i}
  />
  })
  return jobsArrayJsx
}

  render() {
    //console.log(this.props.completeEdu)
    return (
      <div className="App" id="app-container">

        <section>
          <SkillList />
          <div className="skills-list">
            { this._generateSkillJsx() }
          </div>
        </section>

        <section>
          <h4>Education</h4>
          <div className="degree-list">
            { this.__generateEducation() }
          </div>
        </section>

        <section>
          <h4>Work Experience</h4>
          <div className="job-timeline">
            { this.__generateJob() }
          </div>
        </section>
      </div>
    );
  }
}

export default App;
