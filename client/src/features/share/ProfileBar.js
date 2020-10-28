import React from 'react';

import { faGraduationCap, faBriefcase, faEdit } from '@fortawesome/free-solid-svg-icons';

import ProfileBarLink from './ProfileBarLink';
import LinkedUL from './LinkedUL';

export default function ProfileBar({ user, profile, condensed, condensedTitle, clickHandler, refs }) {

  return(
    <div className={`profilebar${condensed ? ' profilebar-condensed' : ''}`}>
      <div className="profilebar-logo">
        <img src={profile.logo} alt="Logo"/>
      </div>
      <div className="profilebar-content">
        <div className="profilebar-title">
          <span className="separator">/</span><strong>Title</strong>
        </div>
        <div className="profilebar-name" onClick={() => clickHandler(refs.showcase)}>
          {user.firstName} {user.lastName}
        </div>
        {profile.bio &&
          <div className="profilebar-headline">
            {profile.bio}
          </div>}
        <div className="profilebar-item" onClick={() => clickHandler(refs.education)}>
            <ProfileBarLink label="Education" icon={faGraduationCap}/>
          <LinkedUL values={profile.education}/>
        </div>
        <div className="profilebar-item" onClick={() => clickHandler(refs.experience)}>
            <ProfileBarLink label="Experience" icon={faBriefcase}/>
          <LinkedUL values={profile.experience}/>
        </div>
        <div className="profilebar-item" onClick={() => clickHandler(refs.projects)}>
          <ProfileBarLink label="Projects" icon={faEdit} iconSize="sm"/>
        </div>
      </div>
    </div>
  );
}
