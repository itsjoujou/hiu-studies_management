import React from "react";

import { Icon } from "@chakra-ui/react";
import {
  MdHome,
  MdLock,
} from "react-icons/md";

// User Imports
import Notes from "views/user/notes/list";

// Auth Imports
import SignInCentered from "views/auth/signIn";
import NoteForm from "views/user/notes/new";

const routes = [
  {
    name: "Notes",
    layout: "/user",
    path: "/note",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: Notes,
    navbar: true,
  },
  {
    name: "Nouvelle Note",
    layout: "/user",
    path: "/nouvelle_note",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: NoteForm,
    navbar: true,
    secondary : true
  },
  {
    name: "Sign In",
    layout: "/auth",
    path: "/sign-in",
    icon: <Icon as={MdLock} width='20px' height='20px' color='inherit' />,
    component: SignInCentered,
    navbar: true,
  },
];

export default routes;
