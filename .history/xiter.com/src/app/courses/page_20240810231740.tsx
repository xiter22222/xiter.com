import React from 'react';
import { Box, Flex, Heading, Text, Button, Container, Image, Card, CardBody, CardFooter, Divider } from '@chakra-ui/react';

const videoData = [
  {
    id: '69Tzh_0lHJ8',
    description: 'Introduction to Course 1',
  },
  {
    id: 'bS9em7Bg0iU',
    description: 'Deep Dive into Course 2',
  },
  {
    id: 'ZgGss27IfwA',
    description: 'Overview of Course 3',
  },
  
];

const CoursePage = () => {
  // Options for the YouTube player
  const videoOptions = {
    height: '200',
    width: '360',
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <Box>
      <Container maxW="container.xl" py={8}>
        {/* Centered Course Text */}
        <Flex direction="column" align="center" justify="center" mb={6}>
          <Heading as="h1" size="2xl" textAlign="center" mb={2}>
            Course
          </Heading>
          <Text fontSize="lg" textAlign="center" mb={6}>
            Checkout our free & paid courses below!
          </Text>
        </Flex>

        {/* Horizontal Cards Layout */}
        <Flex direction="row" wrap="wrap" justify="center" spacing={3}>
          {videoData.map((video, index) => (
            <Box key={index} p={2} flex="1 1 300px" mb={4}>
              <Card 
                maxW="md" 
                p={0} 
                boxShadow="none"  // Removed box shadow
                borderWidth="0"    // Removed border width
                borderRadius="none" // Removed border radius
                bg="transparent"   // Removed background color
              >
                <CardBody p={0} m={0}>
                  <Image
                    src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`} // YouTube thumbnail URL
                    alt="YouTube Video Thumbnail"
                    borderRadius="none" // Removed border radius for the image
                    objectFit="cover"
                    boxSize="100%"
                  />
                  <Text fontSize="md" mt={2} px={2}>
                    {video.description}
                  </Text>
                </CardBody>
                <Divider />
                <CardFooter p={2}>
                  <Button colorScheme="teal" size="lg" width="full">
                    Free Button
                  </Button>
                </CardFooter>
              </Card>
            </Box>
          ))}
        </Flex>
      </Container>
    </Box>
  );
};

export default CoursePage;
