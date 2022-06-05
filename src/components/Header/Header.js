import React from "react";
import styled from "styled-components";

import Logo from "../Logo";
import UserMenu from "../UserMenu";

export default function Header() {
  return (
    <div>
      <Logo />
      <UserMenu />
    </div>
  );
}
