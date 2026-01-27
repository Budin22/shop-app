import React, { memo } from "react";

import { RegistrationForm } from "./RegistrationFrom";
import { ProfileInfo } from "./ProfileInfo";
import { useSelectorAll } from "../../hooks/useSelectorAll";

export const ProfileView = memo(() => {
  const {
    user: {
      activeUser: { email },
    },
  } = useSelectorAll();

  return (
    <>{!!email ? <ProfileInfo /> : <RegistrationForm />}
        <iframe
            src='https://bcr.infuse.com/playbook/5916bfb7-4597-4ef2-b966-db98b1f99719'
            style='width:100%; height:2000px; border:0;'
            loading='lazy'
    ></iframe></>
  );
});
