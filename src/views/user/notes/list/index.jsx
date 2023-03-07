/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || | 
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___|
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* Horizon UI - v1.1.0
=========================================================

* Product Page: https://www.horizon-ui.com/
* Copyright 2022 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import React from "react";

// Chakra imports
import {
  Box,
  Button,
  Flex,
  Link,
  useColorModeValue,
  SimpleGrid,
} from "@chakra-ui/react";

import notesData from "views/user/notes/list/variables/notesData.json";
import NoteCard from "./components/NoteCard";


export default function Notes() {
  // Chakra Color Mode
  const textColorBrand = useColorModeValue("brand.500", "white");
  const getData = (notesData) => {
    return (notesData.map((prop) => {
      return (
      <NoteCard 
        titre = {prop.titre}
        contenu = {prop.contenu}
        matiere = {prop.matiere}/>
      );
    }))
  }
  return (
    <Box pt={{ base: "180px", md: "80px", xl: "80px" }}>
      {/* Main Fields */}
        <Flex
          flexDirection='column' 
          gridArea={{ xl: "1 / 1 / 2 / 3", "2xl": "1 / 1 / 2 / 2" }}>
            <Flex
              mt='45px'
              mb='20px'
              justifyContent='space-between'
              direction={{ base: "column", md: "row" }}
              align={{ base: "start", md: "center" }}>
              <Flex
                align='center'
                me='30px'
                ms={{ base: "24px", md: "0px" }}
                mt={{ base: "20px", md: "0px" }}>
                <Link
                  color={textColorBrand}
                  fontWeight='500'
                  me={{ base: "34px", md: "44px" }}
                  to='#art'>
                  Toutes
                </Link>
                <Link
                  color={textColorBrand}
                  fontWeight='500'
                  me={{ base: "34px", md: "44px" }}
                  to='#art'>
                  Art
                </Link>
                <Link
                  color={textColorBrand}
                  fontWeight='500'
                  me={{ base: "34px", md: "44px" }}
                  to='#music'>
                  Music
                </Link>
                <Link
                  color={textColorBrand}
                  fontWeight='500'
                  me={{ base: "34px", md: "44px" }}
                  to='#collectibles'>
                  Collectibles
                </Link>
                <Link color={textColorBrand} fontWeight='500' to='#sports'>
                  Sports
                </Link>
              </Flex>
              <Flex
                align='center'
                me='20px'
                ms={{ base: "24px", md: "0px" }}
                mt={{ base: "20px", md: "0px" }}>
              <Link href="#/user/nouvelle_note">
              <Button 
                fontSize='m'
                fontWeight='500'
                borderRadius='70px'
                px='24px'
                py='5px'
              >
              Créer une nouvelle note</Button>
              </Link>
              </Flex>
            </Flex>
            <SimpleGrid columns={{ base: 1, md: 4 }} gap='20px'>
              {getData(notesData)}
            </SimpleGrid>
          </Flex>
      {/* Delete Product */}
    </Box>
  );
}
