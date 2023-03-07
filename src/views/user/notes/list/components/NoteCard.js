import {
  Box,
  Heading,
  Text,
  Flex,
  useColorModeValue,
  Link,
  Button,
} from '@chakra-ui/react';
import Card from "components/card/Card.js";
import { BsArrowUpRight } from 'react-icons/bs';

export default function NoteCard(props) {
  const { titre, matiere, contenu} = props;
  const textColorBid = useColorModeValue("brand.500", "white");

  return (
    <Card p='20px'>
      <Flex direction={{ base: "column" }} justify='center'>
        <Box p={4}>
          <Heading color={'black'} fontSize={'2xl'} >
            {titre}
          </Heading>
          <br></br>
          <Text color={'gray.500'} noOfLines={7}>
            {contenu}
          </Text>
        </Box>
        <Box as='footer'>
            <Flex
            align='start'
            justify='space-between'
            direction={{
              base: "row",
              md: "column",
              lg: "row",
              xl: "column",
              "2xl": "row",
            }}
            mt='25px'>
            <Text fontWeight='700' fontSize='sm' color={textColorBid}>
              {matiere}
            </Text>
            <Link
              href={''}
              mt={{
                base: "0px",
                md: "10px",
                lg: "0px",
                xl: "10px",
                "2xl": "0px",
              }}>
              <Button
                variant='darkBrand'
                color='white'
                fontSize='sm'
                fontWeight='500'
                borderRadius='70px'
                px='24px'
                py='5px'>
                View More 
                <BsArrowUpRight />
              </Button>
            </Link>
            </Flex>
          </Box>  
      </Flex>
    </Card>
  );
}