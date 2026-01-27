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
        src="https://bcr.infuse.com/playbook/2f3c5645-11f4-4d89-be82-3386b0cac110/f6e0610c-0bd2-4644-b10f-87028109eea3"
        width="900"
        height="785"
        title="Iframe Example"
    ></iframe></>
  );
});
