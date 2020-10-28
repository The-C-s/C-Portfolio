import React, { useState, useEffect } from 'react';

import { faGraduationCap, faBriefcase, faEdit } from '@fortawesome/free-solid-svg-icons';

import ProfileBarLink from './ProfileBarLink';
import LinkedUL from './LinkedUL';

export default function ProfileBar({
  user,
  profile,
  condensed,
  condensedTitle,
  clickHandler,
  section
}) {

  const [activeSection, setActiveSection] = useState('showcase');

  useEffect(() => {
    if (section !== activeSection) setActiveSection(section);
  },[section, activeSection, setActiveSection]);

  return(
    <div className={`profilebar${condensed ? ' profilebar-condensed' : ''}`}>
      <div className="profilebar-logo">
        <img src={profile.logo} alt="Logo"/>
      </div>
      <div className="profilebar-content">
        <div className="profilebar-title">
          <span className="separator">/</span><strong>{condensedTitle}</strong>
        </div>
        <div className="profilebar-name" onClick={() => clickHandler('share-showcase')}>
          {user.firstName} {user.lastName}
        </div>
        {profile.bio &&
          <div className="profilebar-headline">
            {profile.bio}
          </div>}
        <div className="profilebar-item" onClick={() => clickHandler('share-education')}>
            <ProfileBarLink label="Education" icon={faGraduationCap} active={activeSection === 'education'}/>
          <LinkedUL values={profile.education}/>
        </div>
        <div className="profilebar-item" onClick={() => clickHandler('share-experience')}>
            <ProfileBarLink label="Experience" icon={faBriefcase} iconSize="sm" active={activeSection === 'experience'}/>
          <LinkedUL values={profile.experience}/>
        </div>
        <div className="profilebar-item" onClick={() => clickHandler('share-projects')}>
          <ProfileBarLink label="Projects" icon={faEdit} iconSize="sm" active={activeSection === 'projects'}/>
        </div>
      </div>
    </div>
  );
}
