import React from "react";
import { useSelector } from "react-redux";

import Image from "react-bootstrap/Image";

export default function RightNavbar() {
  const user = useSelector((state) => state.user);
  const hasBackground = user.background;
  const emails = user.emails;

  return (
    <div className="rightnav">
      <div className="box">
        {hasBackground ? (
          <Image className="background" src={user.background} />
        ) : (
          <div className="default-background" />
        )}
        <Image className="avatar" src={user.avatar} />
      </div>
      <div className="name">
        {user.firstName} {user.lastName}
      </div>
      <div className="email-box">
        {emails &&
          emails.map((emails) => (
            <div className="email" key={emails}>
              {emails}
            </div>
          ))}
      </div>
    </div>
  );
}
